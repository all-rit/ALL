/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logos/FinalALLLogo.png";
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

const Header = (props) => {
	const { state } = useMainStateContext()

	// user is logged in if their name isn't null, kinda scuffed but lmk if there's a better idea
	const loggedIn = state.main.user?.userpfp !== null
	
	return (
	<Navbar
		id="navHeader"
		dark
		expand="lg"
		className="tw-pt-3 poppins tw-font-bold mb-0"
	>
		<div className="tw-flex tw-flex-col tw-gap-4 tw-z-30 tw-text-2xl tw-bg-white tw-fixed tw-top-0 p-3 tw-left-0 tw-right-0 w-100 d-flex flex-row">
			<div className="tw-flex tw-flex-row tw-gap-4">
				<a
					href="# "
					onClick={() =>
						console.log("Click Logo")
					}
				>
					<img
						className="tw-cursor-pointer tw-h-16"
						src={Logo}
						alt="Computing Accessibility"
					/>
				</a>

				{/* TODO:
						- Replace temporary href anchor names (i.e. #about)
						- Add new logo + styling
						- hamburger menu for mobile devices
						- Site Accessibility Settings
				*/}
				<div className='tw-flex tw-flex-grow tw-justify-end'>
					<Nav className='tw-flex tw-flex-grow tw-justify-end tw-flex-row tw-items-center tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-8 tw-rounded-bl-md tw-border-l-labYellow tw-border-b-labYellow' navbar>				
						
						{/* TODO -- REMOVE THIS NAVITEM (only here for testing) */}
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
									{/* USER NOT LOGGED IN */}
									<div className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#sign-in">
										{/* OPEN LOG IN MODAL HERE */}

										{/* TODO -- TRANSFER THIS INTO SIGN IN MODAL */}
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
									</div>
								</NavItem>
							)
						}				
					</Nav>
				</div>
				{
					loggedIn && (
						<div className="tw-aspect-square tw-flex tw-items-center tw-justify-center tw-border-solid tw-border-labBlue tw-border-4 tw-rounded-full tw-overflow-clip tw-max-h-16">
							<img src={state.main.user?.userpfp} alt="Google Profile Photo" className="" ></img>
						</div>
					)
				}
			</div>
			<p className="tw-flex tw-justify-end tw-text-labBlue">Site Accessibility Settings</p>
		</div>
	</Navbar>
	
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
