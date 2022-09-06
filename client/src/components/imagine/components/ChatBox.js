/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, {useEffect, useState} from 'react';
import {Button, CustomInput} from 'reactstrap';
import {Form, FormGroup} from 'reactstrap';

const ChatBox = () => {
  const [chatText, setChatText] = useState('');
  const [messages, setMessages] = useState([]);

  const fakeUserAMessages = [
    'This waiting sucks!',
    'Why can\'t I get into the game?!',
    'This loading is taking forever',
  ];

  const fakeUserBMessages = [
    'Worst...wait...ever',
    'If this waiting continues I may leave soon...',
    'Can this be any slower?',
    'Please load faster...',
  ];

  useEffect(() => {
    if (messages?.length === 0) {
      const randomAMessage =
        fakeUserAMessages[Math.floor(Math.random() * fakeUserAMessages.length)];
      const randomBMessage =
        fakeUserBMessages[Math.floor(Math.random() * fakeUserBMessages.length)];
      const messArr = [
        'PikachuRising: ' + randomAMessage,
        'Your Mama: ' + randomBMessage,
      ];
      setMessages(messArr);
    }
  });

  useEffect(() => {}, [chatText]);

  // Generates the response to the input user, so has to agree/disagree
  const fakeUserCMessages = [
    'Yeah, it\'s kind of whack',
    'Hopefully, it\'ll let us in soon...',
  ];

  // randomly sorts thru fake user responses

  const randomCMessages =
    fakeUserCMessages[Math.floor(Math.random() * fakeUserCMessages.length)];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    console.log(formData.userMessage);
    setChatText(formData.userMessage);
    if (formData.userMessage) {
      const copy = [...messages];
      copy.push('Default User: ' + formData.userMessage);
      setMessages(copy);
      setChatText('');
    }
  };

  return (
    <>
      <div>
        <Form className="tw-bg-white">
          <FormGroup className="tw-bg-white">
            <CustomInput
              className="tw-bg-white"
              type="select"
              id="Lobby"
              multiple
              disabled
            >
              {messages.map((message) => {
                return (
                  <option className="tw-text-xl tw-text-dark">{message}</option>
                );
              })}
            </CustomInput>
          </FormGroup>
        </Form>
        <Form inline onSubmit={handleSubmit}>
          <FormGroup className="tw-max-w-xs tw-w-full ">
            <CustomInput
              placeholder="Enter Chat..."
              className="tw-w-full tw-h-9"
              type="text"
              id="userMessage"
              name="userMessage"
            />
          </FormGroup>
          <Button className="btn btn-primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ChatBox;
