import React, { Component } from 'react';
import handleRedirect from "../../../../helpers/Redirect";

class Lab extends Component{
    render(){
        const { alt, name, bio , image,actions} = this.props;
        return(
                <ul class="landingpage__col portfolio-item">
                    <li >
                        <a class="portfolio-link"
                            onClick={() => handleRedirect(actions,1)}
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
                            <li class="landingpage__lab_title">
                                <a onClick={() => handleRedirect(actions,1)} href="# ">
                                    {name}
                                </a>
                            </li>
                            <li class="landingpage__lab_desc">
                                {bio}
                            </li>
                        </ul>
                    </li>
                </ul>
        );
    }

}

export default Lab;
