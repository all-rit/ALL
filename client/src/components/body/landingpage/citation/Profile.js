import React, { Component } from 'react';


class Profile extends Component{
    render(){
        const { profile_image, name, title, bio } = this.props;
        return(
            <div class="col-md-4 portfolio-item">
                <img
                class="img-fluid citation__profile_image"
                src={profile_image}
                alt="Deaf and Hard of Hearing Activity Thumbnail"
                />
                <h3>{name}</h3>
                <h3>{title}</h3>
                <h3>{bio}</h3>
            </div>
        );
    }

}

export default Profile;