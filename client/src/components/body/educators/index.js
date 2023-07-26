/* eslint-disable react/prop-types */
import * as React from "react";
import { bindActionCreators } from "redux";
import { actions as mainActions } from "../../../reducers/MainReducer";
import { connect } from "react-redux";
import resourceCards from "../../../constants/educatorsContent/resource-cards";
import { Educator_Resource_Card } from "./Educator_Resource_Card";

function Educators(props) {
  const { user } = props;
  const firstname = user ? user.firstname : "Educator";
  const cards = resourceCards.map((card) => {
    return <Educator_Resource_Card
      key={card.Key}
      Card={card}
    />
  })
  return (
    <div className="educators-page tw-h-screen">
      <span className={"top-span tw-h-600px"}>
        <div className={"left-container"}>
          <div>
            <p className={"educator-heading"}>EDUCATOR RESOURCES</p>
          </div>
          <div className={"bottom_left_container"}>
            <p className={"educator-welcome"}>Hello, {firstname}!</p>
          </div>
        </div>
        <div
          className={
            "right-container tw-h-100 tw-border-4 tw-border-dashed tw-border-labGreen"
          }
        >
          <div className={"educator-welcome"}>Placeholder for Intro Video</div>
        </div>
      </span>

      {/* Lecture Slides, Videos, and Redirect to Profile*/}
      <span className={"bottom-span"}>
        {cards}
      </span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mainActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Educators);
