import React, {useEffect, useState} from 'react';
import "../../assets/stylesheets/components/Header.scss"
import {connect} from "react-redux";
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import handleRedirect from "../../helpers/Redirect";
import {bindActionCreators} from "redux";
import {actions as mainActions} from "../../reducers/MainReducer";
import WelcomeMessage from "./helpers/WelcomeMessage";
import getGameState from "../../helpers/GetReducer";
import {GAME_IDLE} from "../../constants/lab1";

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
    handleRedirect(actions, lab, body);
};

const SitemapHeader = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const activeStyle = {color: "#fed136"};
    const {state, actions} = props;
    const [link, setLink] = useState(0)
    const listenScrollEvent = (event) => {
        if (window.scrollY < 800) {
            return setLink(0)
        } else if ( window.scrollY < 2100) {
            return setLink(1)
        }
        else {
            return setLink(2)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    const loginEnabled = (state.main.lab === 0) || getGameState(state) === GAME_IDLE || state.main.body !== 2;

    return (
        <Nav className="ml-auto" navbar>
            <NavItem class="collapse navbar-collapse" >
                <NavLink
                    class="nav-link js-scroll-trigger"
                    href="# "
                    style={link === 0 ? activeStyle : {color: "#fff"}}
                    onClick={() => navigate(state,actions, 0, 0)}>
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                            Home
                        </li>
                    </ul>
                </NavLink>
            </NavItem>
            <NavItem class="collapse navbar-collapse" >
                <NavLink
                    class="nav-link js-scroll-trigger"
                    href="# "
                    style={{color: "#fff"}}>
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                        </li>
                    </ul>
                </NavLink>
            </NavItem>
            <WelcomeMessage user={state.main.user} loginEnabled={loginEnabled} />
        </Nav>
    );
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(SitemapHeader);