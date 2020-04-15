import React from "react";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
import Change from "./change";

const gamefooter = ({ title, description, links, props }) => {
    if (links === undefined) {
        links = [null, null, null];
    }

    return (

        <div class="btn-information">
            <footer>
                <div className="btn-information">
                    These buttons are disabled so as to not interfere with the
                    accessibility-related portions of the lab.
                </div>
            </footer>
        </div>
    );
};

export default gamefooter;
