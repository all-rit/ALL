import React, {useEffect, useState} from 'react';
import handleRedirect from "../../../helpers/Redirect";
import UserLabService from '../../../services/UserLabService';
import ProgressBar from '../profilepage/progressBar';
import InfoModal from './InfoModal';

const Lab = (props)=>{
        const {progressState, alt, lab, name, bio, image, actions, user, labProgress} = props;
        // const [labProgress, setLabProgress] = useState();

        // useEffect(() => {
        //     if(labProgress===null || labProgress===undefined){
        //         if (user){
        //             async function fetchLabCompletion() {
        //                 return UserLabService.getUserLabCompletion(user.userid,lab);
        //             }
        //             fetchLabCompletion().then((data) => {
        //                 setLabProgress(data);
        //             });
        //         }
        //     }
        // });
        switch(progressState){
            case "IN_PROGRESS":
                return(
                    <ul class="module__col module__lab_col">
                        <li >
                            <a class="portfolio-link "
                                onClick={() => handleRedirect(actions,lab)}
                                href="# ">
                                    <div alt={alt} class="img-fluid module__image module__lab_image" style={{backgroundImage: "url("+image+")"}}/>
                            </a>
                        </li>
                        <ul class="module__caption">
                                <li class="module__title module__lab_title">
                                    <a onClick={() => handleRedirect(actions,lab)} href="# ">
                                        {name}
                                    </a>
                                </li>
                                {labProgress===null || labProgress===undefined ? <p>No Lab Data Available..!</p>:
                                <ul>
                                    <li>
                                        <ProgressBar
                                            labID={lab}
                                            barData={[["About",labProgress.aboutcompletedtime],
                                                    ["Reading",labProgress.readingcompletedtime],
                                                    ["Exercise",labProgress.exercisecompletedtime],
                                                    ["Reinforcement",labProgress.reinforcementcompletedtime],
                                                    ["Quiz",labProgress.quizcompletedtime]]}
                                            percentage={true}
                                        />
                                    </li>
                                    <li class="module__bio">
                                        Started on {labProgress.labstarttime.split("T")[0]}
                                    </li>
                                </ul>
                                }
                                {/* <li>
                                    <ProgressBar
                                        barData={[true,true,false,true,true]}
                                        total={5}
                                        completed={4}
                                        percentage={true}
                                    />
                                </li>
                                <li class="module__bio">
                                    <p>[-Insert Time Started-]</p>
                                </li> */}
                        </ul>
                    </ul>
            );
            case "COMPLETED":
                return(
                    <ul class="module__col module__lab_col">
                        <li >
                            <a class="portfolio-link "
                                onClick={() => handleRedirect(actions,lab)}
                                href="# ">
                                    <div alt={alt} class="img-fluid module__image module__lab_image" style={{backgroundImage: "url("+image+")"}}/>
                            </a>
                        </li>
                        <ul class="module__caption">
                            <li class="module__title module__lab_title">
                                <a onClick={() => handleRedirect(actions,lab)} href="# ">
                                    {name}
                                </a>
                            </li>
                            <ul class="module__bio">
                                <li>{labProgress ===null || labProgress===undefined ? 0 : labProgress.quizscore }% Quiz Score</li>
                                <li>[-Insert Time Completed-]</li>
                                <li><InfoModal buttonLabel={"View Certificate"} labName={name} labNum={lab} labProgress={labProgress}/></li>
                            </ul>
                        </ul>
                    </ul>
            );
            case "NOT_STARTED":
                return(
                    <ul class="module__col module__lab_col">
                        <li >
                            <a class="portfolio-link "
                                onClick={() => handleRedirect(actions,lab)}
                                href="# ">
                                    <div alt={alt} class="img-fluid module__image module__lab_image" style={{backgroundImage: "url("+image+")" }}/>
                            </a>
                        </li>
                        <ul class="module__caption">
                            <li class="module__title module__lab_title">
                                <a onClick={() => handleRedirect(actions,lab)} href="# ">
                                    {name}
                                </a>
                            </li>
                            <li class="module__bio">
                                {bio}
                            </li>
                            {/* <li class="module__bio module__lab_buttons"><button class="module__launchLab module__lab_button" onClick={() => handleRedirect(actions,lab)}>Begin Lab</button></li> */}
                        </ul>
                    </ul>
            );
            default:
                return(
                    <ul class="module__col module__lab_col">
                        <li >
                            <a class="portfolio-link "
                                onClick={() => handleRedirect(actions,lab)}
                                href="# ">
                                    <div alt={alt} class="img-fluid module__image module__lab_image" style={{backgroundImage: "url("+image+")"}}/>
                            </a>
                        </li>
                        <ul class="module__caption module__caption">
                                <li class="module__title module__lab_title">
                                    <a onClick={() => handleRedirect(actions,lab)} href="# ">
                                        {name}
                                    </a>
                                </li>
                                <li class="module__bio">
                                    {bio}
                                </li>
                                <ul class="module__bio module__lab_buttons">
                                    <li><button class="module__lab_button btn-primary Button btn" onClick={() => handleRedirect(actions,lab)}>Launch Lab</button></li>
                                    <InfoModal buttonLabel={"More Info"} labName={name} redirect={() => handleRedirect(actions,lab)}/>
                                </ul>
                        </ul>
                    </ul>
            );
        }
}

export default Lab;
