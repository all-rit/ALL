import React, {Component} from "react";
import { navigate } from "@reach/router";
import { createText } from "@reach/router";
import { Form,  Input, ListGroup} from "reactstrap";
import { useState } from "react";

import {InputGroup} from "reactstrap";
import {Button} from "reactstrap";
// import React, { useState } from 'react';

const MatchLobby = (props) => {

    const handleNext = () => {
        navigate("/Imagine/TicTacToe");
    }

    const [chatText, setChatText] = useState("");
    const [messages, setMessages] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(chatText);
        const date= {chatText}
        if(chatText){
            setMessages((ls)=>[...ls, date])
            setChatText("");
        }
        // messages.push(chatText);
        // setMessages([...messages, chatText]);
    }

    // const setChatText = () => {
    //     navigate("");
    // }


    //class doesn't do anything yet, may not use later
    class TextAppearanceInBox extends Component {
        render() {
            const { visible, inputRevealed } = this.props;
            const message = inputRevealed ? chatText:chatText;
    
            if (!visible) return null;
    
            return message;
        }
    }

    // ReactDOM.render(element, document.getElementById('root'));

    // const ChatBox = (props) => {
    //     const handleNext = () => {
    //         navigate("");
    //     }
    // }
    return (

        // <div className="mb-3">
        //     <InputGroup.Prepend>
        //     <Button variant="outline-primary">click me</Button>
        //     </InputGroup.Prepend>
        
        // </InputGroup>
        //     </div>


        <div className="container bottomSpace" >
            <div>
                MatchLobby
            </div>
            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick={handleNext}
                key="start"
            >
                Continue
            </button>

            <ul>
                {messages.forEach(msg=> <li>{msg}</li>)}
            </ul>


            <div className='chatbox' extends Component>
                <div>
                    ChatBox
                </div>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type= "text"
                        placeholder="Enter Chat..."
                        name= "chatbox"
                        id= "chatbox"
                        onChange={e => setChatText(e.target.value)}
                        onClick={e => setChatText(e.target.value)}
                        // {...TextAppearanceInBox}

                    />
                    <Input
                        type= "submit"
                        name= "submit"
                        id= "submit"
                        value= "Submit" 
                    />
                    {/* //have another box, that takes the input, then from chatbox onclick
                    //input the text into the new box by declaring new variables. */}
                </Form> 
                
                <div> Previous messages:
                
                {
                    messages.map((a)=> <div>
                        <li>{a.chatText}</li>
                        </div>)
                }
             
                </div>
                

            </div>

            

            
        </div>

        

        
    )

    


}

export default MatchLobby;