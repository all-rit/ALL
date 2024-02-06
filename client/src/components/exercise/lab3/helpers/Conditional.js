/**
 * A component that renders its children if a condition is true.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.if - The condition to check.
 * @returns {ReactNode} - The rendered children if the condition is true, otherwise null.
 */
const Conditional = (props) => {
  return !!props.if && props.children;
};

export default Conditional;
