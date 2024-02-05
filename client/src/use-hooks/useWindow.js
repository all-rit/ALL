import { useEffect, useState } from "react";

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [fps, setFPS] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  // Cool way to get fps ;)
  useEffect(() => {
    let time = [];
    const calculateFPS = (timestamp) => {
      time.unshift(timestamp);
      if (time.length > 10) {
        const fps = Math.floor((1000 * 10) / (timestamp - time.pop()));
        setFPS(fps);
      }

      requestAnimationFrame(calculateFPS);
    };

    requestAnimationFrame(calculateFPS);
  }, []);

  return { windowSize, fps };
};

export default useWindowSize;
