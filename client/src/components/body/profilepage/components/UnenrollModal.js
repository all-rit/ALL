import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const UnenrollModal = (props) => {
    const {buttonLabel,className} = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    switch(buttonLabel){
        case "Unenroll":
            return (
                <ul>
                    <button class="groups__button button Button btn btn-second" onClick={toggle}>{buttonLabel}</button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalBody>
                                <ul>
                                    <li><h1>Unenroll Prompt</h1></li>
                                    <li><h2>Are you sure you want to unenroll?</h2></li>
                                </ul>
                            </ModalBody>
                        <ModalFooter>
                            <Button className="btn-primary" onClick={toggle}>Unenroll</Button>{' '}
                            <Button className="btn-second" onClick={toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </ul>
                );
        default:
            return (
                <ul>
                    <button class="module__lab_button button module__lab_button Button btn btn-second" onClick={toggle}>{buttonLabel}</button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalBody>
                                <ul>
                                    <li><h1>Unenroll Prompt</h1></li>
                                    <li><h2>Are you sure you want to unenroll?</h2></li>
                                </ul>
                            </ModalBody>
                        <ModalFooter>
                            <Button className="btn-primary" onClick={toggle}>Unenroll</Button>{' '}
                            <Button className="btn-second" onClick={toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </ul>
            );
    }

}

export default UnenrollModal;