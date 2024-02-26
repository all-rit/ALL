import React, { useState, useEffect, useRef, Fragment } from "react";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import { PageService } from "../../../../services/PageService";
import { LAB_ID } from "../../../../constants/lab4";
import AppInstructions from "../components/AppInstructions";
import { EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";

const SmallTarget = () => {
  const { actions } = useMainStateContext();

  const style = {
    marginRight: 10,
    marginLeft: 10,
    width: 20,
    height: 17,
    fontSize: 10,
  };

  const [state, setState] = useState({
    secondsElapsed: 0,
    marginRight: style.marginRight + "px",
    marginLeft: style.marginLeft + "px",
    width: style.width + "px",
    height: style.height + "px",
    fontSize: style.fontSize + "px",
    top: "px",
    left: "px",
  });

  const myDiv = useRef(null);

  const handleSubmit = () => {
    const name = "SmallTarget";
    PageService.createPage(name, state.secondsElapsed, LAB_ID);
    navigate("/Lab4/Exercise/TargetGuideline");
  };

  const wiggle = (e) => {
    const distX = calculateDistanceX(myDiv.current, e.screenX);
    const distY = calculateDistanceY(myDiv.current, e.screenY);
    const right = -distX / 2 > -300 ? -(distX / 2) : -(distX / 2) / 25;
    const top = distY / 2 < 300 ? distY / 5 : 300;
    setState((prevState) => ({
      ...prevState,
      right: right + "px",
      top: top + "px",
    }));
  };

  const calculateDistanceX = (elem, mouseX) => {
    return Math.floor(mouseX - (elem.offsetLeft + style.width / 2));
  };

  const calculateDistanceY = (elem, mouseY) => {
    return Math.floor(mouseY - (elem.offsetTop + style.height / 2));
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
    const interval = setInterval(
      () =>
        setState((prevState) => ({
          ...prevState,
          secondsElapsed: prevState.secondsElapsed + 1,
        })),
      1000,
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  const instructions = "Click the start button.";
  return (
    <Fragment>
      <div>
        <AppInstructions instructions={instructions} />
        <div
          style={{
            width: "300px",
            height: "300px",
            margin: "auto",
            paddingTop: "50px",
            position: "relative",
          }}
          onMouseMove={(e) => wiggle(e)}
        >
          <Button
            ref={myDiv}
            href="#"
            onClick={handleSubmit}
            variant={"contained"}
            color={"primary"}
            style={state}
          >
            Start
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default SmallTarget;
