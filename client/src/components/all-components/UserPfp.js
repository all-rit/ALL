import useMainStateContext from "src/reducers/MainContext";
import PropTypes from "prop-types";

// User profile picture circle
const UserPfp = ({ onClick }) => {
    const { state } = useMainStateContext();
    const user = state.main.user;
    if (!user) {
        return null; // or a default avatar
    }

    return (
        <div
            onClick={onClick}
            aria-label="Google Profile Photo"
            alt = {`${user.firstname}'s profile picture`}
            className={"tw-w-full tw-h-full tw-object-cover"}
            style={{
                backgroundImage: `url(${user?.userpfp})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        ></div>
    );
};

UserPfp.propTypes = {
    onClick: PropTypes.func
};

export default UserPfp;
