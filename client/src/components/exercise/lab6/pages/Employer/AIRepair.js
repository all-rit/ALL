import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";
import "C:/Users/MrRob/ALL/ALL/client/src/components/quiz/App.css";
import ReactDOM from 'react-dom';


import Applicant from "../../components/Applicant";

const AIRepair = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING)
    },[actions]);

    const handleStart = () =>{
        navigate("/Lab6/Exercise/FixedHiringCandidate");
    }

    const itemStyle = {
        padding: '0px',
      position: 'relative',
      height: '26px',
      display: 'flex',
      alignItems: 'center'
  };
  
  const textStyle = {
        ...itemStyle,
        padding: '0px 4px',
        height: '26px',
        fontFamily: 'Arial',
        fontSize: '13px'
  };
  
  const inputStyle = {
        padding: '0',
      position: 'absolute',
      left: '2px',
      top: '2px',
      right: '45px',
      bottom: '2px',
        minWidth: '20px',
        fontFamily: 'Arial',
        fontSize: '13px'
  };
  
  const buttonStyle = {
      position: 'absolute',
      top: '2px',
      right: '2px',
      bottom: '2px',
      width: '40px'
  };

  const Cell = React.memo(({value, mode, onChange}) => {
    const [localMode, setLocalMode] = React.useState(mode ?? 'read');
    const[localValue, setLocalValue] = React.useState(value ?? ' ');
    React.useEffect(() => setLocalMode(mode ?? 'read'), [mode]);
    React.useEffect(() => setLocalValue(value ?? ''), [value]);
    if (localMode ===  'edit') {
        const handleInputChange = (e) => setLocalValue(e.target.value);
        const handleSaveClick = () => {
            setLocalMode('read');
            onChange?.(localValue);
        };
        return (
            <div style={itemStyle}>
                <input type = "text"
                value={localValue}
                style={inputStyle}
                onChange={handleInputChange} />
            <button style= {buttonStyle} onClick={handleSaveClick}>Ok</button>
            </div>
            
        );
    }
    if (localMode === 'read') {
        const handleEditClick = () => {
            setLocalMode('edit');
        };
        return (
            <div style={textStyle} onClick= {handleEditClick}>{localValue}</div>
        );
    }
    return null;

  });


  const tdStyle = {
    padding: '1px',
    border: '1px solid black',
};

const optionStyle = {
    ...tdStyle,
  padding: '2px 2px',
    width: '30px'
};


// recheck this part for tomorrow

    const Row = React.demo(({ mode, columns, data, onChange, onDelete}) => {
        const handleDeleteClick = () => onDelete?.();
        return (
        <tr>
          {columns.map(({path}, columnIndex) => {
              const handleChange = value => {
                  if (onChange) {
                      const changedData = { ...data, [path]: value };
                      onChange(columnIndex, changedData);
                  }
              };
              return (
                  <td key={path} style={tdStyle}>
                    <Cell 
                      mode={mode}
                      value={data[path]} 
                      onChange={handleChange} 
                    />
                  </td>
              );
          })}
          <td style={optionStyle}>
            <button onClick={handleDeleteClick}>Delete</button>
          </td>
        </tr>
    );
});



            </td>


            )
                )}
            </tr>
        )
    }

    const data = [
        {Characteristic: " ", Inclusion: " ", Weight: " "},
        {Characteristic: "Gender", Inclusion: "No",  Weight: "X"},
        {Characteristic: "Years of Experience", Inclusion: "No", Weight: "X"},
        {Characteristic: "Availability", Inclusion: "Yes", Weight: "2/10"},
        {Characteristic: "Salary", Inclusion: "Yes", Weight: "2/10"},
        {Characteristic: "Age", Inclusion: "No", Weight: "X"},
        {Characteristic: "Appearance", Inclusion: "Yes", Weight: "6/10"},
        ]


    return(
        <div className="center-div">
            <h2 class="playthrough__title">Repair the AI</h2>
            <div className="center-div">
            <div className="playthrough__sentence">
            Select row, adjust inclusion of attribute, then adjust weight to determine how significant each attribute is to AI selection.
            </div>
        </div>


        <div className= "App">
            <table>
                <thead>
                    <tr>
                        <th>Characteristic</th>
                        <th>Inclusion</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                {data.map((val, key) => {
                    return (
                    <tr key={key}>
                        <td>{val.Characteristic}</td>
                        <td>{val.Inclusion}</td>
                        <td>{val.Weight}</td>
                    </tr>
                )
            })}
            </table>
            </div>
          
        





            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick = {handleStart}
                key="start"
            >
                Redo With Repair
            </button>
      </div>
    );
}


export default AIRepair; 
