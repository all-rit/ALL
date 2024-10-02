/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, {  } from "react";
import Logo from "../../assets/images/logos/FinalALLLogo.png";
import "../../assets/stylesheets/components/Header.scss";
import {
  Navbar,
  Nav,
  NavItem,
} from "reactstrap";

function Header() {

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
				className="logo tw-cursor-pointer"
				src={Logo}
				alt="Computing Accessibility"
				/>
			</a>
			<Nav className='tw-flex tw-flex-grow tw-justify-end tw-flex-row tw-items-center tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-8 tw-rounded-md tw-border-l-labYellow tw-border-b-labYellow' navbar>
				<NavItem className="px-4 tw-text-base tw-text-labBlue tw-font-bold" href="#">Home</NavItem>
				<NavItem className="px-4 tw-text-base tw-text-labBlue tw-font-bold tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2" href="#labs">Labs</NavItem>
				<NavItem className="px-4 tw-text-base tw-text-labBlue tw-font-bold tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2" href="#">About Us</NavItem>
				<NavItem className="px-4 tw-text-base tw-text-labBlue tw-font-bold tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2" href="#">Resources</NavItem>
				<NavItem className="px-4 tw-text-base tw-text-labBlue tw-font-bold tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2" href="#">Sign In</NavItem>
			</Nav>
		</div>
	</Navbar>
	);
}


export default Header;
