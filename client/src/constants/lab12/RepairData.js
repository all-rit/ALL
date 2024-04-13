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
      formDataName: "formData.preferredName",

      correctListExpression: "Preferred Name",
      validateListExpression: `Preferred Name`,

      correctVariableExpression: "preferredName",
      validateVariableExpression: `preferredName`,

      correctFormDataName: "formData.preferredName",
      validateFormDataName: `formData.preferredName`,
    },
    {
      id: 1,
      listName: "Pronouns",
      variableName: "pronouns",
      formDataName: "formData.pronouns",

      correctListExpression: "Pronouns",
      validateListExpression: `Pronouns`,

      correctVariableExpression: "pronouns",
      validateVariableExpression: `pronouns`,

      correctFormDataName: "formData.pronouns",
      validateFormDataName: `formData.pronouns`,
    },
  ],
};

export default IdentityFormData;
