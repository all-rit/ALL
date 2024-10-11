let IdentityFormData = {
  constData: [
    {
      id: 0,
      listName: "Legal First Name",
      variableName: "legalFirstName",
    },
    {
      id: 1,
      listName: "Legal Last Name",
      variableName: "legalLastName",
    },
    {
      id: 2,
      listName: "College",
      variableName: "college",
    },
    {
      id: 3,
      listName: "Major",
      variableName: "major",
    },
    {
      id: 4,
      listName: "Graduation Term",
      variableName: "graduationTerm",
    },
  ],
  inputData: [
    {
      id: 0,
      listName: "Preferred Name",
      variableName: "preferredName",
      formDataName: "formData.preferredName",
      correct_expression: "preferredName",
      validate_expression: `preferredName`,
      userInput: "",
    },
    {
      id: 1,
      listName: "Pronouns",
      variableName: "pronouns",
      formDataName: "formData.pronouns",
      correct_expression: "pronouns",
      validate_expression: `pronouns`,
      userInput: "",
    },
    {
      id: 2,
      listName: "Preferred Name",
      variableName: "preferredName",
      formDataName: "formData.preferredName",
      correct_expression: "formData.preferredName",
      validate_expression: `formData.preferredName`,
      userInput: "",
    },
    {
      id: 3,
      listName: "Pronouns",
      variableName: "pronouns",
      formDataName: "formData.pronouns",
      correct_expression: "formData.pronouns",
      validate_expression: `formData.pronouns`,
      userInput: "",
    },
  ],
};

export default IdentityFormData;
