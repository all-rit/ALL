import React, {useState} from "react";
import {RxAccessibility} from "react-icons/rx";


export const Tools = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            {open && (
                <div className={"tw-fixed tw-flex tw-flex-col tw-z-50 tw-right-32 tw-bottom-32 tw-bg-white tw-shadow-xl tw-rounded-b-xl"}>
                    <div className={"tw-bg-[#3D3D3D] tw-rounded-t-xl tw-p-8"}>
                        <p className={"tw-text-white tw-text-xl tw-font-bold"}>Accessibility Tools</p>
                    </div>
                    <div>
                        <div>
                            <p>Text Size Adjuster</p>
                            <div>
                                <button className={"btn tw-bg-[#3D3D3D] tw-text-white"}>Decrease (-)</button>
                                <button className={"btn tw-bg-[#3D3D3D] tw-text-white"}>Increase (+)</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={() => setOpen(!open)}
                    className={"btn btn-primary tw-fixed tw-flex tw-z-30 tw-right-8 tw-bottom-8 tw-w-16 tw-h-16 tw-rounded-full tw-items-center"}>
                <RxAccessibility size={48}/>
            </button>
        </>
    );
};
