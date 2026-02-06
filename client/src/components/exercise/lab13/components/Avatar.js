import React from 'react';
import PropTypes from 'prop-types';
import RobotImage from './robot.png';

const Avatar = ({ type, size = 40 }) => {
  const isAI = type === 'ai';

  return (
    <div
      className="tw-flex-shrink-0"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: isAI ? '#0144D5' : '#FACE35',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: isAI ? 'white' : 'black',
        fontSize: size * 0.5,
      }}
    >
      {isAI ? (
        <img
          src={RobotImage}
          alt="AI Avatar"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      ) : (
        <span
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: size * 0.5,
          }}
        >
          👤
        </span>
      )}
    </div>
  );
};

Avatar.propTypes = {
  type: PropTypes.oneOf(['ai', 'user']).isRequired,
  size: PropTypes.number,
};

export default Avatar;
