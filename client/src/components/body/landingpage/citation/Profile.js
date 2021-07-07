import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Profile extends Component{
    render(){
        const { profile_image, name, title, work ,datesActive,website,network} = this.props;

        return(
            
            <ul id={name} class="citation module__col">
                <li id="profile_image">
                    <img 
                    class="img-fluid module__image"
                    src={profile_image}
                    alt="Team Member Profile"
                    />
                </li>
                <li class="portfolio-caption module__caption">
                    <ul>
                        <li id={name} class="citation__name">{name}</li>
                        <li id={title} class="module__title">{title}</li>
                        <li id="work" class="module__work">{datesActive}</li>
                        <li id="work" class="module__work">{work}</li>
                    </ul>
                </li>
                
                <li id="social_media" >
                    <ul class="landingpage__row citation__social_row">
                            <li class="citation__social_media" ><SocialIcon url={website} network={network} target="__blank"/></li>
                    </ul>
                </li>
            </ul>
        );
    }

}

export default Profile;