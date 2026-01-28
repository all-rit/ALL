// Create story where user create an ill-formed request and receives
// an error response. The user is then prompted to update the call
// and will receive a success response

import React, { useState } from "react";
import {
  Circle,
  KeyboardArrowDown,
  Search,
  Settings,
  Add,
  MoreHoriz,
} from "@mui/icons-material";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
} from "reactstrap";
import PropTypes from "prop-types";

const GET = () => {
  return (
    <p
      className={
        "tw-font-bold tw-items-center tw-flex tw-text-[#60d790] tw-body-text tw-text-xs"
      }
    >
      GET
    </p>
  );
};

const POST = () => {
  return (
    <p
      className={
        "tw-font-bold tw-items-center tw-flex tw-text-[#e6c864] tw-body-text tw-text-xs"
      }
    >
      POST
    </p>
  );
};

const DELETE = () => {
  return (
    <p
      className={
        "tw-font-bold tw-items-center tw-flex tw-text-[#f68f83] tw-body-text tw-text-xs"
      }
    >
      DELETE
    </p>
  );
};

const PUT = () => {
  return (
    <p
      className={
        "tw-font-bold tw-items-center tw-flex tw-text-[#69a3f5] tw-body-text tw-text-xs"
      }
    >
      PUT
    </p>
  );
};

const ERROR_MESSAGE = `
{
  "error": {
    "code": 400,
    "message": "Required parameters are missing.",
    "details": [
      "Parameter 'query' is required.",
      "Parameter 'location' is required."
    ],
  }
}`;

const SUCCESS_MESSAGE = `
{
  "data": [
    {
      "id": "12345",
      "name": "Midnight Oil",
      "location": "Rochester, NY",
    },
    {
      "id": "67890",
      "name": "Javas Coffee",
      "location": "Rochester, NY",
    }
  ],
  "query": "coffee",
  "location": "rochester",
  "totalResults": 2
}`;

const FauxPostman = (props) => {
  const { setIncorrectRequestComplete, setCorrectRequestComplete } = props;

  const [APICall, setAPIcall] = useState("");
  const [keyOne, setKeyOne] = useState("");
  const [keyTwo, setKeyTwo] = useState("");
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");

  const [response, setResponse] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [label, setLabel] = useState(<GET />);

  const toggleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const submitCall = (e) => {
    e.preventDefault();
    if (APICall) {
      if (!keyOne || !keyTwo || !valueOne || !valueTwo) {
        try {
          setIncorrectRequestComplete(true);
          setResponse(ERROR_MESSAGE);
        } catch (error) {
          // eslint-disable-line no-unused-vars
          console.error("Something went wrong.");
        }
      } else {
        setCorrectRequestComplete(true);
        setResponse(SUCCESS_MESSAGE);
      }
    } else {
      alert("Please enter API URL");
    }
  };

  return (
    <div
      className={
        "tw-bg-[#1e1e1e] tw-text-white tw-rounded-xl tw-border-solid tw-border-[rgb(42,42,42)] tw-border-[2px] tw-h-full"
      }
    >
      {/* Header */}
      <div
        className={
          "tw-flex tw-flew-row tw-justify-between tw-items-center tw-border-b-solid tw-border-b-[#222222]"
        }
      >
        <div
          className={"tw-flex tw-flex-row tw-p-2 tw-items-center tw-gap-x-2"}
        >
          <div className={"tw-flex tw-row tw-gap-x-1"}>
            <Circle style={{ fill: "rgb(91,203,151)" }} fontSize={"20px"} />
            <Circle style={{ fill: "#FACE35" }} fontSize={"20px"} />
            <Circle style={{ fill: "rgb(230, 50, 50)" }} fontSize={"20px"} />
          </div>
          <div className={"tw-flex tw-flex-row tw-gap-x-2 tw-text-sm"}>
            <p>Home</p>
            <p>
              Workspaces
              <KeyboardArrowDown style={{ fill: "#fff" }} fontSize={"20px"} />
            </p>
            <p>Explore</p>
          </div>
        </div>
        <div
          className={
            "tw-bg-[rgb(40,40,40)] xs:tw-hidden md:tw-flex tw-flex-row tw-p-1 tw-rounded-md tw-px-6 tw-justify-center"
          }
        >
          <Search style={{ fill: "rgb(156,156,156)" }} />
          <p className={"tw-text-[rgb(156,156,156)] tw-text-xs"}>
            Search MostPan
          </p>
        </div>
        <div
          className={"tw-flex tw-flex-row tw-gap-x-3 tw-items-center tw-p-2"}
        >
          <Settings style={{ fill: "rgb(156,156,156)" }} fontSize={"20px"} />
        </div>
      </div>
      <div className={"tw-flex tw-flex-row tw-h-[39rem] tw-rounded-bl-lg"}>
        {/* Side Bar */}
        <div
          className={
            "xs:tw-hidden md:tw-flex tw-flex-col tw-w-1/4 tw-bg-[#222222] tw-border-r-solid tw-border-r-[5px] tw-border-r-[#9c9c9c] tw-p-1 tw-overflow-x-hidden"
          }
        >
          <div className={"tw-flex tw-flex-row tw-justify-between"}>
            <p className={"tw-font-bold tw-text-xs tw-p-1"}>History</p>
            <div className={"tw-flex tw-flex-row tw-gap-x-2"}>
              <div
                className={
                  "tw-bg-[#2a2a2a] tw-rounded-md tw-font-bold tw-text-xs tw-px-2 tw-flex tw-items-center"
                }
              >
                New
              </div>
              <div
                className={
                  "tw-bg-[#2a2a2a] tw-rounded-md tw-font-bold tw-text-xs tw-px-2 tw-flex tw-items-center"
                }
              >
                Import
              </div>
            </div>
          </div>
          <div className={"tw-flex tw-items-center tw-gap-x-2 tw-py-2"}>
            <KeyboardArrowDown style={{ fill: "#8d8d8d" }} fontSize={"20px"} />
            <p className={"tw-text-[#9c9c9c] tw-text-xs"}>April 10</p>
          </div>

          <div className={"tw-flex tw-flex-col tw-items-center"}>
            <div className={"tw-flex tw-items-center tw-gap-x-3"}>
              <GET />{" "}
              <p className={"tw-text-xs tw-flex tw-justify-end"}>
                localhost:5005/mockCall1
              </p>
            </div>
            <div className={"tw-flex tw-items-center tw-gap-x-3"}>
              <GET /> <p className={"tw-text-xs"}>localhost:5005/mockPost1</p>
            </div>
            <div className={"tw-flex tw-items-center tw-gap-x-3"}>
              <PUT /> <p className={"tw-text-xs"}>localhost:5005/mockCall1</p>
            </div>
            <div className={"tw-flex tw-items-center tw-gap-x-3"}>
              <PUT /> <p className={"tw-text-xs"}>localhost:5005/mockCall1</p>
            </div>
          </div>

          <div className={"tw-flex tw-items-center tw-gap-x-2 tw-py-2"}>
            <KeyboardArrowDown style={{ fill: "#8d8d8d" }} fontSize={"20px"} />
            <p className={"tw-text-[#9c9c9c] tw-text-xs"}>April 4</p>
          </div>
          <div className={"tw-flex tw-flex-col tw-items-center"}>
            <div className={"tw-flex tw-items-center tw-gap-x-3"}>
              <GET /> <p className={"tw-text-xs"}>localhost:5005/mockCall1</p>
            </div>
            <div className={"tw-flex tw-items-center tw-gap-x-3"}>
              <POST /> <p className={"tw-text-xs"}>localhost:5005/mockPost1</p>
            </div>
          </div>

          <div className={"tw-flex tw-items-center tw-gap-x-2 tw-py-2"}>
            <KeyboardArrowDown style={{ fill: "#8d8d8d" }} fontSize={"20px"} />
            <p className={"tw-text-[#9c9c9c] tw-text-xs"}>March 28</p>
          </div>

          <div className={"tw-flex tw-flex-col tw-items-center"}>
            <div className={"tw-flex tw-items-center tw-gap-x-3"}>
              <DELETE />{" "}
              <p className={"tw-text-xs"}>localhost:5005/mockCall1</p>
            </div>
            <div className={"tw-flex tw-items-center tw-gap-x-3"}>
              <POST /> <p className={"tw-text-xs"}>localhost:5005/mockPost1</p>
            </div>
            <div className={"tw-flex tw-items-center tw-gap-x-3"}>
              <DELETE />{" "}
              <p className={"tw-text-xs"}>localhost:5005/mockCall1</p>
            </div>
          </div>
        </div>
        {/* Request Section */}
        <div className={"tw-flex tw-flex-col xs:tw-w-full md:tw-w-3/4"}>
          <div
            className={
              "tw-flex tw-flex-row tw-justify-start tw-border-solid tw-border-[1px] tw-border-[#2a2a2a] tw-border-t-0 tw-border-r-0 tw-w-full tw-items-center tw-gap-x-3"
            }
          >
            <div
              className={
                "tw-flex tw-flex-row tw-items-center tw-gap-x-3 tw-border-solid tw-border-[#2a2a2a] tw-border-[1px] tw-px-3 tw-border-b-0 tw-border-t-[rgb(255,97,48)] tw-border-t-4"
              }
            >
              <GET />{" "}
              <p className={"tw-text-[#9c9c9c] tw-text-xs"}>
                localhost:5005/mockCall1
              </p>
            </div>
            <Add style={{ fill: "#9c9c9c" }} />
            <MoreHoriz style={{ fill: "#9c9c9c" }} />
          </div>
          <div className={"tw-p-3"}>
            <div
              className={"tw-flex tw-flex-row tw-items-center tw-justify-start"}
            >
              <p className={"tw-font-bold tw-text-xs"}>
                localhost:5005/mockPostCall
              </p>
            </div>
          </div>
          <div className={"tw-flex tw-flex-row tw-gap-x-3 tw-px-3"}>
            <Dropdown
              isOpen={isDropdownOpen}
              toggle={toggleDropdownOpen}
              className={"tw-bg-[#222222]"}
            >
              <DropdownToggle
                className={
                  "tw-bg-[#222222] tw-flex tw-items-center tw-gap-x-3 tw-border tw-border-[#2c2c2c]"
                }
                caret
              >
                {label}
              </DropdownToggle>
              <DropdownMenu className={"tw-bg-[#222222]"}>
                <DropdownItem onClick={() => setLabel(<GET />)}>
                  <GET />
                </DropdownItem>
                <DropdownItem onClick={() => setLabel(<POST />)}>
                  <POST />
                </DropdownItem>
                <DropdownItem onClick={() => setLabel(<PUT />)}>
                  <PUT />
                </DropdownItem>
                <DropdownItem onClick={() => setLabel(<DELETE />)}>
                  <DELETE />
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Input
              className={
                "tw-bg-[#222222] tw-border-[#2c2c2c] tw-text-[#9c9c9c] placeholder:tw-text-[#3c3c3c]"
              }
              placeholder={"Enter API Call Here"}
              onChange={(e) => setAPIcall(e.target.value)}
            ></Input>
            <button
              onClick={submitCall}
              className={
                "tw-bg-[#0d70ea] md:tw-gap-x-8 tw-px-3 tw-py-1 tw-border-0 tw-rounded-md tw-text-white tw-font-bold tw-flex tw-items-center tw-justify-between"
              }
            >
              Send <KeyboardArrowDown />
            </button>
          </div>
          <div className={"tw-flex tw-gap-x-6 tw-p-3"}>
            <button
              className={
                "tw-bg-[#1e1e1e] tw-text-[#9c9c9c] tw-text-xs tw-border-solid tw-border-2 tw-border-b-[rgb(255,97,48)] tw-border-t-0 tw-border-x-0"
              }
            >
              Params
            </button>
          </div>
          <div className={"tw-px-3"}>
            <p
              className={
                "tw-font-bold tw-text-[#9c9c9c] tw-text-left tw-text-xs tw-py-3"
              }
            >
              Query Params
            </p>
            <table className={"tw-w-full"}>
              <thead>
                <tr>
                  <th
                    className={
                      "tw-text-[#9c9c9c] tw-text-xs tw-font-bold tw-border-[#2c2c2c] tw-border-solid tw-p-2"
                    }
                  >
                    Key
                  </th>
                  <th
                    className={
                      "tw-text-[#9c9c9c] tw-text-xs tw-font-bold tw-border-[#2a2a2a] tw-border-solid tw-p-2"
                    }
                  >
                    Value
                  </th>
                  <th
                    className={
                      "tw-text-[#9c9c9c] tw-text-xs tw-font-bold tw-border-[#2c2c2c] tw-border-solid tw-p-2"
                    }
                  >
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"tw-border-[#2c2c2c] tw-border-solid"}>
                    <Input
                      className={
                        "tw-w-full tw-bg-[#1e1e1e] tw-border-0 tw-text-[#9c9c9c] placeholder:tw-text-[#3c3c3c]"
                      }
                      placeholder={"Enter Key Input Here"}
                      style={{ color: "#fff" }}
                      onChange={(e) => setKeyOne(e.target.value)}
                      value={keyOne}
                    />
                  </td>
                  <td className={"tw-border-[#2c2c2c] tw-border-solid"}>
                    <Input
                      className={
                        "tw-w-full tw-bg-[#1e1e1e] tw-border-0 tw-text-[#9c9c9c] placeholder:tw-text-[#3c3c3c]"
                      }
                      placeholder={"Enter Value Input Here"}
                      onChange={(e) => setValueOne(e.target.value)}
                      value={valueOne}
                    />
                  </td>
                  <td className={"tw-border-[#2c2c2c] tw-border-solid"}></td>
                </tr>
                <tr>
                  <td className={"tw-border-[#2c2c2c] tw-border-solid"}>
                    <Input
                      className={
                        "tw-w-full tw-bg-[#1e1e1e] tw-border-0 tw-text-[#9c9c9c] placeholder:tw-text-[#3c3c3c]"
                      }
                      placeholder={"Enter Key Input Here"}
                      style={{ color: "#fff" }}
                      onChange={(e) => setKeyTwo(e.target.value)}
                      value={keyTwo}
                    />
                  </td>
                  <td className={"tw-border-[#2c2c2c] tw-border-solid"}>
                    <Input
                      className={
                        "tw-w-full tw-bg-[#1e1e1e] tw-border-0 tw-text-[#9c9c9c] placeholder:tw-text-[#3c3c3c]"
                      }
                      placeholder={"Enter Value Input Here"}
                      onChange={(e) => setValueTwo(e.target.value)}
                      value={valueTwo}
                    />
                  </td>
                  <td className={"tw-border-[#2c2c2c] tw-border-solid"}></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Response */}
          <div
            className={
              "tw-relative tw-h-full tw-w-full tw-border-solid tw-border-[1px] tw-mt-3 tw-border-[#2a2a2a] tw-border-x-0 tw-border-b-0 tw-flex tw-flex-col tw-overflow-y-scroll fauxPostmanScrollbar"
            }
          >
            <p
              className={
                "tw-absolute tw-top-0 tw-left-1 tw-text-[#3c3c3c] tw-text-xs"
              }
            >
              Response
            </p>
            <div className={"tw-text-left tw-py-6 tw-px-2"}>
              <pre
                className={
                  "code_editor__code tw-bg-transparent tw-text-[0.65rem]"
                }
              >
                {response}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FauxPostman.propTypes = {
  correctRequestComplete: PropTypes.bool,
  incorrectRequestComplete: PropTypes.bool,
  setIncorrectRequestComplete: PropTypes.func,
  setCorrectRequestComplete: PropTypes.func,
};

export default FauxPostman;
