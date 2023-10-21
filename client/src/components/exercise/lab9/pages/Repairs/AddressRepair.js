import React from "react";
import { PropTypes } from "prop-types";
import Repair from "../../../../body/Repair/Repair";
import { GAME_STATES, REPAIR } from "../../../../../constants/lab9";
import useRepairAddress from "../../hooks/useRepairAddress";


const AddressRepair = (user = "") => {
    // eslint-disable-next-line no-unused-vars
    const { data, functions } = useRepairAddress(user);
    return <Repair path={`${REPAIR}/${GAME_STATES.REPAIR_ADDRESS_FORM}`} CodeImplementation={() => { }} navigateNext={ () => {}} />;
};

AddressRepair.propTypes = {
    user: PropTypes.string.isRequired,
}

export default AddressRepair;