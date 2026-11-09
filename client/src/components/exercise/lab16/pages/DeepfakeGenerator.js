import React from "react";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";


const DeepfakeGenerator = ()=>{

    const [selectedCharacter, setSelectedCharacter] = useState("")

    const handleNavigation = async () => {
      navigate("/Lab16/Exercise/Conclusion");
    };
    const contentSizing = "tw-border tw-rounded-xl tw-h-auto xxl:tw-h-[600px] xxl:tw-w-[800px] tw-pt-[1rem]";
    const imageTransformSizing = "tw-w-24 tw-object-cover tw-rounded-xl tw-outline tw-outline-transparent tw-p-1 tw-transition-all tw-duration-200 hover:tw-w-28 peer-checked:tw-w-28 peer-checked:tw-outline-solid peer-checked:tw-outline-primary-blue";

    return (
    <>
    <div>
        <div className={contentSizing + " tw-shadow-lg"}>
            <div className="tw-flex tw-flex-row tw-justify-center tw-items-center tw-w-full tw-h-full tw-p-4">
                <div className="tw-flex tw-flex-col tw-justify-center tw-items-top">
                    <h1>ALL Deepfake Generator</h1>
                    <hr/>
                    <div className="tw-flex tw-flex-col tw-justify-left tw-text-left">
                        <p>Step 1:</p>
                        <p>Choose a Character</p>
                        <div className="tw-flex tw-flex-row tw-gap-1 tw-pt-2">
                            <label className="tw-cursor-pointer tw-relative tw-group">
                                <input
                                    type="radio"
                                    name="character-select"
                                    value="char1"
                                    checked={selectedCharacter === char1}
                                    onChange={()=>setSelectedCharacter("char1")}
                                    className="tw-peer tw-sr-only"
                                />
                                <img src="../../../src/assets/images/Placeholder.png" alt="image1" className={imageTransformSizing}/>
                            </label>
                            <label className="tw-cursor-pointer tw-relative tw-group">
                                <input
                                    type="radio"
                                    name="character-select"
                                    value="char2"
                                    checked={selectedCharacter === char2}
                                    onChange={()=>setSelectedCharacter("char2")}
                                    className="tw-peer tw-sr-only"
                                />
                                <img src="../../../src/assets/images/Placeholder.png" alt="image1" className={imageTransformSizing}/>
                            </label>
                            <label className="tw-cursor-pointer tw-relative tw-group">
                                <input
                                    type="radio"
                                    name="character-select"
                                    value="char3"
                                    checked={selectedCharacter === char3}
                                    onChange={()=>setSelectedCharacter("char3")}
                                    className="tw-peer tw-sr-only"
                                />
                                <img src="../../../src/assets/images/Placeholder.png" alt="image1" className={imageTransformSizing}/>
                            </label>
                            <label className="tw-cursor-pointer tw-relative tw-group">
                                <input
                                    type="radio"
                                    name="character-select"
                                    value="char4"
                                    checked={selectedCharacter === char4}
                                    onChange={()=>setSelectedCharacter("char4")}
                                    className="tw-peer tw-sr-only"
                                />
                                <img src="../../../src/assets/images/Placeholder.png" alt="image1" className={imageTransformSizing}/>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    hello
                </div>
            </div>
        </div>
    </div>

     <Button
        className="tw-body-text tw-font-bold tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[10rem] tw-h-[3rem]
        tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl tw-text-black tw-mt-20"
        //change this to last chatpage when that's done
        onClick={handleNavigation}
    >
        End Game
    </Button>


    </>
    )
}

export default DeepfakeGenerator
