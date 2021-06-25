import React, { Component } from 'react';
import handleRedirect from "../../../../helpers/Redirect";
import ProgressBar from '../../profilepage/progressBar';
class Lab extends Component{
    render(){
        const { alt,lab, name, bio , image,actions} = this.props;
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
                            <li>
                                <ProgressBar
                                    barData={[true,true,false,true,true]}
                                    total={5}
                                    completed={4}
                                    percentage={true}
                                />
                            </li>
                        </ul>
                    </li>
                </ul>
        );
    }

}

export default Lab;
