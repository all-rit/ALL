/* eslint-disable react/prop-types */
import React from "react";
// import Header from "../../header/header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as appActions } from "../../../reducers/lab1/AppReducer";
import { actions as mainActions } from "../../../reducers/MainReducer";
import LabGenerationByCategory from "./LabGenerationByCategory";

const mapStateToProps = (state) => {
  return {
    // General
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...appActions, ...mainActions }, dispatch),
  };
};

const LabsPage = (props) => {
  const { actions } = props;
  return (
    <>
      <div className="tw-h-128 tw-bg-primary-blue tw-flex tw-justify-center tw-items-center">
        <div className="tw-grid tw-w-full tw-h-1/2">
          <div
            className="tw-bg-primary-yellow tw-w-11/12 tw-h-4/5 tw-justify-self-end tw-self-end
                                    tw-rounded-bl-lg tw-relative"
          >
            <div
              className="tw-bg-white tw-w-full tw-h-[120%] tw-justify-self-end tw-self-center
                                    tw-rounded-bl-lg tw-relative tw-bottom-14 tw-left-4"
            >
              <div className="tw-flex tw-h-full tw-flex-col tw-max-w-96">
                <h2 className="tw-flex tw-justify-left tw-font-bold tw-font-poppins tw-px-12 tw-py-8">
                  Explore Our Labs
                </h2>
                <text className="tw-flex tw-justify-left tw-text-left tw-font-poppins tw-pl-12">
                  Aenean a venenatis metus, ut varius quam. Quisque lobortis
                  odio libero, quis blandit nibh feugiat malesuada. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-bg-white tw-h-28 tw-w-full" />

      <div className="tw-relative tw-h-auto tw-w-full">
        <div className="tw-flex tw-bg-primary-yellow tw-h-auto tw-w-full tw-relative tw-pb-16">
          <div
            className="tw-flex tw-bg-primary-blue tw-w-full -tw-left-8 tw-top-16
                            tw-h-auto tw-justify-left tw-relative tw-rounded-tr-lg"
          >
            <div className="tw-bg-white tw-auto tw-w-full -tw-left-4 tw-top-4 tw-rounded-tr-lg tw-justify-left tw-relative">
              <div
                className="tw-flex tw-flex-col tw-pt-16 tw-relative tw-left-12 tw-items-center
                              tw-flex-wrap tw-px-12"
              >
                <h1 className="tw-font-poppins tw-font-bold tw-pb-4 tw-w-full">
                  Labs
                </h1>
                <input
                  className=" tw-max-w-144 sm:tw-w-2/3"
                  type="text"
                  id="searchLabs"
                />
                <div className="md:lg:tw-flex tw-flex-col md:lg:tw-justify-center sm:tw-grid-cols-2 tw-flex-wrap">
                  <LabGenerationByCategory actions={actions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-bg-primary-blue tw-h-128 tw-top-4 tw-relative tw-flex tw-justify-center tw-items-center">
        <div className="tw-grid tw-w-full tw-h-1/2">
          <div
            className="tw-bg-primary-yellow tw-w-11/12 tw-h-4/5 tw-justify-self-end tw-self-end
                                    tw-rounded-bl-lg tw-relative"
          >
            <div
              className="tw-bg-white tw-w-full tw-h-[120%] tw-justify-self-end tw-self-center
                                    tw-rounded-bl-lg tw-relative tw-bottom-14 tw-left-4"
            >
              <div className="tw-flex tw-h-full tw-flex-col tw-max-w-128">
                <h2 className="tw-flex tw-justify-left tw-font-bold tw-font-poppins tw-px-12 tw-py-8">
                  View Your Progress
                </h2>
                <text className="tw-flex tw-justify-left tw-text-left tw-font-poppins tw-pl-12">
                  Aenean a venenatis metus, ut varius quam. Quisque lobortis
                  odio libero, quis blandit nibh feugiat malesuada. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LabsPage);
