const DateFormData = {
  countries: [
    {
      id: 0,
      countryVariable: "us",
      countryName: "united_states",
      comment: "// Enter 'MM-DD-YYYY' for localized dateform for the US",
      userInput: "",
      validate_expression: `MM-DD-YYYY`,
      correct_expression: "MM-DD-YYYY",
    },
    {
      id: 1,
      countryVariable: "uk",
      countryName: "united_kingdom",
      comment: "// Enter 'YYYY-MM-DD' for localized dateform for the UK",
      userInput: "",
      validate_expression: `YYYY-MM-DD`,
      correct_expression: "YYYY-MM-DD",
    },
    {
      id: 2,
      countryVariable: "jp",
      countryName: "japan",
      comment: "// Enter 'YYYY-MM-DD' for localized dateform for Japan",
      userInput: "",
      validate_expression: `YYYY-MM-DD`,
      correct_expression: "YYYY-MM-DD",
    },
    {
      id: 3,
      countryVariable: "db",
      countryName: "dubai",
      comment: "// Enter 'DD-MM-YYYY' for localized dateform for the Dubai",
      userInput: "",
      validate_expression: `DD-MM-YYYY`,
      correct_expression: "DD-MM-YYYY",
    },
  ],
};
export default DateFormData;
