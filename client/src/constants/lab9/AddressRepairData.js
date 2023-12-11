export const AddressRepairData = {
  countries: [
    {
      id: 0,
      countryVariable: "us",
      countryName: "united_states",
      comment:
        "// Enter the following address format: 'streetAddress, city, state, postalCode'",
      userInput: "",
      validate_expression: `streetAddress, city, state, postalCode`,
      correct_expression: "streetAddress, city, state, postalCode",
    },
    {
      id: 1,
      countryVariable: "uk",
      countryName: "united_kingdom",
      comment:
        "// Enter the following address format: 'streetAddress, locality, city, postalCode'",
      userInput: "",
      validate_expression: `streetAddress, locality, city, postalCode`,
      correct_expression: "streetAddress, locality, city, postalCode",
    },
    {
      id: 2,
      countryVariable: "jp",
      countryName: "japan",
      comment:
        "// Enter the following address format: 'postalCode, prefecture, city, ward, block, buildingName'",
      userInput: "",
      validate_expression: `postalCode, prefecture, city, ward, block, buildingName`,
      correct_expression:
        "postalCode, prefecture, city, ward, block, buildingName",
    },
    {
      id: 3,
      countryVariable: "db",
      countryName: "dubai",
      comment:
        "// Enter the following address format: 'streetAddress, locality, city, emirate, postalCode'",
      userInput: "",
      validate_expression: `streetAddress, locality, city, emirate, postalCode`,
      correct_expression: "streetAddress, locality, city, emirate, postalCode",
    },
    {
      id: 4,
      countryVariable: "df",
      countryName: "default_format",
      comment:
        "// Enter the following address format for the default: 'streetAddress, city, state, postalCode'",
      userInput: "",
      validate_expression: `streetAddress, city, state, postalCode`,
      correct_expression: "streetAddress, city, state, postalCode",
    },
  ],
};
