
/* javascriptRegex searches for javascript keywords such as const, var, etc */
export const javascriptRegex =
  /\b(const|var|let|function|default|return|import|export)\b/g;

/* operatorRegex only colors operator symbols in a passed in child, such as /?+, etc */
export const operatorRegex = /(\+|-|\*|\/|;|:|=|==|>|\(|\)|{|})/g;

/* reactRegex searches in the children for ReactJS keywords like props or useState */
export const reactRegex = /\b(useState|useEffect|useMemo|useContext|props)\b/g;

/* numberRegex searches for javascript keywords such as const, var, etc */
export const numberRegex = /-?\d+(\.\d+)?/g;

/* htmlTagRegex searches for html tag keywords such as div, span, etc */
export const htmlTagRegex = /\b(div|span|Button|p)\b/g;

/* htmlElementRegex uses regex html attributes such as className, onClick, etc */
export const htmlElementRegex = /\b(className|onClick|disabled|next|fileName|)\b/g;