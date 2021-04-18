import React, { Component } from 'react';
import handleRedirect from "../../../../helpers/Redirect";

class Lab extends Component{
    render(){
        const { alt,lab, name, bio , image,actions} = this.props;
        return(
                <ul class="landingpage__col">
                    <li >
                        <a class="portfolio-link"
                            onClick={() => handleRedirect(actions,lab)}
                            href="# ">
                                <img
                                    class="img-fluid landingpage__image"
                                    src={image}
                                    alt={alt}
                                />
                        </a>
                    </li>
                    <li class="portfolio-caption ">
                        <ul>
                            <li class="landingpage__title">
                                <a onClick={() => handleRedirect(actions,lab)} href="# ">
                                    {name}
                                </a>
                            </li>
                            <li class="landingpage__bio">
                                {bio}
                            </li>
                        </ul>
                    </li>
                </ul>
        );
    }

}

export default Lab;
