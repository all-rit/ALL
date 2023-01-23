/* eslint-disable react/prop-types */
import React, {Component} from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
    }

    getMessage(content) {
        switch (content) {
            case 'SSN':
                return (
                    <p className='message'>
                        {"Someone’s social security number was stolen during the security breach. As a result of the breach, an identity thief was able to steal an individual's identity. This autonomous system decision-mistake caused a case of indentity theft."}
                    </p>
                );
            case 'Home Address':
                return (
                    <p className='message'>
                        {"Someone’s home address was stolen during the security breach. As a result of the breach, an identity thief was able to change the individual’s mailing address and reroute their mail to another address. This autonomous system decision-mistake caused a case of address fraud."}
                    </p>
                );
            case 'Mother Maiden Name':
                return (
                    <p className='message'>
                        {"Someone’s mother's maiden was stolen during the security breach. As a result of the breach, an identity thief was able to answer the individual's security questions for all their accounts. This autonomous system decision-mistake caused a case of hacking and identity fraud."}
                    </p>
                );
            case 'Full Name':
                return (
                    <p className='message'>
                        {"Someone’s full was stolen during the security breach. As a result of the breach, an identity thief was able to sign up and create fake accounts under the individual's name. This autonomous system decision-mistake caused a case of identity fraud."}
                    </p>
                );
            case 'Email Address':
                return (
                    <p className='message'>
                        {"Someone’s email address was stolen during the security breach. As a result of the breach, an identity thief was able to send the individual spam emails and sign up for accounts. This autonomous system decision-mistake caused a case of spam and phishing."}
                    </p>
                );
            case 'Protected':
                return (
                    <p className='message'>
                        {"All files were correctly protected during the security breach. +5 bonus pts"}
                    </p>
                )
            default:
                return null;
        }
    }

    render() {
        let {data} = this.props;
        return (
            this.getMessage(data)
        )
    }
}

export default Message;