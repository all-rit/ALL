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

    const mystyle = {
        borderradius: "4px",
        fontsize: "16px",
        padding: "5px",
        border: "solid-black",
        boxsizing: "border-box",
        display: "block"



    }

    //fake user A already has message under prev messages,
    //after real user inputs, 
    //then after a certain amt of time, have next message autogenerate
    //after certain amt of time.

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

  
    return (

       


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
                
                
                <div className= 'prevMess' extends Component> 
                Previous messages:
                

               
                    
                <ul style ={{backgroundColor: "grey"}}>
             
             {/* //use css styling to have input in box */}
                
                {/* <li>SuperSanta: This is unfair!</li> */}
                {
                  
           
                    messages.map((a)=> <div style={mystyle}>
                        
                        <li>{a.chatText}</li>
                        </div>)

                }
               

                </ul>
          
             
                </div>
                
           
            </div>
 
    
            

            
        </div>

    

        
    )

    


}



export default MatchLobby;