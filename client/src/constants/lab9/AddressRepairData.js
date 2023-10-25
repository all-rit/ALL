export const AddressRepairData = {
    countries: [
        {
            id: 0,
            countryVariable: "us",
            countryName: "united_states",
            comment: "// enter the following address infomation: streetAddress, city, state, postalCode",
            userInput: "",
            validate_expression: "",
            correctAddressFormat: "streetAddress, city, state, postalCode"
        },
        {
            id: 1,
            countryVariable: "uk",
            countryName: "united_kingdom",
            comment: "// enter the following address infomation: streetAddress, locality, city, postalCode",
            userInput: "",
            validate_expression: "",
            correctAddressFormat: "streetAddress, locality, city, postalCode"
        },
        {
            id: 2,
            countryVariable: "jp",
            countryName: "japan",
            comment: "// enter the following address infomation: postalCode, prefecture, city, ward, block, buildingName",
            userInput: "",
            validate_expression: "",
            correctAddressFormat: "postalCode, prefecture, city, ward, block, buildingName"
        },
        {
            id: 2,
            countryVariable: "db",
            countryName: "dubai",
            comment: "// enter the following address infomation: streetAddress, locality, city, emirate, postalCode",
            userInput: "",
            validate_expression: "",
            correctAddressFormat: "streetAddress, locality, city, emirate, postalCode"
        }
    ]
}