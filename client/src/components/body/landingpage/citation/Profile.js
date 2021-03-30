import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
class Profile extends Component{
    render(){
        const { profile_image, name, title, bio , linkedin, github} = this.props;
        const linkLinkedin = 'https://www.linkedin.com/in/'+linkedin;
        const linkGithub = 'https://github.com/'+github;
        return(
            
            <div class="citation citation__profile_collumn portfolio-item">
                <img
                class="img-fluid citation__profile_image"
                src={profile_image}
                alt="Team Member Profile"
                />
                <h3>{name}</h3>
                <h3 class="text-primary">{title}</h3>
                <p>{bio}</p>
                <div class="row">
                    <div class="citation__social_media"><SocialIcon url={linkLinkedin} /></div>
                    <div class="citation__social_media"><SocialIcon url={linkGithub} /></div>
                </div>
            </div>
        );
    }

}

export default Profile;