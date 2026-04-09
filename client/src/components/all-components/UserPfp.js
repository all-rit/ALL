import useMainStateContext from "src/reducers/MainContext";
import PropTypes from "prop-types";
import DefaultUser from "../../assets/images/DefaultUser.png";

// User profile picture circle
const UserPfp = ({ onClick }) => {
  const { state } = useMainStateContext();
  const user = state.main.user;
  const className = `tw-w-full tw-h-full tw-object-cover tw-rounded-full ${onClick ? "tw-cursor-pointer" : ""}`;

  return user?.userpfp ? (
    <img
      src={user.userpfp}
      alt="User Profile Picture"
      className={className}
      onClick={onClick}
    />
  ) : user.firstname && user.lastinitial ? (
    <div>{user?.firstname[0] + user?.lastinitial}</div>
  ) : (
    <img
      src={DefaultUser}
      alt="Default User"
      className={`${className} tw-p-1`}
    />
  );
};

UserPfp.propTypes = {
  onClick: PropTypes.func,
};

export default UserPfp;
