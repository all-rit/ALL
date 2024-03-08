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

const Routes = (props) => {
  const { actions } = props;
  const routeItems = [];
  routeItems.push(
    <div className="col-md-4">
      <h4 className="service-heading">
        <a
          href=" "
          id="# "
          onClick={() => handleRedirect(actions, 0)}
        >
          Home
        </a>
      </h4>
      <ul>
        <li>
          {" "}
          <a href="/#goals">Goals</a>
        </li>
        <li>
          {" "}
          <a href="/#labs">Labs</a>
        </li>
        <li>
          {" "}
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
  for (let i = 1; i < 12; i++) {
    routeItems.push(

      <div className="col-md-4">
        <h4 className=" ">
          <a href=" " onClick={() => handleRedirect(actions, i, 0)}>
            Lab {i}
          </a>
        </h4>
        <ul>
          <li>
            <a
              href="# "
              onClick={() => handleRedirect(actions, i, 0)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="# "
              onClick={() => handleRedirect(actions, i, 1)}
            >
              Reading
            </a>
          </li>
          <li>
            <a
              href="# "
              onClick={() => handleRedirect(actions, i, 2)}
            >
              Exercise
            </a>
          </li>
          <li>
            <a
              href="# "
              onClick={() => handleRedirect(actions, i, 3)}
            >
              Reinforcement
            </a>
          </li>
          <li>
            <a
              href="# "
              onClick={() => handleRedirect(actions, i, 4)}
            >
              Quiz
            </a>
          </li>
        </ul>
      </div>
    )
  }
  return routeItems;
}

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
              <div className="grid-container">
                <div className="col-md-auto">
                  <div className="row">
                    <Routes actions={actions} />
                  </div>
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
