import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import XMLParser from 'react-xml-parser';

class Profile extends Component{
    render(){
        const { profile_image, name, title, work ,datesActive,socials} = this.props;
        //Parses stringified xml file
        var parsedSocials=[];
        if(socials!== undefined && socials.length!==0){
            var xml = new XMLParser().parseFromString(socials); 
            xml.children.forEach((social)=>{
                var link = social.getElementsByTagName('Link')[0].value;
                var network = social.getElementsByTagName('Network')[0].value;
                parsedSocials.push([link,network])
            })
        }
        return(
            <ul id={name} class="citation module__col">
                <li id="profile_image">
                    <div alt={name+"Profile Image"} class="img-fluid module__image module__profile_image" style={{backgroundImage: "url("+profile_image+")" }}/>
                </li>
                <li class="module__caption citation__caption">
                    <ul>
                        <li id={name} class="citation__name">{name}</li>
                        <li id={title} class="module__title">{title}</li>
                        <li id="work" class="module__work">{datesActive}</li>
                        <li id="work" class="module__work">{work}</li>
                    </ul>
                </li>
                
                <li id="social_media" >
                    <ul class="landingpage__row citation__social_row">
                        {parsedSocials.map((social,index)=>{
                            return <li key={index} class="citation__social_media" ><SocialIcon url={social[0]} network={social[1]} target="__blank"/></li>
                        })}
                    </ul>
                </li>
            </ul>
        );
    }

}

export default Profile;