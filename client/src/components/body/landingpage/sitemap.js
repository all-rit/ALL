import React from "react";
import "../../../assets/stylesheets/components/App.scss"
import "../../../assets/stylesheets/pages/LandingPage.scss"
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {actions as mainActions} from "../../../reducers/MainReducer";

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(mainActions, dispatch)
});

const handleLab = (actions, lab) => {
    actions.setLab(lab);
}

const Home = (props) => {
const {actions} = props;
return (
    <div>
    <div class="container" style="margin-top: 2%;">
            <section class="page-section" style= "padding-bottom: 25px" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">
                    Site Map
                    </h2>
                </div>
                    <div class="row text-center">
                        <div class="col-md-4">
                        <h4 class="service-heading">
                            <a href="http://all.rit.edu" >Home</a>
                        </h4>
                        <ul>
                            <li> <a href="http://all.rit.edu/#goals">Goals</a></li>
                            <li> <a href="http://all.rit.edu/#labs" >Labs</a></li>
                            <li> <a href="http://all.rit.edu/#contact" >Contact</a></li>
                        </ul>
                        </div>
                        <div class="col-md-4">
                        <h4 class="service-heading" >
                            <a href="http://all.rit.edu/Lab1" >Lab 1</a>
                        </h4>
                        <ul>
                            <li><a href="http://all.rit.edu/Lab1/about" >About</a></li>
                            <li><a href="http://all.rit.edu/Lab1/reading" >Reading</a></li>
                            <li><a href="http://all.rit.edu/Lab1/game" >Game</a></li>
                            <li><a href="http://all.rit.edu/Lab1/video" >Video</a></li>
                            <li><a href="http://all.rit.edu/Lab1/quiz" >Quiz</a></li>
                        </ul>
                        </div>
                        <div class="col-md-4">
                        <h4 class="service-heading">
                            <a href="http://all.rit.edu/Lab2" >Lab 2</a>
                        </h4>
                        <ul>
                            <li><a href="http://all.rit.edu/Lab2/#about" >About</a></li>
                            <li><a href="http://all.rit.edu/Lab2/#reading" >Reading</a></li>
                            <li><a href="http://all.rit.edu/Lab2/#game" >Game</a></li>
                            <li><a href="http://all.rit.edu/Lab2/#video" >Video</a></li>
                            <li><a href="http://all.rit.edu/Lab2/#quiz" >Quiz</a></li>
                        </ul>
                        </div>

                        <div class="col-md-4">
                        <h4 class="service-heading">
                            <a href="http://all.rit.edu/Lab3" >Lab 3</a>
                        </h4>
                        <ul>
                            <li><a href="http://all.rit.edu/Lab3/#about" >About</a></li>
                            <li><a href="http://all.rit.edu/Lab3/#reading" >Reading</a></li>
                            <li><a href="http://all.rit.edu/Lab3/#game" >Game</a></li>
                            <li><a href="http://all.rit.edu/Lab3/#video" >Video</a></li>
                            <li><a href="http://all.rit.edu/Lab3/#quiz" >Quiz</a></li>
                        </ul>
                        </div>
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
                href="https://www.nsf.gov/pubs/2016/nsf16009/nsf16009.jsp#q37" target="_blank"
                >Available under the Federal Government License</a
            >
            </li>
        </ul>


        </footer>
        </div>
        );
};

export default connect(null,mapDispatchToProps
)(Home);