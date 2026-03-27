import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
    <div className="tw-text-center tw-sub-title tw-font-bold">
      Question <span>{props.counter}</span>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
