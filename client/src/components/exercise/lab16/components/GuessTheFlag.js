import React, {useState, useRef, useEffect} from "react"
import { FLAG_QUESTIONS } from "src/constants/lab16";

const GuessTheFlag = () =>{
    //shuffle the FLAG_QUESTIONS array -> The Durstenfeld Shuffle
    const durstenfeldShuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const [questions] = useState(() => durstenfeldShuffle(FLAG_QUESTIONS));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wrongOptions, setWrongOptions] = useState([]);
    const [correctPicked, setCorrectPicked] = useState(false);

    const timeoutRef = useRef(null);

    // clear 1 second timer
    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    const currentQuestion = questions[currentIndex];
    const hintVisible = wrongOptions.length > 0;

    const goToNextQuestion = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= questions.length) {
        //reshuffle
        durstenfeldShuffle(questions);
        setCurrentIndex(0);
        } else {
        setCurrentIndex(nextIndex);
        }

        setWrongOptions([]);
        setCorrectPicked(false);
    };

    // update current question when an option is picked
    const onOptionClick = (option) => {
        if (correctPicked || wrongOptions.includes(option)) return;

        if (option === currentQuestion.answer) {
        setCorrectPicked(true);
        timeoutRef.current = setTimeout(goToNextQuestion, 1000);
        } else {
        setWrongOptions((previous) => [...previous, option]);
        }
    };

    // update the bg colors of the options when correct/wrong option is made
    const getOptionStyling = (option) => {
        const baseOptionStyle = {
        backgroundColor: "#fff",
        boxSizing: "border-box",
        border: "2px solid #1b1c22",
        borderRadius: "8px",
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "12px 60px",  
        fontWeight: "bold",
        cursor: "pointer"
        };

        if (correctPicked && option === currentQuestion.answer) {
        return { ...baseOptionStyle, backgroundColor: "#d6f2e1", color: "#127a43", borderColor: "#127a43" };
        }
        if (wrongOptions.includes(option)) {
        return { ...baseOptionStyle, backgroundColor: "#fbd9dd", color: "#d3263a", textDecoration: "line-through", borderColor: "#d3263a", cursor: "not-allowed" };
        }
        return baseOptionStyle;
    };

    return(    
        <div className="tw-grid tw-gap-22 tw-justify-items-center tw-text-center tw-pt-20">
            <h2 className="tw-font-bold tw-mb-5">Guess the Flag!</h2>
            {/* image of flag */}
            <img
                key = {currentQuestion.flag}
                src = {currentQuestion.flag}
                alt = "Country Flag"
                className = "tw-w-60 tw-h-40 tw-object-cover tw-block tw-shadow-lg tw-mt-[0] tw-mx-[auto] tw-mb-[16px] tw-rounded-md"
            />

             {/* grid for the options */}
            <div style = {{ display: "grid", gap: "12px", width: "100%" }}>
                {currentQuestion.options.map((option) => (
                <button
                    key = {option}
                    onClick = {() => onOptionClick(option)}
                    style = {getOptionStyling(option)}>
                    {option}
                </button>
                ))}
            </div>

            {/* add hint visbility */}
            {hintVisible && (
            <div className="tw-mt-4">
                <p style={{
                    backgroundColor: "#f2f3f7",
                    borderLeft: "5px solid #fccf35",
                    padding: "10px 14px",
                    borderRadius: "0 6px 6px 0",
                    textAlign: "left"
                }}> 
                    <b>Hint: </b> {currentQuestion.fact}
                </p>
                <p className = "tw-mt-2 tw-font-bold tw-text-[#d3263a]">Not quite. Try again.</p>
            </div>)}
        </div>
    )    

    // a starting screen for players so that they don't get thrown into the quiz immediately

}

export default GuessTheFlag