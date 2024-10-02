/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, {  } from "react";
import Logo from "../../assets/images/logos/FinalALLLogo.png";
import useMainStateContext from "src/reducers/MainContext";

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = (props) => {
	const { loggedIn } = props

	const { state } = useMainStateContext()

	return (
	<Navbar
		id="navHeader"
		dark
		expand="lg"
		className="tw-pt-3 poppins tw-font-bold mb-0"
	>
		<div className=" tw-z-30 tw-text-2xl tw-gap-4 tw-bg-white tw-fixed tw-top-0 p-3 tw-left-0 tw-right-0 w-100 d-flex flex-row align-items-between">
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
					- possibly update colors from labBlue to the new ones (idk if those are the new ones or not)
					- Welcome Menu
					- Site Accessibility Settings
			*/}

			<Nav className='tw-flex tw-flex-grow tw-justify-end tw-flex-row tw-items-center tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-8 tw-rounded-bl-md tw-border-l-labYellow tw-border-b-labYellow' navbar>
				<NavItem className="px-4">
					<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#">
						<p className='tw-text-base tw-text-labBlue tw-font-bold'>Home</p>
					</NavLink>
				</NavItem>
				<NavItem className="px-4 tw-border-solid tw-border-labBlue tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2">
					<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#labs">
						<p className='tw-text-base tw-text-labBlue tw-font-bold'>Labs</p>
					</NavLink>
				</NavItem>
				<NavItem className="px-4 tw-border-solid tw-border-labBlue tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2">
					<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#about">
						<p className='tw-text-base tw-text-labBlue tw-font-bold'>About Us</p>
					</NavLink>
				</NavItem>
				<NavItem className="px-4 tw-border-solid tw-border-labBlue tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2">
					<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#resources">
						<p className='tw-text-base tw-text-labBlue tw-font-bold'>Educator Resources</p>
					</NavLink>
				</NavItem>
				{ /* CONDITIONALLY RENDER IF USER IS LOGGED IN */
					state.main.user !== null ? (
						<NavItem className="px-4 tw-border-solid tw-border-labBlue tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2">
							<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#sign-in">
								{/* OPEN LOG IN MODAL HERE */}
								<p className='tw-text-base tw-text-labBlue tw-font-bold'>Sign In</p>
							</NavLink>
						</NavItem>
					) : (
						<NavItem className="px-4 tw-border-solid tw-border-labBlue tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2">
							<NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0" href="#sign-in">
								{/* OPEN LOG IN MODAL HERE */}
								<p className='tw-text-base tw-text-labYellow tw-font-bold'>Sign In</p>
							</NavLink>
						</NavItem>
					)
				}
			</Nav>
		</div>
	</Navbar>
	);
}


export default Header;
