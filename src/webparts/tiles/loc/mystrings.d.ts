declare interface ITilesWebPartStrings {
  FirstPageDescription: string;
  SecondPageDescription: string;
  ThirdPageDescription: string;
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AdvancedGroupName: string;
  ConditionalFirstGroupName: string;
  ConditionalSecondGroupName: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppLocalEnvironmentOffice: string;
  AppLocalEnvironmentOutlook: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
  AppOfficeEnvironment: string;
  AppOutlookEnvironment: string;
  UnknownEnvironment: string;
  Controls: {
    AdvancedToggle: {
      Label: string;
      OnText: string;
      OffText: string;
    };
    ConditionalToggle: {
      Label: string;
      OnText: string;
      OffText: string;
    };
    Dropdown: {
      Label: string;
      Options: {
        One: string;
        Two: string;
        Three: string;
      };
    };
    CheckBox1: {
      Label: string;
    };
    CheckBox2: {
      Label: string;
    };
    CheckBox3: {
      Label: string;
    };
    Slider: {
      Label: string;
    };
  };
}

declare module 'TilesWebPartStrings' {
  const strings: ITilesWebPartStrings;
  export = strings;
}
