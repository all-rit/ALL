import React, { useContext, useState } from "react";
import LabButton from "../../../all-components/LabButton";
import Lab0Context from "../Lab0Context";

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
    setNewCategoryName(event.target.value);
  };

  const { setNewLabTopics } = useContext(Lab0Context);
  const handleSubmit = () => {
    if (name === "" || arr[0].value === "") {
      setMessage(
        "You must enter new category name \nand at least one lab topic!",
      );
      setSubmitted(false);
    } else {
      setMessage(
        "Great job planning a new Category! \n Click the next button to move on.",
      );
      setSubmitted(true);
      setNewLabTopics(arr);
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
            onChange={onNameChange.bind(this)}
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
                    // <button onClick={() => deleteInput(i)}
                    //         className="tw-ml-2 tw-text-red-500">✖</button>
                    <div
                      onClick={() => deleteInput(i)}
                      className={"tw-w-10 tw-cursor-pointer"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        {/*// <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}
                        <a className="tw-fill-brightRed tw-w-10 tw-h-10">
                          <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM152 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                        </a>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={"tw-mb-4 tw-ml-2"}>
              {arr.length < 3 && (
                <div onClick={addInput} className={"tw-w-10 tw-cursor-pointer"}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    {/* --!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--*/}
                    <a className="tw-fill-lightGreen tw-w-10 tw-h-10">
                      <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                    </a>
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={"tw-w-full tw-justify-center tw-items-center tw-pt-10"}>
          {message && (
            <p
              className={`tw-text-2xl ${submitted ? "tw-text-lightGreen" : "tw-text-brightRed"}  tw-whitespace-pre-line`}
            >
              {message}
            </p>
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
