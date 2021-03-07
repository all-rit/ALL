import React from "react";
import "../../../assets/stylesheets/components/App.scss"
import "../../../assets/stylesheets/pages/LandingPage.scss"
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {actions as mainActions} from "../../../reducers/MainReducer";
import handleRedirect from "../../../helpers/Redirect";

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(mainActions, dispatch)
    };
};


const SiteMap = (props) => {
const {actions} = props;
return (
    <div class="landingpage">
    <div class="container">
            <section class="page-section">
            <div class="container margin-top">
                <div class="row">
                    <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">
                    Site Map
                    </h2>
                </div>
                    <div class="row text-center">
                        <div class="col-md-4">
                        <h4 class="service-heading">
                            <a href="# " onClick={() => handleRedirect(actions, 0, 0)} >Home</a>
                        </h4>
                        <ul>
                            <li> <a href="# " onClick={() => handleRedirect(actions,0)}>Goals</a></li>
                            <li> <a href="# " onClick={() => handleRedirect(actions,0)}>Labs</a></li>
                            <li> <a href="# " onClick={() => handleRedirect(actions,0)} >Contact</a></li>
                        </ul>
                        </div>
                        <div class="col-md-4">
                        <h4 class="service-heading" >
                            <a href="# " onClick={() => handleRedirect(actions, 1, 0)}>Lab 1</a>
                        </h4>
                        <ul>
                            <li><a href="# " onClick={() => handleRedirect(actions,1,0)}>About</a></li>
                            <li><a href="# " onClick={() => handleRedirect(actions,1,1)}>Reading</a></li>
                            <li><a href="# " onClick={() => handleRedirect(actions,1,2)} >Game</a></li>
                            <li><a href="# " onClick={() => handleRedirect(actions,1,3)}>Video</a></li>
                            <li><a href="# " onClick={() => handleRedirect(actions,1,4)} >Quiz</a></li>
                        </ul>
                        </div>
                        <div class="col-md-4">
`                        <h4 class="service-heading">
                           <a href="# " onClick={() => handleRedirect(actions, 2, 0)} >Lab 2</a>
                        </h4>
                        <ul>
                           <li><a href="# " onClick={() => handleRedirect(actions,2,0)} >About</a></li>
                           <li><a href="# " onClick={() => handleRedirect(actions,2,1)}  >Reading</a></li>
                           <li><a href="# " onClick={() => handleRedirect(actions,2,2)} >Game</a></li>
                           <li><a href="# " onClick={() => handleRedirect(actions,2,3)}>Video</a></li>
                           <li><a href="# " onClick={() => handleRedirect(actions,2,4)} >Quiz</a></li>
                        </ul>`
                        </div>

                        <div class="col-md-4">
                        <h4 class="service-heading">
                            <a href="# " onClick={() => handleRedirect(actions, 3, 0)} >Lab 3</a>
                        </h4>
                        <ul>
                            <li><a href="# " onClick={() => handleRedirect(actions,3,0)} >About</a></li>
                            <li><a href="# " onClick={() => handleRedirect(actions,3,1)}  >Reading</a></li>
                            <li><a href="# " onClick={() => handleRedirect(actions,3,2)} >Game</a></li>
                            <li><a href="# " onClick={() => handleRedirect(actions,3,3)}>Video</a></li>
                            <li><a href="# " onClick={() => handleRedirect(actions,3,4)} >Quiz</a></li>
                        </ul>
                        </div>
                        {/*<div className="col-md-4">*/}
                        {/*    <h4 className="service-heading">*/}
                        {/*        <a href="# " onClick={() => handleRedirect(actions, 4, 0)}>Lab 4</a>*/}
                        {/*    </h4>*/}
                        {/*    <ul>*/}
                        {/*        <li><a href="# " onClick={() => handleRedirect(actions, 4, 0)}>About</a></li>*/}
                        {/*        <li><a href="# " onClick={() => handleRedirect(actions, 4, 1)}>Reading</a></li>*/}
                        {/*        <li><a href="# " onClick={() => handleRedirect(actions, 4, 2)}>Game</a></li>*/}
                        {/*        <li><a href="# " onClick={() => handleRedirect(actions, 4, 3)}>Video</a></li>*/}
                        {/*        <li><a href="# " onClick={() => handleRedirect(actions, 4, 4)}>Quiz</a></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-4">*/}
                        {/*    <h4 className="service-heading">*/}
                        {/*        <a href="# " onClick={() => handleRedirect(actions, 5, 0)}>Lab 5</a>*/}
                        {/*    </h4>*/}
                        {/*    <ul>*/}
                        {/*        <li><a href="# " onClick={() => handleRedirect(actions, 5, 0)}>About</a></li>*/}
                        {/*        <li><a href="# " onClick={() => handleRedirect(actions, 5, 1)}>Reading</a></li>*/}
                        {/*        <li><a href="# " onClick={() => handleRedirect(actions, 5, 2)}>Game</a></li>*/}
                        {/*        <li><a href="# " onClick={() => handleRedirect(actions, 5, 3)}>Video</a></li>*/}
                        {/*        <li><a href="# " onClick={() => handleRedirect(actions, 5, 4)}>Quiz</a></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>
            </div>
            </div>
            </section>
        </div>


        {/* // <!-- Footer --> */}
        <footer class="footer">
        <ul class="list-inline quicklinks">
            <li class="list-inline-item">
            <a
                href="https://www.nsf.gov/pubs/2016/nsf16009/nsf16009.jsp#q37" target="_blank" rel="noopener noreferrer"
                >Available under the Federal Government License</a
            >
            </li>
        </ul>


        </footer>
        </div>
        );
};


export default connect(
    null, mapDispatchToProps)(SiteMap);