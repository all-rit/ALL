/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
  }

  getMessage(content) {
    switch (content) {
      case "Social Security Number":
        return (
          <p className="message">
            Someone&lsquo;s social security number was stolen during the
            security breach. As a result of the breach, an identity thief was
            able to steal an individual&lsquo;s identity. This autonomous system
            decision-mistake caused a case of indentity theft.
          </p>
        );
      case "Home Address":
        return (
          <p className="message">
            Someone&lsquo;s home address was stolen during the security breach.
            As a result of the breach, an identity thief was able to change the
            individual&lsquo;s mailing address and reroute their mail to another
            address. This autonomous system decision-mistake caused a case of
            address fraud.
          </p>
        );
      case "Mother Maiden Name":
        return (
          <p className="message">
            Someone&lsquo;s mother&lsquo;s maiden was stolen during the security
            breach. As a result of the breach, an identity thief was able to
            answer the individual&lsquo;s security questions for all their
            accounts. This autonomous system decision-mistake caused a case of
            hacking and identity fraud.
          </p>
        );
      case "Full Name":
        return (
          <p className="message">
            Someone&lsquo;s full was stolen during the security breach. As a
            result of the breach, an identity thief was able to sign up and
            create fake accounts under the individual&lsquo;s name. This
            autonomous system decision-mistake caused a case of identity fraud.
          </p>
        );
      case "Email Address":
        return (
          <p className="message">
            Someone&lsquo;s email address was stolen during the security breach.
            As a result of the breach, an identity thief was able to send the
            individual spam emails and sign up for accounts. This autonomous
            system decision-mistake caused a case of spam and phishing.
          </p>
        );
      case "Protected":
        return (
          <p className="message">
            All files were correctly protected during the security breach. +5
            bonus pts
          </p>
        );
      default:
        return null;
    }
  }

  render() {
    let data = this.props;
    return this.getMessage(data);
  }
}

export default Message;
