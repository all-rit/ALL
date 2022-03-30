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
        border: "black",
        boxsizing: "border-box",
        display: "list-item",
        textAlign: 'left',
    }


    // created different names so there are no repeated names
    var names1 = [
        'PikachuRising',
        'Your Mama',
        'Bruce Wayne',
        'Baby Yoda',
        'GroguForce'
    ];

    var names2 = [
        'MilesMorales',
        'Ultimate Spider-Man',
        "Tobey's Spider-Man is the Best",
        'Secret Santa',
        'Artemis'  
    ];

    var names3 = [
        'Avenger',
        'Electron',
        'Dr. Squid',
        'Martian_Manhunter',
        'Gauntlet',
        'Hurricane'
    ];



    //gives general complaints and will now have no repeated comments
    var fakeUserAMessages = [
        'This waiting sucks!',
        "Why can't I get into the game?!",
        "This loading is taking forever"
        
    ];

    var fakeUserBMessages = [
        "Worst...wait...ever",
        "If this waiting continues I may leave soon...",
        "Can this be any slower?",
        "Please load faster..."
    ];



    //Generates the response to the input user, so has to agree/disagree
    var fakeUserCMessages = [
        "Yeah, it's kind of whack",
        "Hopefully, it'll let us in soon..."
    ];


    //randomly sorts through names of fake users
    const randomName = names1[Math.floor(Math.random() * names1.length)] ;
    const randomName2 = names2[Math.floor(Math.random() * names2.length)];
    const randomName3 = names3[Math.floor(Math.random() * names3.length)];

    //randomly sorts thru fake user responses
    const randomAMessages = fakeUserAMessages[Math.floor(Math.random() * fakeUserAMessages.length)];
    const randomBMessages = fakeUserBMessages[Math.floor(Math.random() * fakeUserBMessages.length)];
    const randomCMessages = fakeUserCMessages[Math.floor(Math.random() * fakeUserCMessages.length)];


   
    var RandomPersonA = randomName + ": " + randomAMessages;
    var RandomPersonB = randomName2 + ": " + randomBMessages;
    var RandomPersonC = randomName3 + ": " + randomCMessages;

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


            <div className='prevMess'> 
                  
                <ul style ={{backgroundColor: "grey", color: "white", textAlign: "left"}}>
                <li>{RandomPersonA}</li>
                <li>{RandomPersonB}</li>
             
             {/* //use css styling to have input in box */}   
                {
                    messages.map((a)=> <div style={mystyle}>
                        
                        {/* //input user is whatever name the user assigns themselves earlier on */}
                        <li>{"Input User: " + a.chatText}</li>

                        <li>{RandomPersonC}</li>
                        
                        </div>)    
                }
                </ul>


            <div className='chatbox'>
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
                    <Button
                    type= "submit"
                    name= "submit"
                    id= "submit"
                    value= "Submit"
                    >
                    Submit
                    </Button>
                    {/* <Input
                        type= "submit"
                        name= "submit"
                        id= "submit"
                        value= "Submit" 
                    /> */}
                    {/* //have another box, that takes the input, then from chatbox onclick
                    //input the text into the new box by declaring new variables. */}
                </Form> 
             
                </div>
            
            </div>
            
        </div>
    )

}



export default MatchLobby;