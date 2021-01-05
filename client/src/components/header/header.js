import React, {useState} from 'react';
import logo from "../../assets/images/accessCycle.png";
import "../../assets/stylesheets/components/css/agency.min.css";
import "../../assets/stylesheets/components/css/style.css";
import "../../assets/stylesheets/components/Header.scss";
import WelcomeMessage from './helpers/WelcomeMessage';
import {connect} from "react-redux";
import {actions as appActions} from '../../reducers/lab1/AppReducer';
import {bindActionCreators} from 'redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {GAME_IDLE} from "../../constants/lab1";

const mapStateToProps = (state) => {
    return {
        // General
        state: state
    };
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
});

const handleAbout = (actions, state) => {
    if(!alert_check(state)) {
        actions.setBody(0);
    }
};

const handleReading = (actions,state) => {
    if(!alert_check(state)) {
        actions.setBody(1);
    }
};


const handleGame = (actions,state) => {
    if(!alert_check(state)) {
        actions.setBody(2);
    }
};

const handleVideo = (actions,state) => {
    if(!alert_check(state)) {
        actions.setBody(3);
    }
};

const handleQuiz = (actions,state) => {
    if(!alert_check(state)) {
        actions.setBody(4);
    }
};

const alert_check = (state)=> {
    if (state.game.state !== "GAME_IDLE" && state.app.body === 2){
        alert("The game is still in progress! Please complete the game");
        return true
    }
    return false;
};


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    // const activeStyle = {color: "#fed136"};
    const toggle = () => setIsOpen(!isOpen);
    const {state, actions} = props;
    let count = state.app.body;
    const loginEnabled = !(state.game.plays > 0 || (state.game.plays === 0 && state.game.state !== GAME_IDLE));
    return (
        <Navbar dark expand="lg" className="navbar labnav">
            <div className="container">
                <NavbarBrand href="http://all.rit.edu">
                    <div className="logo-container justify-content-center">
                        <img className="logo img-fluid"
                             src={logo}
                             alt="Computing Accessibility"
                        />
                    </div>

                    {/*Accessibility Learning Labs*/}
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="collapse navbar-collapse"
                                 id="navbarResponsive"
                        > </NavItem>
                        <NavItem className="collapse navbar-collapse"
                                 id="navbarResponsive"
                        >
                            <NavLink
                                className="nav-link js-scroll-trigger text-white"
                                href="http://all.rit.edu"
                            >
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item text-right">
                                        Home
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                        <NavItem
                            className="collapse navbar-collapse"
                            id="navbarResponsive">
                            <NavLink
                                className={"nav-link js-scroll-trigger " + (count === 0 ? "active" : "inactive")}
                                onClick={() => handleAbout(actions, state)}
                                href="#"
                            >
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        About
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                        <NavItem
                            className="collapse navbar-collapse"
                            id="navbarResponsive">
                            <NavLink
                                className={"nav-link js-scroll-trigger " + (count === 1 ? "active" : "inactive")}
                                onClick={() => handleReading(actions, state)}
                                href="#"
                            >
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Reading
                                    </li>
                                </ul>
                            </NavLink>

                        </NavItem>
                        <NavItem
                            className="collapse navbar-collapse"
                            id="navbarResponsive">
                            <NavLink
                                className={"nav-link js-scroll-trigger " + (count === 2 ? "active" : "inactive")}
                                onClick={() => handleGame(actions, state)}
                                href="#"
                            >
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Game
                                    </li>
                                </ul>
                            </NavLink>

                        </NavItem>
                        <NavItem
                            className="collapse navbar-collapse"
                            id="navbarResponsive">
                            <NavLink
                                className={"nav-link js-scroll-trigger " + (count === 3 ? "active" : "inactive")}
                                onClick={() => handleVideo(actions, state)}
                                href="#"
                            >
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Video
                                    </li>
                                </ul>
                            </NavLink>

                        </NavItem>
                        <NavItem
                            className="collapse navbar-collapse quiz-btn"
                            id="navbarResponsive">
                            <NavLink
                                className={"nav-link js-scroll-trigger " + (count === 4 ? "active" : "inactive")}
                                onClick={() => handleQuiz(actions, state)}
                                href="#"
                            >
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Quiz
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                        <WelcomeMessage user={state.main.user} loginEnabled={loginEnabled} />
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Header);