import PropTypes from 'prop-types';

const AppInstructions = (props) => {
  return (
    <div className={'tw-p-3'}>
      <p className="tw-body-text tw-font-medium tw-text-left">
        {props.instructions}
      </p>
      <p className={`${props.class} tw-body-text tw-font-medium tw-text-left`}>
        {props.instructions2}
      </p>
    </div>
  );
};

AppInstructions.propTypes = {
  instructions: PropTypes.string,
  class: PropTypes.string,
  instructions2: PropTypes.string,
};

export default AppInstructions;
