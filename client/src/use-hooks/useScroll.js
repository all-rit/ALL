import { useEffect } from "react";

const useScroll = () => {
  return useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useScroll;
