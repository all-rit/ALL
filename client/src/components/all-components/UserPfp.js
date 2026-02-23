import useMainStateContext from "src/reducers/MainContext";
import PropTypes from "prop-types";
import DefaultUser from '../../assets/images/DefaultUser.png';

// User profile picture circle
const UserPfp = ({ onClick }) => {
    const { state } = useMainStateContext();
    const user = state.main.user;
    const className = `tw-w-full tw-h-full tw-object-cover tw-rounded-full ${onClick ? "tw-cursor-pointer" : ""}`;
    console.log()

    return (user && user.userpfp ?
        <div
            onClick={onClick}
            aria-label="Google Profile Photo"
            alt={`${user.firstname}'s profile picture`}
            className={className}
            style={{
                backgroundImage: `url(${user?.userpfp})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        />
        :
        <img src={DefaultUser} alt="Default User" className={`${className} tw-p-1`} />
    );
};

UserPfp.propTypes = {
    onClick: PropTypes.func
};

export default UserPfp;
