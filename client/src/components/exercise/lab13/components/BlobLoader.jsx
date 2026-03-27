import PropTypes from 'prop-types';
import './BlobLoader.css';

/**
 * Animated blob loader that creates three blob
 * shapes that animate in different ways and displays
 * them.
 * @param {string} props.animationMode - Controls the animation behaviour:
 *    - 'pulsing' : blob becomes larger then smaller
 *    - 'spinning': blob rotates and becomes larger than smaller
 *    - 'static'  : blob doesn't move
 * @returns {JSX.Element} - Blob loader component
 */
export default function BlobLoader({ animationMode = 'static' }) {
  return (
    <div style={styles.blobContainer}>
      {/* Blob 1/3 */}
      <div
        className="blob-1"
        style={{
          ...styles.blob,
          animation:
            animationMode === 'spinning'
              ? 'blob-1-spin 4s linear infinite'
              : animationMode === 'pulsing'
                ? 'blob-1-pulse 1.25s ease-in-out infinite'
                : 'none',
          border:
            animationMode === 'pulsing' ? '1px solid black' : '1px solid black',
        }}
      ></div>
      {/* Blob 2/3 */}
      <div
        className="blob-2"
        style={{
          ...styles.blob,
          animation:
            animationMode === 'spinning'
              ? 'blob-2-spin 2s linear infinite'
              : animationMode === 'pulsing'
                ? 'blob-2-pulse 1s ease-in-out infinite'
                : 'none',
          border:
            animationMode === 'pulsing' ? '1px solid black' : '1px solid black',
        }}
      ></div>
      {/* Blob 3/3 */}
      <div
        className="blob-3"
        style={{
          ...styles.blob,
          animation:
            animationMode === 'spinning'
              ? 'blob-3-spin 8s linear infinite'
              : animationMode === 'pulsing'
                ? 'blob-3-pulse 1.5s ease-in-out infinite'
                : 'none',
          border:
            animationMode === 'pulsing' ? '1px solid black' : '1px solid black',
        }}
      ></div>
    </div>
  );
}

BlobLoader.propTypes = {
  animationMode: PropTypes.oneOf(['pulsing', 'spinning', 'static']).isRequired,
};

const styles = {
  // Blob container
  blobContainer: {
    position: 'relative',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: '12px',
    top: '20px',
  },
  // Base blob styling
  blob: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '80%',
    height: '80%',
    border: '1px solid black',
  },
};
