import React, {useEffect} from "react";
import Quiz from "./../../quiz/App"
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
const Reading = ({title, description, links}) => {
    if (links === undefined) {
        links = [null, null, null];
    }

    return (
        <div className="container">
            <section className="page-section" style={{paddingBottom: "0px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <br/>
                            <br/>
                            <h2 className="section-heading text-uppercase">
                                Treasure Hunter: Quiz
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <Quiz/>
        </div>

    );
};

export default Reading;
