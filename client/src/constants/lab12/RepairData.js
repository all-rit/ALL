const IdentityFormData = {
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
      correctVariableExpression: "preferredName",
      validateVariableExpression: `preferredName`,
      userInput: "",
    },
    {
      id: 1,
      listName: "Pronouns",
      variableName: "pronouns",
      correctVariableExpression: "pronouns",
      validateVariableExpression: `pronouns`,
      userInput: "",
    },
    {
      id: 2,
      variableName: "preferredName",
      formDataName: "formData.preferredName",
      correctFormDataName: "formData.preferredName",
      validateFormDataName: `formData.preferredName`,
      userInput: "",
    },
    {
      id: 3,
      variableName: "pronouns",
      formDataName: "formData.pronouns",
      correctFormDataName: "formData.pronouns",
      validateFormDataName: `formData.pronouns`,
      userInput: "",
    },
  ],
};

export default IdentityFormData;
