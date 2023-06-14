/* eslint-disable react/prop-types */
import React from "react";
import { bindActionCreators } from "redux";
import { actions as mainActions } from "../../../reducers/MainReducer";
import { connect } from "react-redux";
//import { useState } from 'react';

//const searchBar = () => {}
//const [searchInput, setSearchInput] = useState("");
const Educators = () => {
  return (
    <div className="educators-page">
      <span className={"top-span"}>
      <div className={"left-container"}>
        <p className={"educator-heading"}>
          EDUCATOR RESOURCES
        </p>
        <p className={"educator-welcome"}>
          Hello, [User]!
        </p>
        <input className={"course-search"} placeholder={"What are you looking for today?"}/>
      </div>
        <div className={"right-container"}>
          <div className={"educator-welcome"}>
          Placeholder for Intro Video
        </div>
        </div>
      </span>
      <div>
        next section
      </div>
    </div>


  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mainActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Educators);
