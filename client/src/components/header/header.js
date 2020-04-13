import React, {Component, useState} from 'react';
import logo from "./../../img/accessCycle.png";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
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

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const activeStyle = {color: "#fed136"};
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div
            id="mainNav"
            style={{backgroundColor: "#3d3d3d", zIndex: "1", position: "fixed", width:"100%", fontSize: "90%", overflow: "hidden"}}>
            <div className="container labcontainer">
            <Navbar dark expand="md" className="navbar navbar-expand-lg navbar-dark navbar-dark labnav">

                <NavbarBrand href="http://all.rit.edu" >
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
                                onClick={props.handleHome}
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
                            <NavLink
                                class="nav-link js-scroll-trigger"
                                onClick={props.handleAbout}
                                     href="#"
                                     style={props.count === 0 ? activeStyle : null}>
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        About
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                        <NavItem
                            class="collapse navbar-collapse"
                            id="navbarResponsive">
                            <NavLink
                                class="nav-link js-scroll-trigger"
                                onClick={props.handleReading}
                                     href="#"
                                     style={props.count === 1 ? activeStyle : null}>
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Reading
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                        <NavItem
                            class="collapse navbar-collapse"
                            id="navbarResponsive">
                            <NavLink
                                class="nav-link js-scroll-trigger"
                                onClick={props.handleGame}
                                     href="#"
                                     style={props.count === 2 ? activeStyle : null}>
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Game
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                        <NavItem
                            class="collapse navbar-collapse"
                            id="navbarResponsive">
                            <NavLink
                                class="nav-link js-scroll-trigger"
                                onClick={props.handleVideo}
                                     href="#"
                                     style={props.count === 3 ? activeStyle : null}>
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Video
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                        <NavItem
                            class=" collapse navbar-collapse"
                            id="navbarResponsive" style={{marginRight: "70px"}}>
                            <NavLink
                                class="nav-link js-scroll-trigger"
                                onClick={props.handleQuiz}
                                     href="#"
                                     style={props.count === 4 ? activeStyle : null}>
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Quiz
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </div>

            </div>

    );
   }

export default Header;
