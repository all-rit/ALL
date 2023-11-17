/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import ImagineService from "../../../services/ImagineService";

const LearnMoreButton = (props) => {
  const { data, userID } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [counter, setCounter] = useState(0);

  const readMoreCount = () => {
    setModal(true);
    setCounter(1);
  };


  const saveData = () => {
    console.log(counter);
    ImagineService.readMoreCount(userID, counter);
    console.log(counter);
    toggle();
  };

  


  return (
    <>
      <button className="btn-second btn btn-md tw-m-3" onClick={readMoreCount}>
        Read more 
      </button>
      <Modal 
      isOpen={modal} toggle={toggle}
      scrollable={true}
      >
        <div className="modal-content__header">
          <h1>For more information, please visit the following websites: </h1>
        </div>

        <ModalBody>
          <ul className="module_more_info">
            <li className="p-text-modal">
              Learn more about Accessibility for Color Blindness:
            </li>
          </ul>
                <div>
              {data.map((data, index) => {
                return (
                  <>
                  <div key={index}>
                    <h1 >{data.name}</h1>
                    <iframe src={data.link} title={data.name}  name="link" style={{ height: '80vh', width: '100%'}}></iframe>
                  </div>
                  
                  </>
                
                );
              })}
               </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-primary" onClick={saveData}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default LearnMoreButton;
