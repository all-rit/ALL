import React, { Component } from 'react';
import handleRedirect from "../../../../helpers/Redirect";

class Lab extends Component{
    render(){
        const { alt, name, bio , image,actions} = this.props;
        return(
                <ul class="col-md-4 portfolio-item">
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
                    <li class="portfolio-caption">
                        <h4>
                            <a onClick={() => handleRedirect(actions,1)} href="# "
                                >{name}
                            </a>
                        </h4>
                    </li>
                    < li class="">
                            {bio}
                    </li>
                </ul>
        );
    }

}

export default Lab;
