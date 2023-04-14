import React from "react";

const ALLSelectMenu = () => {
    return(
    <div className="tw-relative tw-max-w-xs tw-mx-auto tw-mt-12">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="tw-absolute tw-top-0 tw-bottom-0 tw-w-6 tw-h-6 tw-my-auto tw-text-textGray tw-right-2.5"
        viewBox="0 0 20 20"
        fill="currentColor"
        >
        <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
        </svg>
        <select className="tw-w-full tw-p-2.5 tw-text-textGray tw-bg-white tw-border tw-rounded-md tw-shadow-sm tw-outline-none tw-appearance-none focus:tw-border-selectedBlue">
            <option>Project manager</option>
            <option>Software engineer</option>
            <option>IT manager</option>
            <option>UI / UX designer</option>
        </select>
    </div>
  )
}

export default ALLSelectMenu;