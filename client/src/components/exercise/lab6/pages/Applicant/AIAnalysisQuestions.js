import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Quiz from "../../../../quiz/components/Quiz";


const AIAnalysisQuestions = (props) =>{

    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING);
    },[actions]);
   

    function checkValue(e) {
        var value = e.target.value;
        console.log("You selected " + value);
      }

  
      const handleContinue = () =>{
          navigate("/Lab6/Exercise/EmployerStart");
      }
  
      /**
       * Need to increase font, and align the checkboxes!!
       */

       const onFormSubmit = e => {
        e.preventDefault()
        // This cursed line of code will:
        //  1. Grab the form with e.target
        //  2. Create an instance of a FormData object from ReactStrap using the form data
        //  3. Get the fields in that FormData object
        //  4. Create a new object from those entries, our new object will be an Object and not FormData
        // Essentially, this is just a really long winded way of casting FormData to Object, since
        // apparently that's necessary despite this not being an object-oriented or strongly typed language
        // Please refactor this eventually, for the love of all that is holy
        const formData = Object.fromEntries((new FormData(e.target)).entries())
        let survey=[]
        for (const [key,value] of Object.entries(formData)){
            if(value==="on"){
                survey.push(key)
            }
        }
        console.log(survey)
        if(survey.length!==0){
            handleContinue()
        }
    }

    return(
        <Form onSubmit={onFormSubmit}>
        <div className="center-div">
            <h2 class="cognitive_instructions">Which of these attributes do you think that the AI was looking for in this exercise in order to deny someone?</h2>
            
            <div className="analysis__questions">
                <FormGroup check >
                    <Label for="gender" check>
                        <Input id="gender" name="gender" type="checkbox" className="analysis__checkbox"/>
                        <div className="analysis__question">
                            Gender
                        </div>
                    </Label>
                </FormGroup>
                <FormGroup check >
                    <Label for="availability" check>
                        <Input id="availability" name="availability" type="checkbox" className="analysis__checkbox" /> 
                        <div className="analysis__question">
                            Availability
                        </div>
                    </Label>
                </FormGroup>
                <FormGroup check >
                    <Label for="facialhair" check>
                        <Input id="facialhair" name="facialhair" type="checkbox" className="analysis__checkbox"/>
                        <div className="analysis__question">
                            Age
                        </div>
                    </Label>
                </FormGroup>
                <FormGroup check >
                    <Label for="pay" check>
                        <Input id="pay" name="pay" type="checkbox" className="analysis__checkbox"/>
                        <div className="analysis__question">
                            Expected Pay
                        </div>
                    </Label>
                </FormGroup>
                <FormGroup check >
                    <Label for="years" check>
                        <Input id="years" name="years" type="checkbox" className="analysis__checkbox"/>
                        <div className="analysis__question">
                            Years of Experience
                        </div>
                    </Label>
                </FormGroup>
            </div>

            <button
                className="btn btn-primary text-black btn-xl text-uppercase "     
                type="submit"
                key="confirm"
            >
                Submit
            </button>
      </div>
      </Form>
    );
}

export default AIAnalysisQuestions;
  
//         return(
//           <div className="center-div">
//               <h2 class="playthrough__title">Which of these attributes do you believe were reasons why you were not selected:</h2>
  
//               <div>
//           <input id="box1" onChange={checkValue} type="checkbox" value="Box1"/>
//           <label htmlFor="#box1">Gender</label>
//         </div>
//         <div>
//           <input id="box2" onChange={checkValue} type="checkbox" value="Box2"/>
//           <label htmlFor="#box2">Years of Experience</label>
//         </div>
//         <div>
//           <input id="box3" onChange={checkValue} type="checkbox" value="Box3"/>
//           <label htmlFor="#box3">Physical Appearance</label>
//         </div>
//         <div>
//           <input id="box4" onChange={checkValue} type="checkbox" value="Box4"/>
//           <label htmlFor="#box4">Age</label>
//         </div>
//         <div>
//           <input id="box5" onChange={checkValue} type="checkbox" value="Box5"/>
//           <label htmlFor="#box4">College Major</label>
//         </div>
  
      
//         <button
//                   className="btn btn-primary text-black btn-xl text-uppercase "
//                   onClick = {handleContinue}
//                   key="confirm"
//               >
//                   Submit
//               </button>
//         </div>
//       );
//   }



    // const {actions} = props;

    // useEffect(()=>{
    //     actions.updateState(EXERCISE_PLAYING);
    // },[actions]);

    // const handleContinue = () =>{
    //     navigate("/Lab6/Exercise/NegativeReasoning");
    // }

    // const onFormSubmit = e => {
    //     e.preventDefault()
    //     // This cursed line of code will:
    //     //  1. Grab the form with e.target
    //     //  2. Create an instance of a FormData object from ReactStrap using the form data
    //     //  3. Get the fields in that FormData object
    //     //  4. Create a new object from those entries, our new object will be an Object and not FormData
    //     // Essentially, this is just a really long winded way of casting FormData to Object, since
    //     // apparently that's necessary despite this not being an object-oriented or strongly typed language
    //     // Please refactor this eventually, for the love of all that is holy
    //     const formData = Object.fromEntries((new FormData(e.target)).entries())
    //     let survey=[]
    //     for (const [key,value] of Object.entries(formData)){
    //         if(value==="on"){
    //             survey.push(key)
    //         }
    //     }
    //     console.log(survey)
    //     if(survey.length!==0){
    //         handleContinue()
    //     }
    // }

    // const questions = [
    //     {
    //         val: 0,
    //         content: "Gender"
    //     },
    //     {
    //         val: 0,
    //         content: "Years of Experience"
    //     },
    //     {
    //         val: 0,
    //         content: "Facial hair"
    //     },
    //     {
    //         val: 1,
    //         content: "Age"
    //     },
    //     {
    //         val: 1,
    //         content: "GPA"
    //     }

    // ];


    

    // return(
    //     <Form onSubmit={onFormSubmit}>
    //     <div className="center-div">
    //         <h2 class="playthrough__title analysis__rejection">After carefully reviewing your application, we regret to inform you that you were not selected for further consideration.</h2>
    //         {/* <h2 class="cognitive_instructions">Which of these attributes do you think that the AI was looking for in this exercise in order to deny someone?</h2> */}
            
    //         <Quiz
    //                 answer={""}
    //                 answerOptions={questions}
    //                 questionId={1}
    //                 question={"Which of these attributes do you think that the AI was looking for in this exercise in order to deny someone?"}
    //                 questionTotal={1}
    //                 onAnswerSelected={()=>{}}
    //                 nextQuestion={()=>{}}
    //                 disable={true}
    //                 multiChoice = {true}
    //         />


{/*             
            <div className="analysis__questions">
                <FormGroup check >
                    <Label for="years" check>
                        <Input id="years" name="years" type="checkbox" className="analysis__checkbox"/>
                        <div className="analysis__question">
                            Years of Experience
                        </div>
                    </Label>
                </FormGroup>
                <FormGroup check >
                    <Label for="gender" check>
                        <Input id="gender" name="gender" type="checkbox" className="analysis__checkbox" /> 
                        <div className="analysis__question">
                            Gender
                        </div>
                    </Label>
                </FormGroup>
                <FormGroup check >
                    <Label for="facialhair" check>
                        <Input id="facialhair" name="facialhair" type="checkbox" className="analysis__checkbox"/>
                        <div className="analysis__question">
                            Facial hair
                        </div>
                    </Label>
                </FormGroup>
                <FormGroup check >
                    <Label for="age" check>
                        <Input id="age" name="age" type="checkbox" className="analysis__checkbox"/>
                        <div className="analysis__question">
                            Age
                        </div>
                    </Label>
                </FormGroup>
                <FormGroup check >
                    <Label for="gpa" check>
                        <Input id="gpa" name="gpa" type="checkbox" className="analysis__checkbox"/>
                        <div className="analysis__question">
                            GPA
                        </div>
                    </Label>
                </FormGroup>
            </div> */}

//             <button
//                 className="btn btn-primary text-black btn-xl text-uppercase "     
//                 type="submit"
//                 key="confirm"
//                 onClick={handleContinue}
//             >
//                 Submit
//             </button>
//       </div>
//       </Form>
//     );
// }





