import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as appActions } from "../../reducers/lab1/AppReducer";
import { actions as mainActions } from "../../reducers/MainReducer";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...appActions, ...mainActions }, dispatch),
  };
};

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "name: " + name + ", email: " + email + ", message: " + message,
    );
  };

  return (
    <>
      <div className="tw-object-right tw-max-w-80 tw-justify-end tw-py-10">
        <h1 className="tw-flex tw-justify-right tw-text-3xl tw-font-bold">
          Reach out to us:
        </h1>
        <text className=" tw-flex tw-text-left tw-pb-6">
          Aenean a venenatis metus, ut varius quam. Venenatis metus.
        </text>
        <div className="tw-space-y-6">
          <input
            className=" tw-flex tw-w-full tw-rounded tw-bg-labGray tw-border-white tw-border tw-text-white tw-p-1"
            type="text"
            placeholder={"Name"}
            required={true}
            title={"Must enter name"}
            id="Name"
            value={name}
            onChange={onNameChange.bind(this)}
          />
          <input
            className=" tw-flex tw-w-full tw-rounded tw-bg-labGray tw-border-white tw-border tw-text-white tw-p-1"
            type="email"
            placeholder={"Email"}
            required={true}
            title={"Must enter email"}
            id="Email"
            value={email}
            onChange={onEmailChange.bind(this)}
          />
          <input
            className=" tw-flex tw-w-full tw-rounded tw-bg-labGray tw-border-white tw-border tw-text-white tw-p-1 tw-pb-32"
            type="text"
            placeholder={"Message"}
            required={true}
            title={"Must enter message"}
            id="Message"
            value={message}
            onChange={onMessageChange.bind(this)}
          />
          <button
            className=" tw-flex tw-w-full tw-rounded tw-bg-white tw-border-white
                    tw-border tw-text-black tw-p-1 tw-justify-center tw-font-semibold"
            type="button"
            title={"Send message"}
            onClick={handleSubmit.bind(this)}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
