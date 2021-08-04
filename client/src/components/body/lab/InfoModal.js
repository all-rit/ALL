import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Certificate from '../../quiz/components/Certificate';

const InfoModal = (props) => {
    const {buttonLabel,labName,labNum,redirect,className,labProgress} = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    switch(buttonLabel){
        case "More Info":
            return (
                <ul>
                    <button class="module__lab_button button module__lab_button Button btn btn-second" onClick={toggle}>{buttonLabel}</button>
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
                            <Button className="btn-primary" onClick={redirect}>Launch Lab</Button>{' '}
                            <Button className="btn-second" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </ul>
                );
        case "View Certificate":
            return (
                <ul>
                    <button class="module__lab_button btn-primary Button btn" onClick={toggle}>{buttonLabel}</button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalBody>
                                {labProgress ===null || labProgress===undefined ?
                                <ul>
                                    <Certificate quizResult="0" lab={labNum}/>
                                </ul>
                                :<ul>
                                    <Certificate quizResult={labProgress.quizscore} lab={labNum}/>
                                </ul>  
                                }
                            </ModalBody>
                        <ModalFooter>
                        <Button color="secondary" className="btn-second" onClick={toggle}>Cancel</Button>
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