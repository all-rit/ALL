import React, { Component } from 'react';
import {Button} from 'reactstrap';
import handleRedirect from "../../../../helpers/Redirect";
import ProgressBar from '../../profilepage/progressBar';
class Lab extends Component{
    render(){
        const {state,alt,lab, name, bio , image,actions} = this.props;
        switch(state){
            case "IN_PROGRESS":
                return(
                    <ul class="module__col module__lab_col">
                        <li >
                            <a class="portfolio-link "
                                onClick={() => handleRedirect(actions,lab)}
                                href="# ">
                                    <img
                                        class="img-fluid module__image"
                                        src={image}
                                        alt={alt}
                                    />
                            </a>
                        </li>
                        <li class="portfolio-caption module__caption">
                            <ul>
                                <li class="module__title">
                                    <a onClick={() => handleRedirect(actions,lab)} href="# ">
                                        {name}
                                    </a>
                                </li>
                                <li>
                                    <ProgressBar
                                        barData={[true,true,false,true,true]}
                                        total={5}
                                        completed={4}
                                        percentage={true}
                                    />
                                </li>
                                <li class="module__bio">
                                    <p>[-Insert Time Started-]</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
            );
            case "COMPLETED":
                return(
                    <ul class="module__col module__lab_col">
                        <li >
                            <a class="portfolio-link "
                                onClick={() => handleRedirect(actions,lab)}
                                href="# ">
                                    <img
                                        class="img-fluid module__image"
                                        src={image}
                                        alt={alt}
                                    />
                            </a>
                        </li>
                        <li class="portfolio-caption module__caption">
                            <ul>
                                <li class="module__title">
                                    <a onClick={() => handleRedirect(actions,lab)} href="# ">
                                        {name}
                                    </a>
                                </li>
                                <li class="module__bio">
                                    <p>[-Insert Quiz Score-]</p>
                                </li>
                                <li>
                                    <p>[-Insert Time Completed-]</p>
                                </li>
                                <li>
                                    <Button>View Certificate</Button>
                                </li>
                            </ul>
                        </li>
                    </ul>
            );
            case "NOT_STARTED":
                return(
                    <ul class="module__col module__lab_col">
                        <li >
                            <a class="portfolio-link "
                                onClick={() => handleRedirect(actions,lab)}
                                href="# ">
                                    <img
                                        class="img-fluid module__image"
                                        src={image}
                                        alt={alt}
                                    />
                            </a>
                        </li>
                        <li class="portfolio-caption module__caption">
                            <ul>
                                <li class="module__title">
                                    <a onClick={() => handleRedirect(actions,lab)} href="# ">
                                        {name}
                                    </a>
                                </li>
                                <li class="module__bio">
                                    {bio}
                                </li>
                            </ul>
                        </li>
                    </ul>
            );
            default:
                return(
                    <ul class="module__col module__lab_col">
                        <li >
                            <a class="portfolio-link "
                                onClick={() => handleRedirect(actions,lab)}
                                href="# ">
                                    <img
                                        class="img-fluid module__image"
                                        src={image}
                                        alt={alt}
                                    />
                            </a>
                        </li>
                        <li class="portfolio-caption module__caption">
                            <ul>
                                <li class="module__title">
                                    <a onClick={() => handleRedirect(actions,lab)} href="# ">
                                        {name}
                                    </a>
                                </li>
                                <li class="module__bio">
                                    {bio}
                                </li>
                            </ul>
                        </li>
                    </ul>
            );
        }
    }

}

export default Lab;
