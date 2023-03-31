import React from "react";
import Avatar from "avataaars";
import PropTypes from "prop-types";
import { actions as exerciseActions } from "../../../../reducers/lab9/ExerciseReducer";
import PawPrint from "../../../../assets/images/lab9/pawPrint.png";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Layout = (props) => {
  const { data, flaggedPosts } = props;
  return (
    <div>
      <div className={"tw-flex tw-items-center tw-bg-[#98c1d9]"}>
        <div className={"tw-ml-4"}>
          <div className={"tw-inline-flex tw-w-12 tw-h-12"}>
            <svg
              className={"tw-text-[#fed136]"}
              style={{ filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 1))" }}
              viewBox="0 0 150 150"
            >
              <polygon points="75 0, 150 150, 0 150" fill="currentColor" />
              <text
                x="50%"
                y="80%"
                textAnchor={"middle"}
                fontWeight={"bold"}
                fontSize="50"
              >
                {flaggedPosts}
              </text>
            </svg>
          </div>
          <div>
            <p className={"tw-font-bold tw-text-lg"}>Flagged Posts</p>
          </div>
        </div>
        <div className={"tw-mx-auto"}>
          <img
            src={PawPrint}
            alt="welcome logo"
            className="tw-h-20 tw-w-20 tw-my-3"
          />
        </div>
        <div className={"tw-flex tw-flex-col tw-mr-4"}>
          <div>
            {data && (
              <Avatar className={"tw-w-16 tw-h-16"} avatarStyle={"Circle"} 
                  topType={data.avatarAttributes.topType}
                  accessoriesType={data.avatarAttributes.accessoriesType}
                  hairColor={data.avatarAttributes.hairColor}
                  facialHairType={data.avatarAttributes.facialHairType}
                  clotheType={data.avatarAttributes.clotheType}
                  clotheColor={data.avatarAttributes.clotheColor}
                  eyeType={data.avatarAttributes.eyeType}
                  eyebrowType={data.avatarAttributes.eyebrowType}
                  mouthType={data.avatarAttributes.mouthType}
                  skinColor={data.avatarAttributes.skinColor}
              />
            )}
          </div>
          <div>
            <p className={"tw-font-bold tw-text-lg"}>User #0001</p>
          </div>
        </div>
      </div>
      <div className={"tw-py-9"}>{props.children}</div>
      <div className={"tw-w-full tw-py-6 tw-bg-[#98c1d9]"} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
  flaggedPosts: PropTypes.number,
  data: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { flaggedPosts } = state.exercise9;
  return { flaggedPosts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlers: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
