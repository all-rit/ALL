/* eslint-disable react/prop-types */
import React from "react";
// import handleRedirect from "../../../helpers/Redirect";
import { actions as mainActions } from "../../../reducers/MainReducer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LabGeneration from "../lab/LabGeneration";
import MainFooter from "../../footer/mainFooter";
import TEMPIMG from "../../../assets/images/landingpage/TEMP.png"

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mainActions, dispatch),
  };
};

const Home = (props) => {
  const { actions } = props;
  return (
    <div className="landingpage">
      {/* Header */}
      <div className="tw-relative tw-flex tw-flex-col">
        <section className="tw-flex tw-bg-labBlue tw-justify-end">
          <div className="tw-bg-white tw-rounded-tl-md tw-rounded-bl-md tw-w-5/6 tw-flex tw-items-start tw-flex-col tw-gap-8">
            <h1 className="tw-mt-10 tw-ml-10">Welcome to Accessible Learning Labs</h1>
            <p className="tw-mb-10 tw-ml-10 tw-max-w-[35%] tw-text-wrap tw-text-left">Lorem Ipsum Dolor sit amet blah blah blah blah blab lhaihfio wheg </p>
          </div>
        </section>
        <div className="tw-bg-white tw-h-32"></div>
        <img src={TEMPIMG} className="tw-absolute tw-h-[100%] tw-right-0 tw-object-left-bottom tw-object-scale-down"></img>
      </div>
        
      {/* Are you a Student? */}
      <section className="tw-bg-labYellow tw-flex tw-justify-start tw-pb-0 tw-pt-16">
        <div className="tw-bg-white tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-mr-10 tw-py-8 tw-border-solid tw-border-b-0 tw-border-l-0 tw-border-t-12 tw-border-r-12 tw-rounded-tr-lg tw-border-labBlue">
          <div className="tw-flex tw-flex-col tw-items-start tw-gap-4">
            <h1>Are You a Student?</h1>
            <div className="tw-flex tw-flex-row tw-max-w-96">
              <p className="tw-text-wrap tw-text-left">
                Lorem impsum blah blah blah blah blah blah blahab lkhak halksjfn iowuebfoiqbgrgwe
              </p>
              {/* TODO: Add that silly button here */}
            </div>
          </div>
          {/* TODO: make these only the labs assigned to students */}
          <div className="landingpage__row md:lg:tw-flex md:lg:tw-grid-cols-3 md:lg:tw-justify-center sm:tw-grid-cols-2">
            <LabGeneration actions={actions} />
          </div>
        </div>
      </section>
      <div className="tw-bg-white tw-h-32"></div>
        
      {/* Are you an Educator? */}
      <section className="tw-flex tw-bg-labBlue tw-justify-end">
          <div className="tw-bg-white tw-rounded-tl-md tw-rounded-bl-md tw-w-5/6 tw-flex tw-items-start tw-flex-col tw-gap-8">
            <h1 className="tw-mt-10 tw-ml-10">Are You an Educator?</h1>
            <div className="tw-flex tw-flex-row">
              <p className="tw-mb-10 tw-ml-10 tw-max-w-[35%] tw-text-wrap tw-text-left">Lorem Ipsum Dolor sit amet blah blah blah blah blab lhaihfio wheg </p>
              {/* TODO: Insert that funny little button here */}
            </div>
          </div>
      </section>
      <div className="tw-bg-white tw-h-32"></div>

{/* TODO: below */}
      {/* About Us */}
      {/* Development Partners */}
      {/* Participating Schools */}
      {/* Getting Involved */}
      
      <MainFooter />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Home);
