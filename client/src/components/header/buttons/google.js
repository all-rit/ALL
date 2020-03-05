import React, { Component } from "react";
import { withRouter } from "react-router";
import "../title.css";
/*
Class for handling the google signin button
*/
export class Google extends Component {
    // Constructor for binding the callback api to the state
    // Renderer for button
    render() {
        return (
            <a href={process.env.REACT_APP_SERVER_URL + '/auth/google'}>
                <div className="google__button" />
            </a>

        );
    }

}

export default withRouter(Google);
