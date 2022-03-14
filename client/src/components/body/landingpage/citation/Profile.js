import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import XMLParser from 'react-xml-parser';

class Profile extends Component{
    render(){
        const { profile_image, name, title, work ,datesActive,socials} = this.props;
        //Parses stringified xml file
        const parsedSocials = [];
        if(socials!== undefined && socials.length!==0){
            const xml = new XMLParser().parseFromString(socials);
            xml.children.forEach((social)=>{
                const link = social.getElementsByTagName('Link')[0].value;
                const network = social.getElementsByTagName('Network')[0].value;
                parsedSocials.push([link,network])
            })
        }
        return(
            <ul id={name} className="citation module__col">
                <li id="profile_image">
                    <div alt={name+"Profile Image"} className="img-fluid module__image module__profile_image" style={{backgroundImage: "url(/img/profileImages"+profile_image+")" }}/>
                </li>
                <li className="module__profile_caption">
                    <ul>
                        <li id={name} className="citation__name">{name}</li>
                        <li id={title} className="module__title">{title}</li>
                        <li id="work" className="module__work">{datesActive}</li>
                        <li id="work" className="module__work">{work}</li>
                    </ul>
                </li>
                
                <li id="social_media" >
                    <ul className="landingpage__row citation__social_row">
                        {parsedSocials.map((social,index)=>{
                            return <li key={index} className="citation__social_media" ><SocialIcon url={social[0]} network={social[1]} target="__blank"/></li>
                        })}
                    </ul>
                </li>
            </ul>
        );
    }

}

export default Profile;