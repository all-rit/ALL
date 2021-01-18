import React, {useState} from 'react';
// import logo from "../../assets/images/accessCycle.png";
import logo from "../../assets/images/accessCycleHeader.png";
import "../../assets/stylesheets/components/Header.scss"
import WelcomeMessage from './helpers/WelcomeMessage';
import {connect} from "react-redux";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {GAME_IDLE} from "../../constants/lab1";
import handleRedirect from "../../helpers/Redirect";
import {bindActionCreators} from "redux";
import {actions as mainActions} from "../../reducers/MainReducer";


const mapStateToProps = (state) => {
    return {
        // General
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(mainActions, dispatch)
    };
};

const navigate = (state, actions,body, lab=state.main.lab) =>{
    if(!alert_check(state)) {
        handleRedirect(actions, lab, body);
    }
};

const alert_check = (state)=> {
    if (state.game.state !== "GAME_IDLE" && state.main.body === 2){
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
    let count = state.main.body;
    const loginEnabled = (state.main.lab === 0) || state.game.state === GAME_IDLE || state.main.body !== 2;
    return (
        <Navbar dark expand="lg" className="navbar labnav" style={{backgroundColor: "rgb(60,61,60)", paddingTop: "1rem"}}>
            <div className="container">
                    <img className="logo img-fluid"
                         src={logo}
                         alt="Computing Accessibility"
                    />

                    <a className="navbar-brand js-scroll-trigger" id={"all-header-text"}
                       href="http://all.rit.edu">
                        Accessibility Learning Labs
                    </a>

                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                {state.main.lab === 0 ?
                    <Nav className="ml-auto" navbar>
                        <NavItem class="collapse navbar-collapse" >
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
                            <NavItem class="collapse navbar-collapse" >
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
                            <NavItem class="collapse navbar-collapse" >
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
                        <WelcomeMessage user={state.main.user} loginEnabled={loginEnabled} />
                        </Nav>
                            :<Nav className="ml-auto" navbar>
                            <NavItem class="collapse navbar-collapse"
                            >
                                <NavLink
                                    class="nav-link js-scroll-trigger"
                                    onClick={() => navigate(state,actions, 0, 0)}
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
                            onClick={() => navigate(state, actions,0)}
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
                            onClick={() => navigate(state, actions,1)}
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
                            onClick={() => navigate(state, actions,2)}
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
                            onClick={() => navigate(state, actions,3)}
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
                            onClick={() => navigate(state, actions,4)}
                            href="#"
                            style={count === 4 ? activeStyle : {color: "#fff"}}>
                            <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                            Quiz
                            </li>
                            </ul>
                            </NavLink>
                            </NavItem>
                        <WelcomeMessage user={state.main.user} loginEnabled={loginEnabled} />
                    </Nav>
                }
                </Collapse>
            </div>
        </Navbar>
    );
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Header);