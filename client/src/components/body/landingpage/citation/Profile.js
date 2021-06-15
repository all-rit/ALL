import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Profile extends Component{
    render(){
        const { profile_image, name, title, bio ,socials} = this.props;

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
                        <li id="bio" class="module__bio">{bio}</li>
                    </ul>
                </li>
                
                <li id="social_media" >
                    <ul class="landingpage__row citation__social_row">
                        {socials.map((social,index)=>{
                            return <li class="citation__social_media" key={index}><SocialIcon url={social} target="__blank"/></li>
                        })}
                    </ul>
                </li>
            </ul>
        );
    }

}

export default Profile;