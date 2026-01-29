import React, { useEffect } from "react";
import useMainStateContext from "src/reducers/MainContext";

const Main = () => {
  const { actions } = useMainStateContext();
  const startImagine = () => actions.setIsImagine(true);
  useEffect(() => {
    startImagine();
  }, []);

  return <div>Imagine 26 Component</div>;
};

export default Main;
