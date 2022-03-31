import React, {Component} from 'react';

class Message extends Component {

    getMessage(content){
        switch(content){
            case 'Social Security Number':
                return "Someone’s social security number was stolen during the security breach. As a result of the breach, an identity thief was able to steal an individual's identity. This autonomous system decision-mistake caused a case of indentity theft.";
            case 'Home Address':
                return "Someone’s home address was stolen during the security breach. As a result of the breach, an identity thief was able to change the individual’s mailing address and reroute their mail to another address. This autonomous system decision-mistake caused a case of address fraud.";
            case 'Mother Maiden Name':
                return "Someone’s mother's maiden was stolen during the security breach. As a result of the breach, an identity thief was able to answer the individual's security questions for all their accounts. This autonomous system decision-mistake caused a case of hacking and identity fraud.";
            case 'Full Name':
                return "Someone’s full was stolen during the security breach. As a result of the breach, an identity thief was able to sign up and create fake accounts under the individual's name. This autonomous system decision-mistake caused a case of identity fraud.";
            case 'Email Address':
                return "Someone’s email address was stolen during the security breach. As a result of the breach, an identity thief was able to send the individual spam emails and sign up for accounts. This autonomous system decision-mistake caused a case of spam and phishing.";
            default:
                return null;
        }
    }

    render(){
        return(
            this.getMessage()
        )
    }
}

export default Message;