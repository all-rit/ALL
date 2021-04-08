import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length === 1)
      r = "0" + r;
    if (g.length === 1)
      g = "0" + g;
    if (b.length === 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

function ColorShader(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2),16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

function getBackgroundShade() {
    const elems = document.querySelectorAll('body, .quiz, .result');
    let backgroundColor="";
    for (let i = 0; i < elems.length; i++) {
        console.log(elems[i].style.backgroundColor);
        backgroundColor=elems[i].style.backgroundColor;
    }
    console.log(backgroundColor);
    return ColorShader(RGBToHex(backgroundColor),-0.1)
}

class Profile extends Component{
    render(){
        const { profile_image, name, title, bio , linkedin, github} = this.props;
        const linkLinkedin = 'https://www.linkedin.com/in/'+linkedin;
        const linkGithub = 'https://github.com/'+github;
        //style={{background:getBackgroundShade()}}
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