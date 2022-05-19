import { useState } from "react";
import QualQues from "../../../../quiz/components/QualQues";
import "C:/Users/MrRob/ALL/ALL/client/src/components/quiz/App.css";

export default function App() {
    const [checkedState, setCheckedState] = useState(new Array(QualQues.length).fill(false));

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    }

    return (
        <div className = "App">
            <h3>Select Qualities</h3>
            <ul className = "QualQues list">
                {QualQues.map(({content, value}, index) => {
                    return(
                        <li key = {index}>
                            <div className = "QualQues-list-item">
                                <div className = "left-section">
                                    <input
                                        type = "checkbox"
                                        id = {`custom-checkbox-${index}`}
                                        name = {content}
                                        value = {content}
                                        checked = {checkedState[index]}
                                        onChange={() => handleOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{content}</label>
                                </div>
                            </div>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}
