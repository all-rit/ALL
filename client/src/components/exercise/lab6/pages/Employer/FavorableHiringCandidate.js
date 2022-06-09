import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";
import { Input } from "reactstrap";
import LongHorizontalLine from "../../../../../common/HorizontalLine/LongHorizontalLine";
import { Form } from "reactstrap";


const FavorableHiringCandidate = (props) =>{
    const {actions} = props;
    const {type,gender,age,years,availability,pay,ai} = props;


    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING)
    },[actions]);

    const handleStart = () =>{
        navigate("/Lab6/Exercise/HiringCandidate");
    }
    
    return(

        
        <><div className="center-div">
            <h2 class="playthrough__title">Favorable Candidate:</h2>
            <div className="playthrough__sentence">
                Here’s what MegaCorp is looking for in new employees
            </div>

            <h2 class="Prime candidate ex.">This is an example of a prime candidate that should be hired!</h2>
            <div className="playthrough__sentence">Click the “Continue” button to begin the second half of this exercise!</div>

            <div className='gridApplicants tw-flex'>
			<div className='tw-mr-4'>
				<ul className='gridApplicants-content tw-bg-bgwhite tw-mt-40'>
					<li className='tw-p-4'>Gender</li>
					<li className='tw-p-4'>Years of Experience</li>
					<li className='tw-p-4'>Availability</li>
					<li className='tw-p-4'>Expected Pay</li>
					<li className='tw-p-4'>AI Recommendation</li>
				</ul>
			</div>
			 

            {/*Don't change className because styling changes*/}
            {/* <div className='tw-mr-4'> */}
            <ul for="applicant" className="candidate__col">
       
                    <li className="candidate__image" alt="default_img" style={{ backgroundImage: "url('https://login.vivaldi.net/profile/avatar/default-avatar.png" }}></li>
               
					<li className='tw-p-4'>Unimportant</li>
                    <LongHorizontalLine></LongHorizontalLine>
					<li className='tw-p-4'>3+</li>
                    <LongHorizontalLine></LongHorizontalLine>
					<li className='tw-p-4'>Full-Time</li>
                    <LongHorizontalLine></LongHorizontalLine>
					<li className='tw-p-4'>$18.00/hr</li>
                    <LongHorizontalLine></LongHorizontalLine>
					<li className='tw-p-4'>INTERVIEW</li>
                 
		
            </ul> 
            {/* </div> */}
			</div>

          
    
       
            </div>

          
          

            
            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick={handleStart}
                key="start"
            >
                Continue
            </button></>

           
      
    );
}
    

                




           

export default FavorableHiringCandidate;