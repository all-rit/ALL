import PropTypes from 'prop-types';

const ImagineHeader = (props) => {
  return (
    <div className="tw-absolute tw-top-10 tw-w-[96%]">
      <h3 className={'tw-title tw-pb-3  '}>{props.title}</h3>
      <div className={'tw-flex tw-justify-center'}>
        <hr className={'tw-w-3/5 tw-bg-labLightGray'} />
      </div>
    </div>
  );
};

ImagineHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ImagineHeader;
