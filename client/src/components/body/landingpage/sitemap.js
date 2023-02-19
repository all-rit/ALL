/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import "../../../assets/stylesheets/components/App.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as mainActions } from "../../../reducers/MainReducer";
import handleRedirect from "../../../helpers/Redirect";

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mainActions, dispatch),
  };
};

const SiteMap = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { actions } = props;
  return (
    <div className="landingpage">
      <div className="container">
        <section className="page-section">
          <div className="container margin-top">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Site Map</h2>
              </div>
              <div className="row text-center">
                <div className="col-md-4">
                  <h4 className="service-heading">
                    <a href="# " onClick={() => handleRedirect(actions, 0, 0)}>
                      Home
                    </a>
                  </h4>
                  <ul>
                    <li>
                      {" "}
                      <a href="# " onClick={() => handleRedirect(actions, 0)}>
                        Goals
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="# " onClick={() => handleRedirect(actions, 0)}>
                        Labs
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="# " onClick={() => handleRedirect(actions, 0)}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="service-heading">
                    <a href="# " onClick={() => handleRedirect(actions, 1, 0)}>
                      Lab 1
                    </a>
                  </h4>
                  <ul>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 1, 0)}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 1, 1)}
                      >
                        Reading
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 1, 2)}
                      >
                        Exercise
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 1, 3)}
                      >
                        Reinforcement
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 1, 4)}
                      >
                        Quiz
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="service-heading">
                    <a href="# " onClick={() => handleRedirect(actions, 2, 0)}>
                      Lab 2
                    </a>
                  </h4>
                  <ul>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 2, 0)}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 2, 1)}
                      >
                        Reading
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 2, 2)}
                      >
                        Exercise
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 2, 3)}
                      >
                        Reinforcement
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 2, 4)}
                      >
                        Quiz
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4">
                  <h4 className="service-heading">
                    <a href="# " onClick={() => handleRedirect(actions, 3, 0)}>
                      Lab 3
                    </a>
                  </h4>
                  <ul>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 3, 0)}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 3, 1)}
                      >
                        Reading
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 3, 2)}
                      >
                        Exercise
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 3, 3)}
                      >
                        Reinforcement
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 3, 4)}
                      >
                        Quiz
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="service-heading">
                    <a href="# " onClick={() => handleRedirect(actions, 4, 0)}>
                      Lab 4
                    </a>
                  </h4>
                  <ul>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 4, 0)}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 4, 1)}
                      >
                        Reading
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 4, 2)}
                      >
                        Exercise
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 4, 3)}
                      >
                        Reinforcement
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 4, 4)}
                      >
                        Quiz
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="service-heading">
                    <a href="# " onClick={() => handleRedirect(actions, 5, 0)}>
                      Lab 5
                    </a>
                  </h4>
                  <ul>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 5, 0)}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 5, 1)}
                      >
                        Reading
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 5, 2)}
                      >
                        Exercise
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 5, 3)}
                      >
                        Reinforcement
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 5, 4)}
                      >
                        Quiz
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="service-heading">
                    <a href="# " onClick={() => handleRedirect(actions, 6, 0)}>
                      Lab 6
                    </a>
                  </h4>
                  <ul>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 6, 0)}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 6, 1)}
                      >
                        Reading
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 6, 2)}
                      >
                        Exercise
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 6, 3)}
                      >
                        Reinforcement
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        onClick={() => handleRedirect(actions, 6, 4)}
                      >
                        Quiz
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* // <!-- Footer --> */}
      <footer className="footer">
        <ul className="list-inline quicklinks">
          <li className="list-inline-item">
            <a
              href="https://www.nsf.gov/pubs/2016/nsf16009/nsf16009.jsp#q37"
              target="_blank"
              rel="noopener noreferrer"
            >
              Available under the Federal Government License
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(SiteMap);
