import React from "react";
import {
  Circle,
  KeyboardArrowDown,
  Search,
  Settings,
  Add,
  MoreHoriz,
  SaveOutlined,
} from "@mui/icons-material";
import { Input } from "reactstrap";

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

const FauxPostman = () => {
  return (
    <div
      className={
        "tw-bg-[#1e1e1e] tw-text-white tw-rounded-xl tw-border-solid tw-border-[rgb(42,42,42)] tw-border-[2px] tw-min-h-[30rem]"
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
              Workspaces{" "}
              <KeyboardArrowDown style={{ fill: "#fff" }} fontSize={"20px"} />
            </p>
            <p>Explore</p>
          </div>
        </div>
        <div
          className={
            "tw-bg-[rgb(40,40,40)] tw-flex tw-flex-row tw-p-1 tw-rounded-md tw-px-6 tw-justify-center"
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
          <div
            className={
              "tw-bg-[rgb(40,40,40)] tw-flex tw-flex-row tw-p-2 tw-rounded-md tw-justify-center"
            }
          >
            <p className={"tw-text-[rgb(156,156,156)] tw-text-xs tw-font-bold"}>
              Sign In
            </p>
          </div>
          <div
            className={
              "tw-bg-[rgb(255,97,48)] tw-flex tw-flex-row tw-p-2 tw-rounded-md tw-justify-center"
            }
          >
            <p className={"tw-text-white tw-text-xs tw-font-bold"}>
              Create Account
            </p>
          </div>
        </div>
      </div>
      <div className={"tw-flex tw-flex-row"}>
        {/* Side Bar */}
        <div
          className={
            "tw-flex tw-flex-col tw-w-1/4 tw-min-h-full tw-bg-[#222222] tw-border-r-solid tw-border-r-[5px] tw-border-r-[#9c9c9c] tw-p-1"
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
              <GET /> <p className={"tw-text-xs"}>localhost:5005/mockCall1</p>
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
        <div className={"tw-flex tw-flex-col tw-w-3/4"}>
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
              className={
                "tw-flex tw-flex-row tw-items-center tw-justify-between"
              }
            >
              <p className={"tw-font-bold tw-text-xs"}>
                localhost:5005/mockPostCall
              </p>
              <div className={"tw-flex tw-items-center tw-gap-x-3"}>
                <SaveOutlined style={{ fill: "#9c9c9c" }} />
                <p className={"tw-text-[#9c9c9c] tw-text-xs"}>Save</p>
              </div>
            </div>
          </div>
          <div className={"tw-flex tw-flex-row tw-gap-x-3 tw-px-3"}>
            <Input
              style={{ backgroundColor: "#222222", borderColor: "#9c9c9c" }}
            />
            <button
              className={
                "tw-bg-[#0d70ea] tw-p-3 tw-border-0 tw-rounded-md tw-text-white tw-font-bold tw-flex tw-items-center tw-justify-between tw-w-1/6"
              }
            >
              {" "}
              Send <KeyboardArrowDown />
            </button>
          </div>
          <div className={"tw-flex tw-gap-x-6 tw-p-3"}>
            <button
              className={
                "tw-bg-[#1e1e1e] tw-border-0 tw-text-[#9c9c9c] tw-text-xs focus:tw-border-solid focus:tw-border-2 focus:tw-border-b-[rgb(255,97,48)] focus:tw-border-t-0 focus:tw-border-x-0"
              }
            >
              {" "}
              Params
            </button>
            <button
              className={
                "tw-bg-[#1e1e1e] tw-border-0 tw-text-[#9c9c9c] tw-text-xs focus:tw-border-solid focus:tw-border-2 focus:tw-border-b-[rgb(255,97,48)] focus:tw-border-t-0 focus:tw-border-x-0"
              }
            >
              {" "}
              Authorization
            </button>
            <button
              className={
                "tw-bg-[#1e1e1e] tw-border-0 tw-text-[#9c9c9c] tw-text-xs focus:tw-border-solid focus:tw-border-2 focus:tw-border-b-[rgb(255,97,48)] focus:tw-border-t-0 focus:tw-border-x-0"
              }
            >
              {" "}
              Headers
            </button>
            <button
              className={
                "tw-bg-[#1e1e1e] tw-border-0 tw-text-[#9c9c9c] tw-text-xs focus:tw-border-solid focus:tw-border-2 focus:tw-border-b-[rgb(255,97,48)] focus:tw-border-t-0 focus:tw-border-x-0"
              }
            >
              {" "}
              Body
            </button>
            <button
              className={
                "tw-bg-[#1e1e1e] tw-border-0 tw-text-[#9c9c9c] tw-text-xs focus:tw-border-solid focus:tw-border-2 focus:tw-border-b-[rgb(255,97,48)] focus:tw-border-t-0 focus:tw-border-x-0"
              }
            >
              {" "}
              Settings
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
            <table className={"tw-w-full tw-border-[#3c3c3c] tw-border-solid"}>
              <thead>
                <tr>
                  <th
                    className={
                      "tw-text-[#9c9c9c] tw-text-xs tw-font-bold tw-border-[#3c3c3c] tw-border-solid tw-p-2"
                    }
                  >
                    Key
                  </th>
                  <th
                    className={
                      "tw-text-[#9c9c9c] tw-text-xs tw-font-bold tw-border-[#3c3c3c] tw-border-solid tw-p-2"
                    }
                  >
                    Value
                  </th>
                  <th
                    className={
                      "tw-text-[#9c9c9c] tw-text-xs tw-font-bold tw-border-[#3c3c3c] tw-border-solid tw-p-2"
                    }
                  >
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"tw-border-[#3c3c3c] tw-border-solid"}>
                    <Input
                      className={
                        "tw-w-full tw-bg-[#1e1e1e] tw-border-0 tw-text-[#9c9c9c]"
                      }
                      placeholder={"Enter Key Input Here"}
                      style={{ color: "#fff" }}
                    />
                  </td>
                  <td className={"tw-border-[#3c3c3c] tw-border-solid"}>
                    <Input
                      className={
                        "tw-w-full tw-bg-[#1e1e1e] tw-border-0 tw-text-[#9c9c9c]"
                      }
                      placeholder={"Enter Value Input Here"}
                    />
                  </td>
                  <td className={"tw-border-[#3c3c3c] tw-border-solid"}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FauxPostman;
