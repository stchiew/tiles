import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  PropertyPaneCheckbox,
  PropertyPaneToggle,
  PropertyPaneSlider
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'TilesWebPartStrings';
import Tiles from './components/Tiles';
import { ITilesProps } from './components/ITilesProps';

export interface ITilesWebPartProps {
  description: string;
  showAdvancedSettings: boolean;
  dropdownSelection: string;
  checkBoxSelection1: string;
  checkBoxSelection2: string;
  checkBoxSelection3: string;
}

export default class TilesWebPart extends BaseClientSideWebPart<ITilesWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const element: React.ReactElement<ITilesProps> = React.createElement(
      Tiles,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.FirstPageDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneToggle("showAdvancedSettings", {
                  label: strings.Controls.AdvancedToggle.Label,
                  onText: strings.Controls.AdvancedToggle.OnText,
                  offText: strings.Controls.AdvancedToggle.OffText,
                })
              ]
            },
            {
              groupName: strings.AdvancedGroupName,
              isCollapsed: !this.properties.showAdvancedSettings,
              groupFields: [
                PropertyPaneDropdown("dropdownSelection", {
                  label: strings.Controls.Dropdown.Label,
                  options: [
                    { key: "1", text: strings.Controls.Dropdown.Options.One },
                    { key: "2", text: strings.Controls.Dropdown.Options.Two },
                    { key: "3", text: strings.Controls.Dropdown.Options.Three },
                  ],
                }),
              ],
            }
          ]
        },
        {
          header: {
            description: strings.SecondPageDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneCheckbox("checkBoxSelection1", {
                  text: strings.Controls.CheckBox1.Label,
                }),
                PropertyPaneCheckbox("checkBoxSelection2", {
                  text: strings.Controls.CheckBox2.Label,
                }),
                PropertyPaneCheckbox("checkBoxSelection3", {
                  text: strings.Controls.CheckBox3.Label,
                })
              ],
            },
          ],
        },
        {
          header: {
            description: strings.ThirdPageDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneSlider("sliderSelection", {
                  label: strings.Controls.Slider.Label,
                  min: 0,
                  max: 100,
                  value: 50,
                }),
              ],
            }
          ],
        }
      ]
    };
  }
}
