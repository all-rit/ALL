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

	if (isSmallWindow == false && windowSize[0] < 840) {
		setisSmallWindow(true)
	}
	else if (isSmallWindow == true && windowSize[0] >= 840) {
		setisSmallWindow(false)
	}



	// user is logged in if their profile image isn't null, kinda scuffed but lmk if there's a simpler way
	// (state.main.user is never null)
	const loggedIn = state.main.user?.userpfp !== null
	
	return (
	<Navbar
		id="navHeader"
		expand="lg"
		className="tw-pt-3 poppins tw-font-bold mb-0"
	>
		<div className="tw-flex tw-flex-col tw-gap-2 tw-z-30 tw-text-2xl tw-bg-white tw-fixed tw-top-0 p-2 tw-left-0 tw-right-0 d-flex">
			<div className={`${isSmallWindow ? "tw-flex tw-flex-row tw-justify-between" : "tw-flex tw-flex-row tw-gap-4"}`}>
				<a href="# ">
					<img
						className="tw-cursor-pointer tw-h-16"
						src={Logo}
						alt="Computing Accessibility"
					/>
				</a>

				<NavbarToggler 
					className={`${isSmallWindow ? "tw-absolute tw-right-0 tw-top-0 tw-m-4 tw-z-20" : "tw-hidden"}`} 
					onClick={toggleNavbar}
				/>
				<Collapse 
					className={`${isSmallWindow ? "tw-absolute tw-bg-white tw-right-0 tw-top-[100%] tw-items-center tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-8 tw-rounded-bl-md tw-border-l-labYellow tw-border-b-labYellow" : "tw-flex tw-flex-grow tw-justify-end"}`}
					isOpen = {navbarOpen}

				>
					<Nav className={`${isSmallWindow ? "tw-relative tw-flex-col" : "tw-flex tw-flex-grow tw-justify-end tw-flex-row tw-items-center tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-8 tw-rounded-bl-md tw-border-l-labYellow tw-border-b-labYellow"}`}>				
						<NavItem className={`${"px-4"} ${!isSmallWindow && "tw-border-labBlue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2 tw-border-solid"}`}>
							<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#">
								<p className='tw-text-base tw-text-labBlue tw-font-bold'>Home</p>
							</NavLink>
						</NavItem>
						<NavItem className={`${"px-4"} ${!isSmallWindow && "tw-border-labBlue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2 tw-border-solid"}`}>
							<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#labs">
								<p className='tw-text-base tw-text-labBlue tw-font-bold'>Labs</p>
							</NavLink>
						</NavItem>
						<NavItem className={`${"px-4"} ${!isSmallWindow && "tw-border-labBlue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2 tw-border-solid"}`}>
							<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#about">
								<p className='tw-text-base tw-text-labBlue tw-font-bold'>About Us</p>
							</NavLink>
						</NavItem>
						<NavItem className={`${"px-4"} ${!isSmallWindow && "tw-border-labBlue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2 tw-border-solid"}`}>
							<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#resources">
								<p className='tw-text-base tw-text-labBlue tw-font-bold'>Educator Resources</p>
							</NavLink>
						</NavItem>
						<NavItem className="tw-px-4 tw-py-2 tw-flex tw-justify-center tw-items-center">
							{
								loggedIn ? (
									// TO-DO: PROFILE LINK HERE
									<NavLink className="tw-aspect-square tw-p-0 tw-border-solid tw-border-4 tw-border-labBlue tw-rounded-full tw-overflow-hidden">
										<img src={state.main.user?.userpfp} alt="Google Profile Photo" className="tw-h-12" ></img>
									</NavLink>
								) : (
									// TO-DO: SIGN-IN MODAL HERE
									<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#sign-in">
										<p className='tw-text-base tw-text-labBlue tw-font-bold'>Sign In</p>
									</NavLink>
								)
							}
						</NavItem>
						<NavItem className="tw-flex tw-justify-center tw-items-center">
							{
								isSmallWindow && <a className="tw-flex tw-justify-end tw-no-underline tw-items-center tw-text-labBlue tw-cursor-pointer">
														<p className="tw-text-xs">Site Accessibility Settings</p>
													</a>
							}
						</NavItem>
						
					</Nav>
				</Collapse>
			</div>
			{
				!isSmallWindow && <a className="tw-flex tw-justify-end tw-no-underline tw-items-center tw-text-labBlue tw-cursor-pointer">
									<p className="tw-text-xs">Site Accessibility Settings</p>
								</a>
			}
			
		</div>
		
	</Navbar>
	
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
