import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
class Profile extends Component{
    render(){
        const { profile_image, name, title, bio , linkedin, github} = this.props;
        const linkLinkedin = 'https://www.linkedin.com/in/'+linkedin;
        const linkGithub = 'https://github.com/'+github;
        return(
            
            <ul id={name} class="citation citation__profile_collumn portfolio-item ">
                <li id="profile_image">
                    <img 
                    class="img-fluid citation__profile_image"
                    src={profile_image}
                    alt="Team Member Profile"
                    />
                </li>
                <li id={name} class="citation__name">{name}</li>
                <li id={title} class="citation__title">{title}</li>
                <li id="bio" class="citation__bio">{bio}</li>
                <li id="social_media" >
                    <ul class="row">
                        <li id="linkedin" class="citation__social_media"><SocialIcon url={linkLinkedin} /></li>
                        <li class="citation__social_media"><SocialIcon url={linkGithub} /></li>
                    </ul>
                </li>
            </ul>
        );
    }

}

export default Profile;