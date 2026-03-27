import ReactText from '../../../../../all-components/CodeBlock/StyleComponents/ReactText';
import CodeLine from '../../../../../all-components/CodeBlock/Components/CodeLine';
import Tab from '../../../../../all-components/CodeBlock/Components/Tab';
import CommentText from '../../../../../all-components/CodeBlock/StyleComponents/CommentText';
import JSONText from '../../../../../all-components/CodeBlock/StyleComponents/JSONText';
import CodeBlockInput from '../../../../../all-components/CodeBlock/Components/CodeBlockInput';
import MultiTab from '../../../../../all-components/CodeBlock/Components/MultiTab';
import PropTypes from 'prop-types';
import ErrorText from '../../../../../all-components/CodeBlock/StyleComponents/ErrorText';

const DateFormRepair = (props = {}) => {
  const { inputs, userInput, validInputs, isFirst } = props;
  return (
    <>
      <ReactText>const DateForm = (props) =&#62; &#123;</ReactText>
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
        <Tab /> <ReactText> const dates = &#123; </ReactText>
      </CodeLine>

      {inputs.map((input, index) => (
        <div key={index}>
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            <ReactText>
              {' '}
              &ldquo;{input.countryVariable}&rdquo; = &#123;
            </ReactText>
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={3} />
            <CommentText>{input.comment}</CommentText>
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={3} />
            <JSONText> &ldquo;dateform&rdquo; : </JSONText>
            <JSONText>&ldquo;</JSONText>
            <CodeBlockInput
              value={input.userInput}
              attributes={{
                onChange: (event) => {
                  userInput(input.id, event.target.value);
                },
                name: input.name,
                type: 'text',
                placeholder: 'Enter Dateform Here',
              }}
            />
            <JSONText>&rdquo;</JSONText>
          </CodeLine>
          {!validInputs[input.id] && !isFirst && (
            <CodeLine>
              <MultiTab numberOfTabs={3} />
              <ErrorText>
                Error in form submission. Please enter &quot;
                {input.correct_expression}&quot; and resubmit.
              </ErrorText>
            </CodeLine>
          )}
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
      <ReactText>export default DateForm;</ReactText>
    </>
  );
};
DateFormRepair.propTypes = {
  inputs: PropTypes.array,
  userInput: PropTypes.func,
  validInputs: PropTypes.array,
  isFirst: PropTypes.bool,
};

export default DateFormRepair;
