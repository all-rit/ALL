/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState} from "react";
import '../../../../assets/stylesheets/components/Collapsible.scss'
import {FILE_INCORRECT, FILE_INTRUSION, FILE_PROTECTED, THREAT_LEVEL_TEXT} from "../../../../constants/lab7";

const Collapsible = ({result: {files, threatLvl}, index}) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    const intrusionCount = files.filter((file) => file.result === FILE_INTRUSION).length;
    const protectedCount = files.filter((file) => file.result === FILE_PROTECTED).length;
    const incorrectCount = files.filter((file) => file.result === FILE_INCORRECT).length;

    return (
        <div className={"tw-bg-[#EBE8E8] tw-shadow-xl"}>
            <button onClick={handleClick}
                    className={"tw-border-none tw-flex tw-w-full tw-items-center tw-justify-around tw-justify-center tw-gap-x-6 tw-text-lg tw-py-3"}>
                <p className={"tw-font-bold tw-text-xl"}>
                    Round {index + 1}
                </p>
                <p className={"tw-font-semibold"}>
                    Threat Level: {THREAT_LEVEL_TEXT[threatLvl]}
                </p>
                <p className={"tw-font-semibold"}>
                    <span className={intrusionCount > 0 ? "tw-text-brightRed" : ""}>
                        Intrusions: {intrusionCount}
                    </span>
                </p>
                <p className={"tw-font-semibold"}>
                    Protected (TP): {protectedCount}
                </p>
                <p className={"tw-font-semibold"}>
                    <span className={incorrectCount > 0 ? "tw-text-brightRed" : ""}>
                        Incorrect (FP): {incorrectCount}
                    </span>
                </p>
                <div>{active ? "-" : "+"}</div>
            </button>
            {active && (
                <div className={"tw-border-y-0 tw-border-x-0 tw-border-t tw-border-solid tw-mx-32"}>
                    <div className={"tw-mt-6"}>
                        Active for {index + 1}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Collapsible;

/*
<div className="collapsible-item">
        <div className="collapsible-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="collapsible-content">{content}</div>}
      </div>
 */