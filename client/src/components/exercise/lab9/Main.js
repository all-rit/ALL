import React from "react";
import { Router } from "@reach/router";
import PropTypes from "prop-types";
/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = (props) => {
    
    // eslint-disable-next-line no-unused-vars
    const { user } = props;
    return (
        <div className="bottomSpace">
        <Router className ="app">
                
        </Router>
        </div>
    )
}
Main.propTypes = {
    user: PropTypes.string.isRequired,
  };
  
  export default Main;