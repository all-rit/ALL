import React, { useState, useEffect } from "react";
// link to image: https://pixabay.com/vectors/cat-pet-animal-kitty-kitten-cute-6484941/
// license: https://pixabay.com/service/license/
import catImage from "../../../../../assets/images/lab3/exercise/cat.svg";
// link to image: https://pixabay.com/vectors/taxi-cab-car-vehicle-47204/
// license: https://pixabay.com/service/license/
import carImage from "../../../../../assets/images/lab3/exercise/car.svg";
// link to image: https://pixabay.com/vectors/hamburger-cheeseburger-fast-food-31775/
// license: https://pixabay.com/service/license/
import burgerImage from "../../../../../assets/images/lab3/exercise/hamburger.svg";
// link to image: https://pixabay.com/vectors/cow-animal-mammal-horns-white-159731/
// license: https://pixabay.com/service/license/
import cowImage from "../../../../../assets/images/lab3/exercise/cow.svg";
import CatClickFirstNavigate from "../../helpers/CatClickFirstNavigate";
import { Typography } from "@material-ui/core";
import { PageService } from "../../../../../services/PageService";
import { LAB_ID } from "../../../../../constants/lab3/index";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const Exercise = () => {
  const { actions } = useMainStateContext();
  const [render, setRender] = useState("");
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
    const interval = setInterval(() => {
      setSecondsElapsed(secondsElapsed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [actions, secondsElapsed]);

  const _renderSubComp = (path) => {
    if (render === "CatClickNavigate") {
      return <CatClickFirstNavigate path={path} />;
    }
  };

  const catClick = () => {
    console.log("Cat image clicked!");
    const name = "NonSimulatedExercise";
    PageService.createPage(name, secondsElapsed, LAB_ID);
    setRender("CatClickNavigate");
  };

  const burgerClick = () => {
    console.log("Burger image clicked!");
  };

  const carClick = () => {
    console.log("Car image clicked!");
  };

  const cowClick = () => {
    console.log("Cow image clicked!");
  };

  const imgStyle = {
    width: "128px",
    height: "128px",
    border: "1px solid black",
  };

  const tableStyle = {
    border: "1px solid black",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  };

  return (
    <div>
      <Typography className={"center"}>Click on the image of a cat.</Typography>
      <br />
      <table style={tableStyle} className={"center"}>
        <tbody>
          <tr>
            <td>
              <button style={imgStyle} onClick={() => catClick()}>
                <img src={catImage} alt={"image1"} />
              </button>
            </td>
            <td>
              <button style={imgStyle} onClick={() => carClick()}>
                <img src={carImage} alt={"image2"} />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={imgStyle} onClick={() => burgerClick()}>
                <img src={burgerImage} alt={"image3"} />
              </button>
            </td>
            <td>
              <button style={imgStyle} onClick={() => cowClick()}>
                <img src={cowImage} alt={"image4"} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {_renderSubComp("/Lab3/Exercise/ExerciseInstructions")}
    </div>
  );
};

export default Exercise;
