import React, { useState, useMemo, useEffect } from "react";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";
import { creaturePaths } from "src/constants/lab16/Creatures";
import { deepfakePaths } from "src/constants/lab16/DeepfakeCreatures";
import ChatMessageModal from "../components/ChatMessageModal";


const DeepfakeGenerator = ()=>{
    const [selectedCreature, setSelectedCreature] = useState("");
    const [selectedAction, setSelectedAction] = useState("");
    const [generatedDeepfake, setGeneratedDeepfake] = useState("");
    const [deepfakeCount, setDeepfakeCount] = useState(0);
    const [loading, setLoading] = useState(false);
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
    }, [deepfakeCount]);

    const resetGenerator = async () => {
        setGeneratedDeepfake("");
        setSelectedCreature("");
        setSelectedAction("");
        setDeepfakeCount((count) => count + 1 );
    };

    useEffect(() => {
        if (!loading) {
            return;
        };

        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [loading]);

    const handleNavigation = async () => {
      navigate("/Lab16/Exercise/ChatRoom2");
    };

    const imageTransformSizing = "tw-w-24 tw-h-24 tw-m-1 tw-object-cover tw-rounded-xl tw-outline tw-outline-transparent tw-border-solid tw-border-secondary-gray " + 
                                "tw-transition-all tw-duration-200 " + 
                                "peer-checked:tw-w-28 peer-checked:tw-h-28 peer-checked:tw-outline-solid peer-checked:tw-outline-primary-blue peer-checked:tw-border-transparent ";

    const actionSelectionSizing = "tw-flex tw-items-center tw-justify-center tw-text-center tw-w-full tw-min-h-16 tw-px-4 tw-outline tw-outline-transparent tw-rounded-xl tw-text-md " + 
                                "tw-transition-all tw-duration-200 " +
                                "peer-checked:tw-text-lg peer-checked:tw-outline-primary-blue peer-checked:tw-shadow-lg peer-checked:tw-bg-secondary-gray ";

    const creatureStateStyling = generatedDeepfake ? "tw-cursor-not-allowed pointer-events-none" : "hover:tw-w-28 hover:tw-h-28 ";
    const actionStateStyling = generatedDeepfake ? "tw-cursor-not-allowed pointer-events-none" : "hover:tw-text-lg hover:tw-bg-secondary-gray";

    const buttonStyle = "tw-rounded-xl tw-p-2 tw-px-4 tw-bg-primary-blue tw-border-2 tw-border-solid tw-border-primary-yellow " + 
                        "hover:tw-shadow-lg ";
    
    const loadingDot = "tw-w-2 tw-h-2 tw-bg-labGray tw-rounded-full tw-animate-bounce";

    return (
    <>
    {deepfakeCount < 4 ? (
        <div className="tw-border tw-rounded-xl tw-h-auto tw-p-[1rem] tw-shadow-xl">
            <div className="tw-flex tw-flex-row tw-justify-around tw-items-center tw-w-full tw-h-full tw-p-2">
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
                                        disabled={generatedDeepfake}
                                        className="tw-peer tw-sr-only peer-disabled:tw-cursor-not-allowed"
                                    />
                                    <img src={creaturePaths[creature]} alt={creature} className={imageTransformSizing + creatureStateStyling}/>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="tw-flex tw-flex-col tw-justify-left tw-text-left">
                        <p>Step 2:</p>
                        <p>Choose an Action</p>
                        <div className="tw-grid tw-grid-cols-2 tw-place-items-center tw-p-2 tw-gap-2">
                            {actionList.map((action) => (
                                <label className="tw-cursor-pointer tw-relative tw-group tw-w-full tw-flex tw-bg-labLightGray tw-border-solid tw-border-secondary-gray tw-rounded-xl tw-shadow-sm">
                                    <input
                                        type="radio"
                                        name="action-select"
                                        value={action}
                                        checked={selectedAction === action}
                                        onChange={()=>setSelectedAction(action)}
                                        disabled={generatedDeepfake}
                                        className="tw-peer tw-sr-only"
                                    />
                                    <p className={actionSelectionSizing + actionStateStyling}>{action}</p>
                                </label>
                            ))}
                        </div>
                    </div>
                    {!generatedDeepfake && (
                        <div className="tw-pt-4">
                        <Button
                            className={buttonStyle}
                            onClick={()=>{
                                setGeneratedDeepfake(selectedCreature + " " + selectedAction);
                                setLoading(true);
                            }}
                            disabled={!(selectedCreature && selectedAction) || generatedDeepfake}
                        >
                            Generate Deepfake
                        </Button>
                        </div>
                    )}
                </div>
                <div className="tw-m-4">
                    {!generatedDeepfake && !loading ? (
                        <div className="tw-px-4 tw-py-2 tw-bg-secondary-gray tw-text-black tw-border-solid tw-border-0 tw-border-l-2 tw-border-l-primary-yellow">
                            <p><b>Hint: </b>Please select a creature & an action!</p>
                        </div>
                    ) : generatedDeepfake && !loading ? (
                        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-2">
                            <img
                                src={deepfakePaths[selectedCreature][actionList.indexOf(selectedAction)]}
                                alt={generatedDeepfake}
                                className="tw-rounded-xl tw-w-[clamp(200px,50vw,400px)] tw-h-auto tw-shadow-md"
                            />
                            <Button
                                className={buttonStyle}
                                onClick={resetGenerator}
                            >
                                Try Again!
                            </Button>
                        </div>
                    ) : (
                        <div className="tw-flex tw-gap-1 tw-justify-center tw-items-center">
                            <div className={loadingDot + " [animation-delay:-0.4s]"}></div>
                            <div className={loadingDot + " [animation-delay:-0.2s]"}></div>
                            <div className={loadingDot}></div>
                            <p className="tw-text-lg tw-pl-2 tw-pb-2">Creating your deepfake...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) : (
        <ChatMessageModal
        handleNavigation={handleNavigation}
        />
    )}
    </>
    );
};

export default DeepfakeGenerator;
