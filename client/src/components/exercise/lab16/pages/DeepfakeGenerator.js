import React, { useState, useMemo } from "react";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";
import { creaturePaths } from "src/constants/lab16/Creatures";


const DeepfakeGenerator = ()=>{
    const [selectedCreature, setSelectedCreature] = useState("");
    const [selectedAction, setSelectedAction] = useState("");
    const [generatedImage, setGeneratedImage] = useState("");
    const creatureList = [
        "cat",
        "chicken",
        "cow",
        "dog",
        "donkey",
        "elephant",
        "flamingo",
        "fox",
        "guineapig",
        "horse",
        "koala",
        "mouse",
        "owl",
        "panda",
        "rabbit",
        "sheep",
        "swan",
        "tiger",
        "treefrog",
        "turtle",
    ];
    const actionList = ["Flying a Plane", "Driving a Car", "Going Shopping", "Taking a Test"];

    const creatures = useMemo(() => {
        return [...creatureList].sort(() => Math.random() - 0.5).slice(0, 4);
    }, []);

    const handleNavigation = async () => {
      navigate("/Lab16/Exercise/Conclusion");
    };

    const imageTransformSizing = "tw-w-24 tw-h-24 tw-object-cover tw-rounded-xl tw-outline tw-outline-transparent tw-m-1 tw-border-solid tw-border-secondary-gray tw-transition-all tw-duration-200" +
                                " hover:tw-w-28 hover:tw-h-28 peer-checked:tw-w-28 peer-checked:tw-h-28 peer-checked:tw-outline-solid peer-checked:tw-outline-primary-blue peer-checked:tw-border-transparent";
    const actionSelectionSizing = "tw-flex tw-items-center tw-justify-center tw-text-center tw-w-full tw-min-h-16 tw-px-4 tw-outline tw-outline-transparent tw-rounded-xl tw-text-md tw-transition-all tw-duration-200" + 
                                " hover:tw-text-lg peer-checked:tw-text-lg peer-checked:tw-outline-primary-blue peer-checked:tw-shadow-lg";

    return (
    <>
    <div>
        <div className="tw-border tw-rounded-xl tw-h-auto tw-p-[1rem] tw-shadow-xl">
            <div className="tw-flex tw-flex-row tw-justify-around tw-items-center tw-w-full tw-h-full tw-p-4">
                <div className="tw-flex tw-flex-col tw-justify-center tw-items-top">
                    <h1 className="tw-text-xl">ALL Deepfake Generator</h1>
                    <hr/>
                    <div className="tw-flex tw-flex-col tw-text-left">
                        <p>Step 1:</p>
                        <p>Choose a Creature</p>
                        <div className="tw-flex tw-flex-row tw-gap-1 tw-pt-2">
                            {creatures.map((creature) => (
                                <label className="tw-cursor-pointer tw-relative tw-group">
                                    <input
                                        type="radio"
                                        name="creature-select"
                                        value={creature}
                                        checked={selectedCreature === creature}
                                        onChange={()=>setSelectedCreature(creature)}
                                        className="tw-peer tw-sr-only"
                                    />
                                    <img src={creaturePaths[creature]} alt={creature} className={imageTransformSizing}/>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="tw-flex tw-flex-col tw-justify-left tw-text-left">
                        <p>Step 2:</p>
                        <p>Choose an Action</p>
                        <div className="tw-grid tw-grid-cols-2 tw-place-items-center tw-p-2 tw-mt-2 tw-bg-labLightGray tw-border-solid tw-border-secondary-gray tw-rounded-xl tw-shadow-sm">
                            {actionList.map((action) => (
                                <label className="tw-cursor-pointer tw-relative tw-group">
                                    <input
                                        type="radio"
                                        name="action-select"
                                        value={action}
                                        checked={selectedAction === action}
                                        onChange={()=>setSelectedAction(action)}
                                        className="tw-peer tw-sr-only"
                                    />
                                    <p className={actionSelectionSizing}>{action}</p>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="tw-m-10">
                    {generatedImage ? (
                        <div>
                        </div>
                    ) : (
                        <>
                        {!(selectedCreature && selectedAction) ? (
                            <div className="tw-p-4 tw-bg-primary-blue tw-text-white tw-border-2 tw-border-solid tw-border-primary-yellow tw-rounded-xl">
                                <p>Please Select a Creature & an Action!</p>
                            </div>
                        ) : (
                            <div>
                                <p>Generate Deepfake</p>
                            </div>
                        )}
                        </>
                    )}

                </div>
            </div>
        </div>
    </div>

     {/* <Button
        className="tw-body-text tw-font-bold tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[10rem] tw-h-[3rem]
        tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl tw-text-black tw-mt-20"
        //change this to last chatpage when that's done
        onClick={handleNavigation}
    >
        End Game
    </Button> */}


    </>
    );
};

export default DeepfakeGenerator;
