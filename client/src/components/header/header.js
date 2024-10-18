/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useLayoutEffect, useState } from "react";
import Logo from "../../assets/images/logos/ALL_Logo.svg"; 
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { bindActionCreators } from "redux";
import { actions as mainActions } from "../../reducers/MainReducer";

import useMainStateContext from "src/reducers/MainContext";
import API from "src/services/API";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mainActions, dispatch),
  };
};

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
	  function updateSize() {
		setSize([window.innerWidth, window.innerHeight]);
	  }
	  window.addEventListener('resize', updateSize);
	  updateSize();
	  return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}

const Header = (props) => {
	const { state } = useMainStateContext()
	const [isSmallWindow, setisSmallWindow] = useState(false)
	const [navbarOpen, setNavbarOpen] = useState(false)

	const toggleNavbar = () => setNavbarOpen(!navbarOpen)
	const windowSize = useWindowSize()

	if (isSmallWindow == false && windowSize[0] > 840) {
		setisSmallWindow(true)
	}
	else if (isSmallWindow == true && windowSize[0] <= 840) {
		setisSmallWindow(false)
	}



	// user is logged in if their profile image isn't null, kinda scuffed but lmk if there's a simpler way
	// (state.main.user is never null)
	const loggedIn = state.main.user?.userpfp !== null
	
	return (
	<Navbar
		id="navHeader"
		dark
		expand="lg"
		className="tw-pt-3 poppins tw-font-bold mb-0"
	>
		<div className="tw-lg:flex tw-flex-col tw-gap-2 tw-z-30 tw-text-2xl tw-bg-white tw-fixed tw-top-0 p-2 tw-left-0 tw-right-0 d-flex">
			<div className="tw-flex tw-flex-row tw-gap-4">
				<a href="# ">
					<img
						className="tw-cursor-pointer tw-h-16"
						src={Logo}
						alt="Computing Accessibility"
					/>
				</a>

				{/* TODO:
					- Replace temporary href anchor names (i.e. #about)
					- hamburger menu for mobile devices
					- Site Accessibility Settings
				*/}
				

				
				<Collapse 
					className="tw-flex tw-flex-grow tw-justify-end"
					isOpen = {navbarOpen}
				>
					<NavbarToggler className={`${isSmallWindow ? "tw-hidden" : "tw-flex tw-flex-grow tw-justify-end tw-flex-row tw-items-center tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-8 tw-rounded-bl-md tw-border-l-labYellow tw-border-b-labYellow"}`} onClick={toggleNavbar} />
					<Nav className={`${!isSmallWindow ? "tw-hidden" : "tw-flex tw-flex-grow tw-justify-end tw-flex-row tw-items-center tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-8 tw-rounded-bl-md tw-border-l-labYellow tw-border-b-labYellow"}`} navbar>				
						{/* TODO -- REMOVE THIS NAVITEM (logs out user, only here for testing) */}
						{/* <NavItem>
							<a href={`${process.env.REACT_APP_SERVER_URL}/logout`}> LOG OUT </a>
						</NavItem> */}
						
						<NavItem className="px-4 tw-border-solid tw-border-labBlue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2">
							<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#">
								<p className='tw-text-base tw-text-labBlue tw-font-bold'>Home</p>
							</NavLink>
						</NavItem>
						<NavItem className="px-4 tw-border-solid tw-border-labBlue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2">
							<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#labs">
								<p className='tw-text-base tw-text-labBlue tw-font-bold'>Labs</p>
							</NavLink>
						</NavItem>
						<NavItem className="px-4 tw-border-solid tw-border-labBlue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2">
							<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#about">
								<p className='tw-text-base tw-text-labBlue tw-font-bold'>About Us</p>
							</NavLink>
						</NavItem>
						<NavItem className="px-4 tw-border-solid tw-border-labBlue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2">
							<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#resources">
								<p className='tw-text-base tw-text-labBlue tw-font-bold'>Educator Resources</p>
							</NavLink>
						</NavItem>
						{
							!loggedIn && (
								<NavItem className="px-4">
									{/* USER NOT LOGGED IN, renders sign in button*/}
									<div className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#sign-in">
										{/* OPEN LOG IN MODAL HERE */}
										{/* REMOVE BELOW */}
										<a
											href="# "
											className='tw-no-underline'
											onClick={() =>
												API.postWithBody(process.env.REACT_APP_SERVER_URL + "/url", {
													url: window.location,
												}).then(() => {
													window.location.href =
													process.env.REACT_APP_SERVER_URL + "/auth/google";
												})
											}
										>
											<div className="google__button" />
											<p className='tw-text-base tw-text-labBlue tw-font-bold'>Sign In</p>
										</a>
										{/* REMOVE ABOVE */}
									</div>
								</NavItem>
							)
						}				
					</Nav>
				</Collapse>
				{/* USER IS LOGGED IN, renders google pfp */}
				{
					loggedIn && (
						<div className="tw-aspect-square tw-flex tw-items-center tw-justify-center tw-border-solid tw-border-labBlue tw-border-4 tw-rounded-full tw-overflow-clip tw-max-h-16">
							<img src={state.main.user?.userpfp} alt="Google Profile Photo" className="" ></img>
						</div>
					)
				}
			</div>
			<a className="tw-flex tw-no-underline tw-justify-end tw-text-labBlue tw-cursor-pointer">
				<p>Site Accessibility Settings</p>
			</a>
		</div>
	</Navbar>
	
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
