import React, {useEffect, useState} from 'react';
import logo from "../../assets/images/accessCycleHeader.png";
import "../../assets/stylesheets/components/Header.scss"
import {connect} from "react-redux";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
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
    handleRedirect(actions, lab, body);
};

const SitemapHeader = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const activeStyle = {color: "#fed136"};
    const toggle = () => setIsOpen(!isOpen);
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


    return (
        <Navbar dark expand="lg" className="navbar labnav" style={{backgroundColor: "rgb(60,61,60)", paddingTop: "1rem"}}>
            <div className="container">
                <img className="logo img-fluid"
                     src={logo}
                     alt="Computing Accessibility"
                />

                <a className="navbar-brand js-scroll-trigger" id={"all-header-text"}
                   href="# "
                   onClick={() => navigate(state,actions, 0, 0)}>
                    Accessibility Learning Labs
                </a>

                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem class="collapse navbar-collapse" >
                            <NavLink
                                class="nav-link js-scroll-trigger"
                                href="# "
                                style={link === 0 ? activeStyle : {color: "#fff"}}>
                                <u className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Home
                                    </li>
                                </u>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(SitemapHeader);