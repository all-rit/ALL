import React from "react";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";


const Change = (props) => {
    const isState = props.count;
    return (


        <div class="container">
            {isState !== 2

                ? <div>
                    <button
                        className="btn btn-second btn-xl text-uppercase js-scroll-trigger back "
                        onClick={props.handleDecrement}
                        disabled={props.disappearBack ? "disabled" : false}
                    >
                        back
                    </button>
                    <button
                        className="btn btn-primary btn-xl text-uppercase js-scroll-trigger next"
                        onClick={props.handleIncrement}
                        disabled={props.disappearNext ? "disabled" : false}
                    >
                        next
                    </button>
                    <div class="btn-change">
                        <button
                            class="btn-text btn btn-disabled text-uppercase"
                            alt="Increase text size"
                            title="Larger text"
                            disabled="true"
                        >
                            Text+
                        </button>
                        <button
                            class="btn-text btn btn-disabled text-uppercase"
                            alt="Decrease text size"
                            title="Smaller text"
                            disabled="true"
                        >
                            Text-
                        </button>
                        <button class="btn btn-disabled text-uppercase" disabled="true">Change Color</button>
                        <button class="btn btn-disabled text-uppercase" disabled="true">Change Color</button>

                    </div>

                    <footer>
                        <div className="btn-information">
                            These buttons are disabled so as to not interfere with the
                            accessibility-related portions of the lab.
                        </div>
                    </footer>
                </div>

                : <div className="btn-information">
                    <footer>
                        <div className="btn-information">
                            The navigation buttons are disabled so as to not interfere with the
                            accessibility-related portions of the lab.
                        </div>
                    </footer>
                </div>
            }
        </div>

    );
};

export default Change;
