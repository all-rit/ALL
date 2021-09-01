import React, { useState, useEffect } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table
} from 'reactstrap';
import UserLabService from "../../../../services/UserLabService";
import ProgressBar from "./ProgressBar";

const StudentProgress = (props) => {

    const { student, lab } = props;
    const [ progress, setProgress ] = useState();

    useEffect(() => {
        if (student && lab){
            UserLabService.getUserLabCompletion(student.userID, lab.labID).then((data) => {
                setProgress(data);
            })
        }
    }, [student, lab])

    return(
        <>
            <td>
                <p className="bold">{student.firstname} {student.lastinitial}.</p>
                <p className="grey-text">{student.email1}</p>
            </td>
            {
                progress ?
                    <>
                        <td>{progress.quizscore}</td>
                        <td>
                            <ProgressBar
                                labID={lab.labID}
                                barData={[["About",progress.aboutcompletedtime],
                                    ["Reading",progress.readingcompletedtime],
                                    ["Exercise",progress.exercisecompletedtime],
                                    ["Reinforcement",progress.reinforcementcompletedtime],
                                    ["Quiz",progress.quizcompletedtime]]}
                                percentage={true}
                            />
                        </td>
                    </>
                    :
                    <>
                        <td>0</td>
                        <td>
                            <ProgressBar
                                labID={lab.labID}
                                barData={[["About",null],
                                    ["Reading",null],
                                    ["Exercise",null],
                                    ["Reinforcement",null],
                                    ["Quiz",null]]}
                                percentage={true}
                            />
                        </td>
                    </>
            }

        </>
    )
}
const ProgressModal = (props) => {

    const { lab, enrolledStudents, instructing } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    if (instructing){
        return (
            <>
                <button className="btn groups__labs__btn" onClick={toggle}>
                    {lab.labShortName}
                </button>
                <Modal isOpen={modal} toggle={toggle} className="add_instr_grp_modal">
                    <ModalHeader>Student Progress for {lab.labShortName} Lab</ModalHeader>
                    <ModalBody>
                        <Table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quiz Score</th>
                                <th>Progress</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                enrolledStudents.map((student, index) => (
                                    <tr key={index}>
                                        <StudentProgress student={student} lab={lab} />
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    } else {
        return (
            <div className="groups__labs__bubble">
                {lab.labShortName}
            </div>
        )
    }

}

export default ProgressModal;