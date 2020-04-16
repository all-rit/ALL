import React, {Component, useState} from 'react';
import logo from "./../../img/accessCycle.png";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";

import {connect} from "react-redux";
import {actions as appActions} from '../../reducers/AppReducer';
import {bindActionCreators} from 'redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const mapStateToProps = (state) => {
    return {
        // General
        state: state
    };
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
});

const handleAbout = (actions) => {
    actions.setBody(0);
};

const handleReading = (actions) => {
    actions.setBody(1);
};


const handleGame = (actions) => {
    actions.setBody(2);
};

const handleVideo = (actions) => {
    actions.setBody(3);
};

const handleQuiz = (actions) => {
    actions.setBody(4);
};

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const activeStyle = {color: "#fed136"};
    const toggle = () => setIsOpen(!isOpen);
    const {state, actions} = props;
    let count = state.app.body;
    let display = state.game.state === "GAME_PLAYING" || state.app.body === 2;
    return (

        <div
            id="mainNav"
            style={{
                backgroundColor: "#3d3d3d",
                zIndex: "1",
                position: "fixed",
                width: "100%",
                fontSize: "90%",
                overflow: "hidden"
            }}>
            <div className="container labcontainer">
                <Navbar dark expand="md" className="navbar navbar-expand-lg navbar-dark navbar-dark labnav">

                    <NavbarBrand href="http://all.rit.edu">
                        <div className="logo-container justify-content-center">
                            <img className="logo img-fluid"
                                 src={logo}

                                 style={{
                                     paddingRight: "20px",
                                     paddingBottom: "10px",
                                     paddingTop: "10px",
                                     marginTop: "-10px"
                                 }}
                                 alt="Computing Accessibility"
                            ></img>
                        </div>

                        {/*Accessibility Learning Labs*/}
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto labul" navbar>
                            <NavItem class="collapse navbar-collapse"
                                     id="navbarResponsive"
                                     style={{marginLeft: "280px"}}> </NavItem>
                            <NavItem class="collapse navbar-collapse"
                                     id="navbarResponsive"
                            >
                                <NavLink
                                    class="nav-link js-scroll-trigger"
                                    href="http://all.rit.edu">

                                    <ul className="navbar-nav text-uppercase ml-auto">
                                        <li className="nav-item" style={{align: "right"}}>
                                            Home
                                        </li>
                                    </ul>
                                </NavLink>
                            </NavItem>
                            <NavItem
                                class="collapse navbar-collapse"
                                id="navbarResponsive">
                                {!display
                                    ? <NavLink
                                        class="nav-link js-scroll-trigger"
                                        onClick={() => handleAbout(actions)}
                                        href="#"
                                        style={count === 0 ? activeStyle : null}>
                                        <ul className="navbar-nav text-uppercase ml-auto">
                                            <li className="nav-item">
                                                About
                                            </li>
                                        </ul>
                                    </NavLink>
                                    : <NavLink
                                        class="nav-link js-scroll-trigger"
                                        onClick={() => alert("The game is still in progress! Please complete the game")}
                                        href="#"
                                        style={count === 0 ? activeStyle : null}>
                                        <ul className="navbar-nav text-uppercase ml-auto">
                                            <li className="nav-item">
                                                About
                                            </li>
                                        </ul>
                                    </NavLink>}
                            </NavItem>
                            <NavItem
                                class="collapse navbar-collapse"
                                id="navbarResponsive">
                                {!display
                                    ? <NavLink
                                        class="nav-link js-scroll-trigger"
                                        onClick={() => handleReading(actions)}
                                        href="#"
                                        style={count === 1 ? activeStyle : null}>
                                        <ul className="navbar-nav text-uppercase ml-auto">
                                            <li className="nav-item">
                                                Reading
                                            </li>
                                        </ul>
                                    </NavLink>
                                    : <NavLink
                                        class="nav-link js-scroll-trigger"
                                        onClick={() => alert("The game is still in progress! Please complete the game")}
                                        href="#"
                                        style={count === 1 ? activeStyle : null}>
                                        <ul className="navbar-nav text-uppercase ml-auto">
                                            <li className="nav-item">
                                                Reading
                                            </li>
                                        </ul>
                                    </NavLink>}
                            </NavItem>
                            <NavItem
                                class="collapse navbar-collapse"
                                id="navbarResponsive">
                                {!display
                                    ? <NavLink
                                        class="nav-link js-scroll-trigger"
                                        onClick={() => handleGame(actions)}
                                        href="#"
                                        style={count === 2 ? activeStyle : null}>
                                        <ul className="navbar-nav text-uppercase ml-auto">
                                            <li className="nav-item">
                                                Game
                                            </li>
                                        </ul>
                                    </NavLink>
                                    : <NavLink
                                        class="nav-link js-scroll-trigger"
                                        onClick={() => alert("The game is still in progress! Please complete the game")}
                                        href="#"
                                        style={count === 2 ? activeStyle : null}>
                                        <ul className="navbar-nav text-uppercase ml-auto">
                                            <li className="nav-item">
                                                Game
                                            </li>
                                        </ul>
                                    </NavLink>}
                            </NavItem>
                            <NavItem
                                class="collapse navbar-collapse"
                                id="navbarResponsive">
                                {!display
                                    ? <NavLink
                                        class="nav-link js-scroll-trigger"
                                        onClick={() => handleQuiz(actions)}
                                        href="#"
                                        style={count === 3 ? activeStyle : null}>
                                        <ul className="navbar-nav text-uppercase ml-auto">
                                            <li className="nav-item">
                                                About
                                            </li>
                                        </ul>
                                    </NavLink>
                                    : <NavLink
                                        class="nav-link js-scroll-trigger"
                                        onClick={() => alert("The game is still in progress! Please complete the game")}
                                        href="#"
                                        style={count === 3 ? activeStyle : null}>
                                        <ul className="navbar-nav text-uppercase ml-auto">
                                            <li className="nav-item">
                                                About
                                            </li>
                                        </ul>
                                    </NavLink>}
                            </NavItem>
                            <NavItem
                                class=" collapse navbar-collapse"
                                id="navbarResponsive" style={{marginRight: "70px"}}>
                                {!display
                                    ? <NavLink
                                        class="nav-link js-scroll-trigger"
                                        onClick={() => handleVideo(actions)}
                                        href="#"
                                        style={count === 4 ? activeStyle : null}>
                                        <ul className="navbar-nav text-uppercase ml-auto">
                                            <li className="nav-item">
                                                About
                                            </li>
                                        </ul>
                                    </NavLink>
                                    : <NavLink
                                        class="nav-link js-scroll-trigger"
                                        onClick={() => alert("The game is still in progress! Please complete the game")}
                                        href="#"
                                        style={count === 4 ? activeStyle : null}>
                                        <ul className="navbar-nav text-uppercase ml-auto">
                                            <li className="nav-item">
                                                About
                                            </li>
                                        </ul>
                                    </NavLink>}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

        </div>

    );
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Header);
