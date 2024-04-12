/* javascriptRegex searches for javascript keywords such as const, var, etc */
export const javascriptRegex =
  /\b(const|var|let|function|default|return|import|export|from|console)\b/g;

/* operatorRegex only colors operator symbols in a passed in child, such as /?+, etc */
export const operatorRegex = /(\+|-|\*|\/|\]|\[|,|;|:|=|==|>|\.|\(|\)|{|})/g;

/* reactRegex searches in the children for ReactJS keywords like props or useState */
export const reactRegex =
  /\b(useState|useEffect|useMemo|useContext|props|JSON|target|error)\b/g;

/* funcRegex searches in the children for a function call keywords like .() */
export const funcRegex =
  /\b(map|filter|split|toFixed|includes|endsWith|startsWith|log|stringify|fetch|then|catch|e)\b/g;

/* numberRegex searches for numbers */
export const numberRegex = /-?\d+(\.\d+)?/g;

/* htmlTagRegex searches for html tag keywords such as div, span, etc */
export const htmlTagRegex =
  /\b(div|span|Button|button|p|img|ul|li|input|label)\b/g;

/* htmlElementRegex uses regex html attributes such as className, onClick, etc */
export const htmlElementRegex =
  /\b(className|onClick|disabled|next|fileName|)\b/g;
