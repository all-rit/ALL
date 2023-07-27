/* eslint-disable react/prop-types */
import * as React from "react";
import { bindActionCreators } from "redux";
import { actions as mainActions } from "../../../reducers/MainReducer";
import { connect } from "react-redux";
import resourceCards from "../../../constants/educatorsContent/resource-cards";
import { Educator_Resource_Card } from "./Educator_Resource_Card";
import educatorImage from "../../../assets/images/educators/EducatorImage.png";

function Educators(props) {
  const { user } = props;
  const firstname = user ? user.firstname : "Educator";
  const cards = resourceCards.map((card) => {
    return <Educator_Resource_Card key={card.Key} Card={card} />;
  });
  return (
    <div className="educators-page ">
      <span className={"top-span"}>
        <div className={"left-container"}>
          <div>
            <p className={"educator-heading"}>EDUCATOR RESOURCES</p>
          </div>
          <div className={"bottom_left_container"}>
            <p className={"educator-welcome"}>Hello, {firstname}!</p>
          </div>
          <div>
            <p className={"educator-main--body"}>
              {" "}
              Thank you for choosing Accessible Learning Labs as your partner in
              providing web accessibility and STEM education to your students.
              We are thrilled to work alongside you in fostering an inclusive
              learning environment. Our team has curated engaging resources and
              quality support to empower your teaching and inspire young minds.
              Together, let&apos;s create a brighter future where every student
              can thrive and excel in the digital world. We&apos;re honored to
              be a part of your educational journey.
            </p>
          </div>
        </div>
        <div className={"image-container"}>
          <img
            className={"educator-main--image"}
            src={educatorImage}
            alt={"Educator Image"}
          />
        </div>
      </span>

      {/* Lecture Slides, Videos, and Redirect to Profile*/}
      <span className={"bottom-span"}>{cards}</span>
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
