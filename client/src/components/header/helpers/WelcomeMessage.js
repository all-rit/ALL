import React, {useState} from 'react';
import {Button} from 'reactstrap';
import LoginButton from './LoginButton';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const WelcomeMessage = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {user, loginEnabled, renderLink} = props;
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  if (user === null || user.firstname === null) {
    return <LoginButton enabled={loginEnabled} />;
  }
  const initial = user.firstname.charAt(0).toUpperCase();
  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      className="welcome"
      disabled={!loginEnabled}
    >
      <DropdownToggle className="welcome__toggle">
        <Button className="welcome__name" disabled={!loginEnabled}>
          {initial}
        </Button>
      </DropdownToggle>
      <DropdownMenu className="welcome__menu">
        {renderLink && (
          <DropdownItem href={'/Profile'}>My Profile</DropdownItem>
        )}
        <DropdownItem href={`${process.env.REACT_APP_SERVER_URL}/logout`}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default WelcomeMessage;
