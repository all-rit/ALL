/* eslint-disable react/prop-types */
import React, { useState,useEffect } from "react";
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
    console.log(counter)
   
  };

  const saveData = () => {
    console.log(counter);
    readMoreCount();

    toggle();
  };


  useEffect(() => {
    ImagineService.readMoreCount(userID, counter);
  }, [counter, userID]);


  return (
    <>
      <button className="btn-second btn btn-md tw-m-3" onClick={()=> saveData()}>
        Read more
      </button>
      <Modal isOpen={modal} toggle={toggle}>
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
                <div key={index}>
                    <h1 >{data.name}</h1>
                    <iframe
                      src={data.link}
                      sandbox="allow-orientation-lock"
                      title={data.name}
                      name="link"
                      style={{ height: "80vh", width: "100%" }}
                    ></iframe>
                  </div>
              );
            })}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-primary">
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default LearnMoreButton;
