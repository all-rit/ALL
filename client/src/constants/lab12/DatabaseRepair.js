const DatabaseFormData = {
  constData: [
    {
      id: 0,
      variable: "id",
      dataType: "serial",
      tabs: 8,
      spaces: "",
    },
    {
      id: 1,
      variable: "firstName",
      dataType: "varchar(255)",
      tabs: 5,
      spaces: "\u00a0\u00a0",
    },
    {
      id: 2,
      variable: "lastName",
      dataType: "varchar(255)",
      tabs: 6,
      spaces: "",
    },
    {
      id: 3,
      variable: "college",
      dataType: "varchar(255)",
      tabs: 6,
      spaces: "\u00a0",
    },
    {
      id: 4,
      variable: "major",
      dataType: "varchar(255)",
      tabs: 7,
      spaces: "",
    },
    {
      id: 5,
      variable: "graduationTerm",
      dataType: "varchar(255)",
      tabs: 4,
      spaces: "",
    },
  ],
  inputData: [
    {
      id: 0,
      variable: "pronouns",
      userInput: "",
      correctExpression: "'he/him', 'she/her', 'they/them'",
      validateExpression: `'he/him', 'she/her', 'they/them'`,
    },
    {
      id: 1,
      variable: "preferredName",
      userInput: "",
      correctExpression: "varchar(255)",
      validateExpression: "varchar(255)",
    },
  ],
};

export default DatabaseFormData;
