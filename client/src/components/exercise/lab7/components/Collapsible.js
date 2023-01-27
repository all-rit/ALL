/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState} from "react";
import '../../../../assets/stylesheets/components/Collapsible.scss'

const Collapsible = ({title, content}) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div className={"tw-bg-[#EBE8E8] tw-shadow-xl"}>
            <button onClick={handleClick}
                    className={"tw-border-none tw-flex tw-w-full tw-items-center tw-justify-around tw-gap-x-6 tw-text-lg tw-py-3"}>
                <p className={"tw-font-bold tw-text-xl"}>{title}</p>
                <p className={"tw-font-semibold"}>Threat Level: 0</p>
                <p className={"tw-font-semibold"}>Intrusions: 0</p>
                <p className={"tw-font-semibold"}>Protected (TP): 0</p>
                <p className={"tw-font-semibold"}>Incorrect (FP): 0</p>
                <div>{active ? "-" : "+"}</div>
            </button>
            {active && (
                <div className={"tw-border-y-0 tw-border-x-0 tw-border-t tw-border-solid tw-mx-32"}>
                    <div className={"tw-mt-6"}>
                        Active for {title}
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