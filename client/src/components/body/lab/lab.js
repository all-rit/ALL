import React from 'react';
import handleRedirect from "../../../helpers/Redirect";
import ProgressBar from '../profilepage/progressBar';
import InfoModal from './InfoModal';

const Lab = (props)=>{
        const {progressState, alt, lab, name, bio, image, actions, labProgress} = props;

        function getColor(labProgress){
            if(labProgress !==null && labProgress!==undefined){
                let score = labProgress.quizscore;
                score = parseFloat(score);
                switch (true) {
                    case score<=40:
                        return "crimson";
                    case score<=70:
                        return "orange";
                    default:
                        return "chartreuse";
                }
            }
        }

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
                                <li><b style={{color:getColor(labProgress)}}>{labProgress ===null || labProgress===undefined ? 0 : labProgress.quizscore }% Quiz Score</b></li>
                                <li> Completed on {labProgress.labcompletiontime.split("T")[0]}</li>
                                <li class="module__bio"><InfoModal buttonLabel={"View Certificate"} labName={name} labNum={lab} labProgress={labProgress}/></li>
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
                        <ul class="module__caption">
                                <li class="module__title module__lab_title">
                                    <a onClick={() => handleRedirect(actions,lab)} href="# ">
                                        {name}
                                    </a>
                                </li>
                                <li class="module__bio">
                                    {bio}
                                </li>
                                <ul class="module__bio module__lab_buttons">
                                    <li><button class="btn-primary btn btn-md" onClick={() => handleRedirect(actions,lab)}>Launch Lab</button></li>
                                    <InfoModal buttonLabel={"More Info"} labName={name} redirect={() => handleRedirect(actions,lab)}/>
                                </ul>
                        </ul> 
                    </ul>
            );
        }
}

export default Lab;
