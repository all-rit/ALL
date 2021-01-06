import React, {useState} from 'react';
import logo from "../../assets/images/accessCycle.png";
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
import {actions as mainActions} from "../../reducers/MainReducer";

const mapStateToProps = (state) => {
    return {
        // General
        state: state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...appActions, ...mainActions}, dispatch)
    };
};

const handleHome = (actions, state) => {
    if(!alert_check(state)) {
        actions.setLab(0);
    }
};

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
    const activeStyle = {color: "#fed136"};
    const toggle = () => setIsOpen(!isOpen);
    const {state, actions} = props;
    let count = state.app.body;
    const loginEnabled = (state.main.lab === 0) || !(state.game.plays > 0 || (state.game.plays === 0 && state.game.state !== GAME_IDLE));
    return (
        <Navbar dark expand="lg" className="navbar labnav" style={{backgroundColor: "rgb(60,61,60)", paddingTop: "1rem"}}>
            <div className="container">
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
                        />
                    </div>

                    {/*Accessibility Learning Labs*/}
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {state.main.lab === 0 ?
                        <NavItem className="collapse navbar-collapse" >
                        <NavItem className="collapse navbar-collapse" >
                            <NavLink
                                class="nav-link js-scroll-trigger"
                                href="#goals"
                                style={{color: "#fff"}}>
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Goals
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                            <NavItem className="collapse navbar-collapse" >
                            <NavLink
                            class="nav-link js-scroll-trigger"
                            href="#labs"
                            style={{color: "#fff"}}>
                            <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                            Labs
                            </li>
                            </ul>
                            </NavLink>
                            </NavItem>
                            <NavItem className="collapse navbar-collapse" >
                            <NavLink
                            class="nav-link js-scroll-trigger"
                            href="#contact"
                            style={{color: "#fff"}}
                                >
                            <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                            Contact
                            </li>
                            </ul>
                            </NavLink>
                            </NavItem>
                        </NavItem>
                            :
                            <NavItem className="collapse navbar-collapse">
                            <NavItem class="collapse navbar-collapse"
                            >
                                <NavLink
                                    class="nav-link js-scroll-trigger"
                                    onClick={() => handleHome(actions, state)}
                                    href="#"
                                    style={{color: "#fff"}}>
                                    <ul className="navbar-nav text-uppercase ml-auto">
                                        <li className="nav-item">
                                            Home
                                        </li>
                                    </ul>
                                </NavLink>
                            </NavItem>
                            <NavItem
                            class="collapse navbar-collapse">
                            <NavLink
                            class="nav-link js-scroll-trigger"
                            onClick={() => handleAbout(actions, state)}
                            href="#"
                            style={count === 0 ? activeStyle : {color: "#fff"}}>
                            <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                            About
                            </li>
                            </ul>
                            </NavLink>
                            </NavItem>
                            <NavItem
                            class="collapse navbar-collapse">
                            <NavLink
                            class="nav-link js-scroll-trigger"
                            onClick={() => handleReading(actions, state)}
                            href="#"
                            style={count === 1 ? activeStyle : {color: "#fff"}}>
                            <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                            Reading
                            </li>
                            </ul>
                            </NavLink>

                            </NavItem>
                            <NavItem
                            class="collapse navbar-collapse">
                            <NavLink
                            class="nav-link js-scroll-trigger"
                            onClick={() => handleGame(actions, state)}
                            href="#"
                            style={count === 2 ? activeStyle : {color: "#fff"}}>
                            <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                            Game
                            </li>
                            </ul>
                            </NavLink>

                            </NavItem>
                            <NavItem
                            class="collapse navbar-collapse">
                            <NavLink
                            class="nav-link js-scroll-trigger"
                            onClick={() => handleVideo(actions, state)}
                            href="#"
                            style={count === 3 ? activeStyle : {color: "#fff"}}>
                            <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                            Video
                            </li>
                            </ul>
                            </NavLink>

                            </NavItem>
                            <NavItem
                            class="collapse navbar-collapse"
                            style={{paddingRight: ".5rem"}}>
                            <NavLink
                            class="nav-link js-scroll-trigger"
                            onClick={() => handleQuiz(actions, state)}
                            href="#"
                            style={count === 4 ? activeStyle : {color: "#fff"}}>
                            <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                            Quiz
                            </li>
                            </ul>
                            </NavLink>
                            </NavItem>
                            </NavItem>
                        }
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