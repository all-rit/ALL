import React, { useContext, useState } from "react";
import LabButton from "../../../../all-components/LabButton";
import Lab0Context from "../../Lab0Context";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import StatusBanner from "../../../../all-components/StatusBanner";

const DesignNewCategory = () => {
  const { handleNav } = useContext(Lab0Context);
  const navigateNext = () => {
    handleNav("DesignSortNewCategory");
  };

  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const addInput = () => {
    if (arr.length < 3) {
      setArr((s) => [
        ...s,
        {
          id: s.length + 1,
          title: "",
          value: "",
        },
      ]);
    }
  };

  const handleChange = (e, index, field) => {
    setArr((s) => {
      const newArr = [...s];
      newArr[index][field] = e.target.value;
      return newArr;
    });
  };

  const deleteInput = (index) => {
    if (index !== 0) {
      setArr((s) => s.filter((_, i) => i !== index));
    }
  };

  const { setNewCategoryName } = useContext(Lab0Context);
  const onNameChange = (event) => {
    setName(event.target.value);
    setNewCategoryName(event.target.value.trim());
  };

  const { setNewLabTopics } = useContext(Lab0Context);
  const handleSubmit = () => {
    if (
      name.trim() === "" ||
      arr.some((element) => element.value.trim() === "")
    ) {
      setMessage(
        "You must enter new category name \nand leave no blank lab topics!",
      );
      setSubmitted(false);
    } else {
      setMessage(
        "Great job planning a new Category! \n Click the next button to move on.",
      );
      setSubmitted(true);
      let s = arr.map((item) => {
        return { ...item, value: item.value.trim() };
      });
      setNewLabTopics(s);
    }
  };

  return (
    <div>
      <h2 className={"tw-title tw-text-left"}>New Category</h2>
      <br />
      <div className={"tw-body-text"}>
        In the previous activity there were topics that did not fit within the
        existing categories. This means that you need to create a new category!
        In this exercise you are going to create a new category as well as up to
        three new lab topics.
        <br />
        <br />
        Once you are satisfied, you can submit your new category.
      </div>
      <br />
      <div className="tw-flex tw-items-start tw-flex-col tw-pl-12 tw-w-full">
        <h2 className={"tw-mb-4 tw-text-left"}> Create A New Category:</h2>
        <div className="tw-flex tw-flex-row tw-w-full tw-mb-4 tw-items-center">
          <h3 className={"tw-text-2xl tw-mr-4"}> Category Name:</h3>
          <input
            className=" tw-flex tw-w-[20rem] tw-rounded tw-bg-secondary-white
                        tw-text-black tw-h-[3rem] tw-border-solid tw-border-2 tw-border-darkGray tw-pl-4"
            type="text"
            placeholder={"Ex: Cybersecurity"}
            required={true}
            title={"Must enter category name"}
            id="Name"
            value={name}
            onChange={(e) => onNameChange(e)}
          />
        </div>
        <div>
          <h2 className={"tw-mb-4 tw-text-left"}> New Lab Topics:</h2>
          <div className="tw-w-full tw-flex-row tw-flex tw-items-end">
            <div>
              {arr.map((item, i) => (
                <div key={item.id} className="tw-flex tw-items-center tw-mb-4">
                  <h3 className={"tw-text-2xl tw-mr-4"}> Lab Topic:</h3>
                  <input
                    className="tw-w-[20rem] tw-rounded tw-bg-secondary-white tw-text-black tw-h-[3rem]
                                    tw-border-solid tw-border-2 tw-border-darkGray tw-mr-2 tw-pl-4"
                    onChange={(e) => handleChange(e, i, "value")}
                    placeholder="Ex: Cryptography"
                    value={item.value}
                  />
                  {i !== 0 && (
                    <IndeterminateCheckBoxIcon
                      onClick={() => deleteInput(i)}
                      className="tw-fill-brightRed tw-h-12 tw-w-12 tw-cursor-pointer"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className={"tw-mb-4 tw-ml-2"}>
              {arr.length < 3 && (
                <AddBoxIcon
                  onClick={addInput}
                  className={
                    "tw-fill-success tw-h-12 tw-w-12 tw-cursor-pointer"
                  }
                />
              )}
            </div>
          </div>
        </div>
        <div className={"tw-w-full tw-justify-center tw-items-center tw-pt-10"}>
          {message && (
            <StatusBanner
              style={`${submitted ? "tw-bg-success" : "tw-bg-error"}`}
            >
              {message}
            </StatusBanner>
          )}
          <LabButton
            onClick={submitted ? navigateNext : handleSubmit}
            label={submitted ? "Next" : "Submit New Category"}
          />
        </div>
      </div>
    </div>
  );
};

export default DesignNewCategory;
