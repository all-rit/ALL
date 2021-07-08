import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Certificate from '../../quiz/components/Certificate';

const InfoModal = (props) => {
    const {buttonLabel,labName,labNum,redirect,className} = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    switch(buttonLabel){
        case "More Info":
            return (
                <ul>
                    <button color="secondary" class="module__lab_button" onClick={toggle}>{buttonLabel}</button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalBody>
                                <ul>
                                    <li><h1>{labName}</h1></li>
                                    <li><h2>long description</h2></li>
                                    <li><h2>learning objectives</h2></li>
                                    <li><h3>authors</h3></li>
                                </ul>
                            </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={redirect}>Start Lab</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </ul>
                );
        case "View Certificate":
            return (
                <ul>
                    <button color="secondary" class="button" onClick={toggle}>{buttonLabel}</button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalBody>
                                <ul>
                                    <li>
                                        <Certificate quizResult="[-Insert Grade-]" lab={labNum}/>
                                    </li>
                                </ul>
                            </ModalBody>
                        <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </ul>
            ); 
        default:
            return (
                <ul>
                    <button color="secondary" class="button" onClick={toggle}>{buttonLabel}</button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader toggle={toggle}>{labName}</ModalHeader>
                            <ModalBody>
                                <ul>
                                    <li><h1>title</h1></li>
                                    <li><h2>long description</h2></li>
                                    <li><h2>learning objectives</h2></li>
                                    <li><h3>authors</h3></li>
                                </ul>
                            </ModalBody>
                        <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </ul>
            );

    }

}

export default InfoModal;