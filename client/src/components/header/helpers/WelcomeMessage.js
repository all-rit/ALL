import React, { useState } from 'react';
import {
	Button
} from 'reactstrap';
import LoginButton from './LoginButton';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import API from '../../../services/API';


const WelcomeMessage = (props) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { user, loginEnabled } = props;
	const toggle = () => setDropdownOpen(prevState => !prevState);
	if (user === null || user.firstname === null) {
			return <LoginButton enabled={loginEnabled} />;
	}
	const initial = user.firstname.charAt(0).toUpperCase();
	const imageUrl = user.image; 
	return (
		<Dropdown isOpen={dropdownOpen} toggle={toggle} className="welcome" disabled={!loginEnabled}>
			<DropdownToggle
				className="welcome__toggle"
			>
				{imageUrl === "" || imageUrl === null ? (
					<Button className="welcome__name" disabled={!loginEnabled}>
						{initial}
					</Button>
				) : (
					<Button className="welcome__name" style={{"padding": "0", "overflow": "hidden"}} disabled={!loginEnabled}>
						<img src={ imageUrl } alt="Profile" />
					</Button>
				)}
			</DropdownToggle>
			<DropdownMenu className= "welcome__menu"  >
				<DropdownItem 
					href="# "
					onClick={() => API.postWithBody(process.env.REACT_APP_SERVER_URL + "/url", {url:window.location}).then(()=>{window.location.href= process.env.REACT_APP_SERVER_URL +'/logout'})}
				>
					Logout
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default WelcomeMessage;
