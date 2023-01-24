/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import "../../../../../components/quiz/App.css";
import ReactDOM from "react-dom";

import Applicant from "../../components/Applicant";

// const AIRepair = (props) =>{
//     const {actions} = props;

//     useEffect(()=>{
//         actions.updateState(EXERCISE_PLAYING)
//     },[actions]);

const handleStart = () => {
  navigate("/Lab6/Exercise/FixedHiringCandidate");
};

//using dirask create dynamic editable table post to then edit to only allow one column to be editable
//link: https://dirask.com/posts/React-create-dynamic-editable-table-DNKArp

const itemStyle = {
  padding: "0px",
  position: "relative",
  height: "26px",
  display: "flex",
  alignItems: "center",
};

const textStyle = {
  ...itemStyle,
  padding: "0px 4px",
  height: "26px",
  fontFamily: "Arial",
  fontSize: "13px",
};

const inputStyle = {
  padding: "0",
  position: "absolute",
  left: "2px",
  top: "2px",
  right: "45px",
  bottom: "2px",
  minWidth: "20px",
  fontFamily: "Arial",
  fontSize: "13px",
};

const buttonStyle = {
  position: "absolute",
  top: "0px",
  right: "2px",
  bottom: "0px",
  width: "40px",
};

const Cell = React.memo(({ value, mode, onChange }) => {
  const [localMode, setLocalMode] = React.useState(mode ?? "read");
  const [localValue, setLocalValue] = React.useState(value ?? " ");
  React.useEffect(() => setLocalMode(mode ?? "read"), [mode]);
  React.useEffect(() => setLocalValue(value ?? ""), [value]);
  if (localMode === "edit") {
    const handleInputChange = (e) => setLocalValue(e.target.value);
    const handleSaveClick = () => {
      setLocalMode("read");
      onChange?.(localValue);
    };
    return (
      <div style={itemStyle}>
        <input
          type="text"
          value={localValue}
          style={inputStyle}
          onChange={handleInputChange}
        />
        <button style={buttonStyle} onClick={handleSaveClick}>
          Ok
        </button>
      </div>
    );
  }
  if (localMode === "read") {
    const handleEditClick = () => {
      setLocalMode("edit");
    };
    return (
      <div style={textStyle} onClick={handleEditClick}>
        {localValue}
      </div>
    );
  }
  return null;
});

const tdStyle = {
  padding: "1px",
  border: "1px solid black",
};

const optionStyle = {
  ...tdStyle,
  padding: "2px 2px",
  width: "30px",
};

// recheck this part for tomorrow

const Row = React.memo(({ mode, columns, data, onChange }) => {
  return (
    <tr>
      {columns.map(({ path }, columnIndex) => {
        const handleChange = (value) => {
          if (onChange) {
            const changedData = { ...data, [path]: value };
            onChange(columnIndex, changedData);
          }
        };
        return (
          <td key={path} style={tdStyle}>
            <Cell mode={mode} value={data[path]} onChange={handleChange} />
          </td>
        );
      })}
    </tr>
  );
});

const tableStyle = {
  border: "1px solid black",
  borderCollapse: "collapse",
  width: "100%",
  backgroundColor: "grey",
};

const Table = React.memo(({ id, columns, data, onChange }) => {
  const [addedIndex, setAddedIndex] = React.useState();

  return (
    <>
      <h2 className="playthrough__title">Repair the AI</h2>
      <div className="center-div">
        <div className="playthrough__sentence">
          Select row, adjust inclusion of attribute, then adjust weight to
          determine how significant each attribute is to AI selection.
        </div>
      </div>

      <div>
        <table style={tableStyle}>
          <tbody>
            <tr>
              {columns.map(({ path, name }) => (
                <th key={path} style={tdStyle}>
                  {name}
                </th>
              ))}
            </tr>
            {data.map((rowData, rowIndex) => {
              const handleChange = (columnIndex, changedData) => {
                onChange?.(rowIndex, columnIndex, changedData);
              };

              return (
                <Row
                  key={rowData[id]}
                  mode={addedIndex === rowIndex ? "edit" : "read"}
                  columns={columns}
                  data={rowData}
                  onChange={handleChange}
                />
              );
            })}
          </tbody>
        </table>
        <br />
      </div>

      <button
        className="btn btn-second btn-xl text-uppercase"
        onClick={handleStart}
        key="start"
      >
        Redo With Repair
      </button>
    </>
  );
});

const appendItem = (updater, item) => {
  updater((array) => array.concat(item));
};

const replaceItem = (updater, index, item) => {
  updater((array) => array.map((value, i) => (i === index ? item : value)));
};

const deleteItem = (updater, index) => {
  updater((array) => array.filter((value, i) => i !== index));
};

const columns = [
  { path: "id", name: "Characteristic" },
  { path: "inclusion", name: "Inclusion" },
  { path: "weight", name: "Weight (1-10):" },
];

let counter = 0;

//need to add a if case to make sure number inputted remains between 1 and 10

const AIRepair = () => {
  const [data, setData] = React.useState(() => [
    { id: "Gender", inclusion: "No", weight: "X" },
    { id: "Years of Experience", inclusion: "No", weight: "X" },
    { id: "Availability", inclusion: "Yes", weight: 2 },
    { id: "Salary", inclusion: "Yes", weight: 2 },
    { id: "Age", inclusion: "No", weight: "X" },
    { id: "Appearance", inclusion: "Yes", weight: 6 },
  ]);

  const handleChange = (rowIndex, columnIndex, changedRowData) => {
    replaceItem(setData, rowIndex, changedRowData);
    const changedRowJson = JSON.stringify(changedRowData, null, 4);
    console.log("Changed row");
  };

  return (
    <div>
      <Table id="id" columns={columns} data={data} onChange={handleChange} />
    </div>
  );
};

//now only change characteristic col to not be adjustable
//Also add redo with repair button- yes
//Then add header above the table- yes

export default AIRepair;

//     const data = [
//         {Characteristic: " ", Inclusion: " ", Weight: " "},
//         {Characteristic: "Gender", Inclusion: "No",  Weight: "X"},
//         {Characteristic: "Years of Experience", Inclusion: "No", Weight: "X"},
//         {Characteristic: "Availability", Inclusion: "Yes", Weight: "2/10"},
//         {Characteristic: "Salary", Inclusion: "Yes", Weight: "2/10"},
//         {Characteristic: "Age", Inclusion: "No", Weight: "X"},
//         {Characteristic: "Appearance", Inclusion: "Yes", Weight: "6/10"},
//         ]

//     return(
//         <div className="center-div">
//             <h2 class="playthrough__title">Repair the AI</h2>
//             <div className="center-div">
//             <div className="playthrough__sentence">
//             Select row, adjust inclusion of attribute, then adjust weight to determine how significant each attribute is to AI selection.
//             </div>
//         </div>

//         <div className= "App">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Characteristic</th>
//                         <th>Inclusion</th>
//                         <th>Weight</th>
//                     </tr>
//                 </thead>
//                 {data.map((val, key) => {
//                     return (
//                     <tr key={key}>
//                         <td>{val.Characteristic}</td>
//                         <td>{val.Inclusion}</td>
//                         <td>{val.Weight}</td>
//                     </tr>
//                 )
//             })}
//             </table>
//             </div>

//             <button
//                 className="btn btn-primary text-black btn-xl text-uppercase "
//                 onClick = {handleStart}
//                 key="start"
//             >
//                 Redo With Repair
//             </button>
//       </div>
//     );
// }
