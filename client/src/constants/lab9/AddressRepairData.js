export const AddressRepairData = {
  countries: [
    {
      id: 0,
      countryVariable: "us",
      countryName: "united_states",
      comment:
        "// enter the following address format: streetAddress, city, state, postalCode",
      userInput: "",
      validate_expression: /streetAddress, city, state, postalCode/g,
      correct_expression: "streetAddress, city, state, postalCode",
    },
    {
      id: 1,
      countryVariable: "uk",
      countryName: "united_kingdom",
      comment:
        "// enter the following address format: streetAddress, locality, city, postalCode",
      userInput: "",
      validate_expression: /streetAddress, locality, city, postalCode/g,
      correct_expression: "streetAddress, locality, city, postalCode",
    },
    {
      id: 2,
      countryVariable: "jp",
      countryName: "japan",
      comment:
        "// enter the following address format: postalCode, prefecture, city, ward, block, buildingName",
      userInput: "",
      validate_expression:
        /postalCode, prefecture, city, ward, block, buildingName/g,
      correct_expression:
        "postalCode, prefecture, city, ward, block, buildingName",
    },
    {
      id: 3,
      countryVariable: "db",
      countryName: "dubai",
      comment:
        "// enter the following address format: streetAddress, locality, city, emirate, postalCode",
      userInput: "",
      validate_expression:
        /streetAddress, locality, city, emirate, postalCode/g,
      correct_expression: "streetAddress, locality, city, emirate, postalCode",
    },
  ],
};