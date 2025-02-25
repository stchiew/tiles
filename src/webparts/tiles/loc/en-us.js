// eslint-disable-next-line no-undef
define([], function () {
  return {
    PropertyPaneDescription: "Description",
    FirstPageDescription: "First Page Description",
    SecondPageDescription: "Second Page Description",
    ThirdPageDescription: "Third Page Description",
    BasicGroupName: "Group Name",
    AdvancedGroupName: "Advanced configuration",
    DescriptionFieldLabel: "Description Field",
    ConditionalFirstGroupName: "Conditional First Group",
    ConditionalSecondGroupName: "Conditional Second Group",
    Controls: {
      AdvancedToggle: {
        Label: "Show advanced settings",
        OnText: "On",
        OffText: "Off",
      },
      ConditionalToggle: {
        Label: "Show conditional settings",
        OnText: "First group",
        OffText: "Second group",
      },
      Dropdown: {
        Label: "Dropdown",
        Options: {
          One: "First",
          Two: "Second",
          Three: "Third",
        },
      },
      CheckBox1: {
        Label: "This is a checkbox",
      },
      CheckBox2: {
        Label: "This is another checkbox",
      },
      CheckBox3: {
        Label: "This is the last checkbox",
      },
      Slider: {
        Label: "Slider",
      },
    },
    AppLocalEnvironmentSharePoint:
      "The app is running on your local environment as SharePoint web part",
    AppLocalEnvironmentTeams:
      "The app is running on your local environment as Microsoft Teams app",
    AppLocalEnvironmentOffice:
      "The app is running on your local environment in office.com",
    AppLocalEnvironmentOutlook:
      "The app is running on your local environment in Outlook",
    AppSharePointEnvironment: "The app is running on SharePoint page",
    AppTeamsTabEnvironment: "The app is running in Microsoft Teams",
    AppOfficeEnvironment: "The app is running in office.com",
    AppOutlookEnvironment: "The app is running in Outlook",
    UnknownEnvironment: "The app is running in an unknown environment",
  };
});
