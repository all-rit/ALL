import Tab from '../../../../../all-components/CodeBlock/Components/Tab';
import CodeLine from '../../../../../all-components/CodeBlock/Components/CodeLine';
import MultiTab from '../../../../../all-components/CodeBlock/Components/MultiTab';
import ReactText from '../../../../../all-components/CodeBlock/StyleComponents/ReactText';
import CommentText from '../../../../../all-components/CodeBlock/StyleComponents/CommentText';
import JSONText from '../../../../../all-components/CodeBlock/StyleComponents/JSONText';
import CodeBlockInput from '../../../../../all-components/CodeBlock/Components/CodeBlockInput';
import PropTypes from 'prop-types';
import ErrorText from '../../../../../all-components/CodeBlock/StyleComponents/ErrorText';

const AddressRepairCodeBlock = (props = {}) => {
  const { inputs, userInput, validInputs, isFirst } = props;

  return (
    <>
      <ReactText>const AddressFormats = (props) =&#62; &#123;</ReactText>
      {inputs.map((country, index) => (
        <CodeLine key={index}>
          <Tab />{' '}
          <ReactText>
            {' '}
            const {country.countryVariable} = &ldquo;{country.countryName}
            &rdquo;{' '}
          </ReactText>
        </CodeLine>
      ))}

      <br />

      <CodeLine>
        <Tab /> <ReactText> const addressFormats = &#123; </ReactText>
      </CodeLine>

      {inputs.map((input) => (
        <div key={input.id}>
          {/* line 1 */}
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            <ReactText>
              {' '}
              &ldquo;{input.countryVariable}&rdquo; = &#123;
            </ReactText>
          </CodeLine>

          {/* line 2 */}
          <CodeLine>
            <MultiTab numberOfTabs={3} />
            <CommentText>{input.comment}</CommentText>
          </CodeLine>

          {/* line 3 */}
          <CodeLine>
            <MultiTab numberOfTabs={3} />
            <JSONText>&ldquo;addressFormat&rdquo; :</JSONText>
            <JSONText>&ldquo;</JSONText>
            <CodeBlockInput
              value={input.userInput}
              attributes={{
                onChange: (event) => {
                  userInput(input.id, event.target.value);
                },
                name: input.countryName,
                type: 'text',
                placeholder: 'Enter Address Format Here',
                // overwrite styling to make input wider
                className: 'p-1 tw-w-[34rem] code_editor__input',
              }}
            />
            <JSONText>&rdquo;</JSONText>
          </CodeLine>
          {!validInputs[input.id] && !isFirst && (
            <CodeLine>
              <MultiTab numberOfTabs={3} />
              <ErrorText>
                Error in form submission. Please type &quot;
                {input.correct_expression}&quot; and resubmit.
              </ErrorText>
            </CodeLine>
          )}

          {/* line 4 */}
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            <ReactText> &#125;, </ReactText>
          </CodeLine>
        </div>
      ))}
      <CodeLine>
        <Tab />
        <ReactText> &#125; </ReactText>
      </CodeLine>
      <ReactText>&#125;</ReactText>
      <ReactText>export default AddressFormats;</ReactText>
    </>
  );
};

AddressRepairCodeBlock.propTypes = {
  inputs: PropTypes.array,
  userInput: PropTypes.func,
  validInputs: PropTypes.array,
  isFirst: PropTypes.bool,
};

export default AddressRepairCodeBlock;
