import {Sections} from "../constants/index";
import { navigate } from "@reach/router";

export const handleRedirect = (actions, lab, body = 0) => {
    if (!(lab in Sections)) {
        //check if lab exists
        alert("Page does not exist")
        lab = 0;
    }
    let labname = Sections[lab].name;
    let bodyname = Sections[lab][body].name;
    navigate(process.env.PUBLIC_URL + "/" + (lab !== 0 ? labname + "/" : "") + bodyname);


}
export const stateChange = (actions, pathname) =>{
    let parsed = pathname.split('/');
    parsed =parsed.filter(x => x !== "");
    let redirect_lab = null;
    let redirect_body = null;
    let noMatch = false;
    if (parsed.length=== 0){ //if url is all.rit.edu
        actions.setLab(0);
        actions.setBody(0);
        return;
    }
    let [labs, bodies] = getLabsBodies();
    if(parsed.length ===1){ //if url is all.rit.edu/{Lab} or all.rit.edu/{homebody}
        let bodies = getLabsBodies(true);//check for home body like sitemap first
        redirect_body= bodies.includes(parsed[0]) ? parsed[0] : null;
        redirect_lab = "";
        if(!redirect_body){ //means it wasn't a valid home page body, so check lab
            redirect_lab= labs.includes(parsed[0]) ? parsed[0] : null;
            redirect_body = "";
        }
    }
    else{
        parsed.filter(string => { //checks for all.rit.edu/{Lab}/{Something}
            bodies.forEach(word => {
                if (string === word && !redirect_body){
                    redirect_body = word;
                }

            })
            labs.forEach(word => {
                if (string === word && !redirect_lab){
                    redirect_lab = word;
                }
            })
            return "";
        });
    }
    switch (redirect_lab) {
        case "Lab1":
            actions.setLab(1);
            break;
        case "Lab2":
            actions.setLab(2);
            break;
        case "Lab3":
            actions.setLab(3);
            break;
        case "Lab4":
            actions.setLab(4);
            break;
        case "Lab5":
            actions.setLab(5);
            break;
        case "":
            actions.setLab(0);
            break;
        default:
            noMatch = true;
            actions.setLab(0);
            break;
    }
    switch (redirect_body) {
        case "About":
            actions.setBody(0);
            break;
        case "Reading":
            actions.setBody(1);
            break;
        case "Game":
            actions.setBody(2);
            break;
        case "Video":
            actions.setBody(3);
            break;
        case "Quiz":
            actions.setBody(4);
            break;
        case "SiteMap":
            actions.setBody(1);
            break;
        default:
            actions.setBody(0);
            if(redirect_body !== ""){
                noMatch = true;
            }
            break;
    }
    if (noMatch){
        actions.setBody(0);
        actions.setLab(0);
    }
    
}
const getLabsBodies =(home = false)=>{
    let labs=[];
    let bodies=[];
    for (let lab in Sections){
        if(home){ lab =0}
        labs.push(Sections[lab].name);
        for (let body in Sections[lab]){
            if(bodies.indexOf(Sections[lab][body].name)=== -1){
                bodies.push(Sections[lab][body].name);
            }

        }
    }
    if(home){
        return bodies;
    }
    return [labs, bodies];
}


export default handleRedirect;