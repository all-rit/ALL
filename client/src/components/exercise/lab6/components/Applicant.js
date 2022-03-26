import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import LongHorizontalLine from "../../../../common/HorizontalLine/LongHorizontalLine";


const Applicant = (props)=>{
    const {type,gender,age,years,availability,pay,ai}=props;

    switch(type){
        case "key":
            return( 
            <>
                <div className="candidate__key__container">
                    <ul className="candidate__key__col">
                        <li className="candidate__data">{gender}</li>
                        <li><LongHorizontalLine/></li>
                        <li className="candidate__data">{age}</li>
                        <li><LongHorizontalLine/></li>
                        <li className="candidate__data">{years}</li>
                        <li><LongHorizontalLine/></li>
                        <li className="candidate__data">{availability}</li>
                        <li><LongHorizontalLine/></li>
                        <li className="candidate__data">{pay}</li>
                        <li><LongHorizontalLine/></li>
                        <li className="candidate__data">{ai}</li>
                    </ul>
                </div>
            </>
            );
        case "applicant":
            return(
                <ul>          
                <li className="candidate__container">
                                <ul for="applicant" className="candidate__col">
                                    <li className="candidate__image" alt="krutz"style={{backgroundImage: "url(/img/profileImages/Professor_Krutz.jpg)" }} ></li>
                                    <li><LongHorizontalLine/></li>
                                    <li className="candidate__data">{gender}</li>
                                    <li><LongHorizontalLine/></li>
                                    <li className="candidate__data">{age}</li>
                                    <li><LongHorizontalLine/></li>
                                    <li className="candidate__data">{years}</li>
                                    <li><LongHorizontalLine/></li>
                                    <li className="candidate__data">{availability}</li>
                                    <li><LongHorizontalLine/></li>
                                    <li className="candidate__data">{pay}</li>
                                    <li><LongHorizontalLine/></li>
                                    <li className="candidate__data">{ai}</li>
                                </ul>
                </li>
                <li>
                    <Input id="applicant" name="applicant" type="checkbox" className=""/>                    </li>
                </ul> 
            );
        default:
            return(<></>);
    }

}

export default Applicant;