import React, { Component} from 'react';
import handleRedirect from "../../../../helpers/Redirect";
import ProgressBar from '../../profilepage/progressBar';
import InfoModal from './Modal';
class Lab extends Component{
    state = { show: false };

    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };

    render(){
        const {progressState,alt,lab, name, bio , image,actions} = this.props;
        switch(progressState){
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
                                <ul class="module__bio">
                                    <li>[-Insert Quiz Score-]</li>
                                    <li>[-Insert Time Completed-]</li>
                                    <li><InfoModal buttonLabel={"View Certificate"} labName={name}/></li>
                                </ul>
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
                                <li class="module__bio">
                                    <InfoModal buttonLabel={"More Info"} labName={name}/>
                                </li>
                            </ul>
                        </li>
                    </ul>
            );
        }
    }

}

export default Lab;
