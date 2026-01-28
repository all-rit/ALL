import React from "react";
import PropTypes from "prop-types";

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
export default function BlobLoader({ animationMode = "static" }) {
  return (
    <div style={styles.blobContainer}>
      {/* Blob 1/3 */}
      <div
        className="blob-1"
        style={{
          ...styles.blob,
          animation:
            animationMode === "spinning"
              ? "blob-1-spin 4s linear infinite"
              : animationMode === "pulsing"
                ? "blob-1-pulse 1.25s ease-in-out infinite"
                : "none",
          border:
            animationMode === "pulsing" ? "1px solid black" : "1px solid black",
        }}
      ></div>
      {/* Blob 2/3 */}
      <div
        className="blob-2"
        style={{
          ...styles.blob,
          animation:
            animationMode === "spinning"
              ? "blob-2-spin 2s linear infinite"
              : animationMode === "pulsing"
                ? "blob-2-pulse 1s ease-in-out infinite"
                : "none",
          border:
            animationMode === "pulsing" ? "1px solid black" : "1px solid black",
        }}
      ></div>
      {/* Blob 3/3 */}
      <div
        className="blob-3"
        style={{
          ...styles.blob,
          animation:
            animationMode === "spinning"
              ? "blob-3-spin 8s linear infinite"
              : animationMode === "pulsing"
                ? "blob-3-pulse 1.5s ease-in-out infinite"
                : "none",
          border:
            animationMode === "pulsing" ? "1px solid black" : "1px solid black",
        }}
      ></div>

      <style>{`
                /* Set initial border-radius for each blob */
                .blob-1 {
                    border-radius: 32% 58% 69% 43% / 48% 32% 59% 55%;
                }
                .blob-2 {
                    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
                }
                .blob-3 {
                    border-radius: 31% 45% 74% 35% / 38% 56% 51% 87%;
                }

                /* Spinning Animation */
                @keyframes blob-1-spin {
                    0%, 100% {
                    border-radius: 32% 58% 69% 43% / 48% 32% 59% 55%;
                    transform: rotate(0deg) scale(1);
                    }
                    50% {
                    transform: rotate(180deg) scale(0.92);
                    }
                    100% {
                    transform: rotate(360deg) scale(1);
                    }
                }
                
                @keyframes blob-2-spin {
                    0%, 100% {
                    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
                    transform: rotate(0deg) scale(1);
                    }
                    50% {
                    transform: rotate(180deg) scale(1.08);
                    }
                    100% {
                    transform: rotate(360deg) scale(1);
                    }
                }
                
                @keyframes blob-3-spin {
                    0%, 100% {
                    border-radius: 31% 45% 74% 35% / 38% 56% 51% 87%;
                    transform: rotate(0deg) scale(1);
                    }
                    50% {
                    transform: rotate(-180deg) scale(0.95);
                    }
                    100% {
                    transform: rotate(-360deg) scale(1);
                    }
                }
                
                /* Pulsing animations (no rotation, just scale) */
                @keyframes blob-1-pulse {
                    0%, 100% {
                    border-radius: 32% 58% 69% 43% / 48% 32% 59% 55%;
                    transform: scale(0.95);
                    }
                    50% {
                    transform: scale(1.05);
                    }
                }
                
                /* Pulsing Animation */
                @keyframes blob-2-pulse {
                    0%, 100% {
                    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
                    transform: scale(0.95);
                    }
                    50% {
                    transform: scale(1.05);
                    }
                }
                
                @keyframes blob-3-pulse {
                    0%, 100% {
                    border-radius: 31% 45% 74% 35% / 38% 56% 51% 87%;
                    transform: scale(0.95);
                    }
                    50% {
                    transform: scale(1.05);
                    }
                }
            `}</style>
    </div>
  );
}

BlobLoader.propTypes = {
  animationMode: PropTypes.oneOf(["pulsing", "spinning", "static"]).isRequired,
};

const styles = {
  // Blob container
  blobContainer: {
    position: "relative",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: "12px",
    top: "20px",
  },
  // Base blob styling
  blob: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "80%",
    height: "80%",
    border: "1px solid black",
  },
};
