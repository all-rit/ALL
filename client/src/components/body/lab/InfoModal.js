import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserCertificate from '../profilepage/components/UserCertificate';
import XMLParser from 'react-xml-parser';

const InfoModal = (props) => {
    const {buttonLabel,labName,labNum,redirect,className,labProgress,fullDescription,learningObjectives,authors} = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const parsedLearningObj = [];
    if(learningObjectives!== null && learningObjectives !==undefined){
        const xml = new XMLParser().parseFromString(learningObjectives);
        xml.children.forEach((objective)=>{
            const obj = objective.getElementsByTagName('LearningObjective')[0].value;
            parsedLearningObj.push(obj)
        })
    }
    switch(buttonLabel){
        case "More Info":
            return (
                <ul>
                    <button class="btn-second btn btn-md" onClick={toggle}>{buttonLabel}</button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                    <div className="modal-content__header">

<h1>{labName}</h1>
                    </div>
                            <ModalBody>
                                <ul class="module__more_info">
                                    <li className="p-text-modal">{fullDescription}</li>
                                    <li className="p-text-modal">Participants will take part in an exercise that emulates this environment, and they will learn how to implement code in order that information is also presented visually.</li>
                                    <li className="p-text-modal">Upon completion of the lab, participants will have achieved the following learning objectives:</li>
                                    <ul>
                                        {parsedLearningObj.map((learningObjective)=>(
                                            <li className="ml-8 list-style-disc">{learningObjective}</li>
                                        ))}
                                    </ul>
                                    <li className="p-text-modal">Authors:</li>
                                    <li className="p-text-modal">{authors}</li>
                                </ul>
                            </ModalBody>
                        <ModalFooter>
                            <Button className="btn-primary" onClick={redirect}>Launch Lab</Button>{' '}
                            <Button className="btn-second" onClick={toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </ul>
                );
        case "View Certificate":
            return (
                <ul>
                    <button class="btn-primary btn btn-md module__certificate" onClick={toggle}>{buttonLabel}</button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalBody>
                                {labProgress ===null || labProgress===undefined ?
                                <ul>
                                    <UserCertificate quizScore="0" lab={labNum}/>
                                </ul>
                                :
                                <ul>
                                    <UserCertificate labName={labName} quizScore={labProgress.quizscore} labCompletionTime={labProgress.labcompletiontime} lab={labNum} />
                                </ul>  
                                }
                            </ModalBody>
                        <ModalFooter>
                        <Button color="secondary" className="btn-second" onClick={toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </ul>
            ); 
        default:
            return (
                <ul>
                    <button color="secondary" class="btn-secondary btn btn-md" onClick={toggle}>{buttonLabel}</button>
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
                        <Button color="secondary" onClick={toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </ul>
            );

    }

}

export default InfoModal;