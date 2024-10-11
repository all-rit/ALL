/* javascriptRegex searches for javascript keywords such as const, var, etc */
const javascriptRegex =
  /\b(const|var|let|function|default|return|import|export|from|console)\b/g;

/* operatorRegex only colors operator symbols in a passed in child, such as /?+, etc */
const operatorRegex = /(\+|-|\*|\/|\]|\[|,|;|:|=|==|>|\.|\(|\)|{|})/g;

/* reactRegex searches in the children for ReactJS keywords like props or useState */
const reactRegex =
  /\b(useState|useEffect|useMemo|useContext|props|JSON|target|error)\b/g;

/* funcRegex searches in the children for a function call keywords like .() */
const funcRegex =
  /\b(map|filter|split|toFixed|includes|endsWith|startsWith|log|stringify|fetch|then|catch|e)\b/g;

/* numberRegex searches for numbers */
const numberRegex = /-?\d+(\.\d+)?/g;

/* htmlTagRegex searches for html tag keywords such as div, span, etc */
const htmlTagRegex = /\b(div|span|Button|button|p|img|ul|li|input|label)\b/g;

/* htmlElementRegex uses regex html attributes such as className, onClick, etc */
const htmlElementRegex = /\b(className|onClick|disabled|next|fileName)\b/g;

/* sqlKeywordRegex uses regex searches for SQL keywords such as CREATE, TABLE, COUNT, etc */
const sqlKeywordRegex =
  /\b(CREATE|TABLE|COUNT|\*|ALTER|DEFAULT|DELETE|DROP|COLUMN|ROW|FOREIGN KEY|IN|INDEX|INNER JOIN|OUTER JOIN|INSERT INTO|IS NOT NULL|IS NULL| LIMIT|PRIMARY KEY|SELECT|SELECT ALL)\b/g;

/* sqlVariableRegex uses regex to search for SQL variables such as varchar, serial, timestamp, etc */
const sqlVariableRegex =
  /\b(varchar|char|enum|boolean|int|integer|float|double|date|datetime|timestamp|serial)\b/g;

export {
  javascriptRegex,
  reactRegex,
  funcRegex,
  operatorRegex,
  numberRegex,
  htmlElementRegex,
  htmlTagRegex,
  sqlKeywordRegex,
  sqlVariableRegex,
};
