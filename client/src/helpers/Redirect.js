import { Sections } from "../App";
import { navigate } from "@reach/router";
var parse = require('url-parse');

export const handleRedirect = (actions, lab, body = 0, loadURL = false) => {
    if(!loadURL){
        if (!(lab in Sections)){
            //check if lab exists
            alert("Page does not exist")
            lab = 0;
        }
        let labname = Sections[lab].name;
        let bodyname = Sections[lab][body].name;
        navigate(process.env.PUBLIC_URL + "/" + (lab !== 0 ?  labname + "/" : "") + bodyname).then( ()=>{
            actions.setLab(lab);
            actions.setBody(body);
        })
    }
    else{
        let parsed = parse(window.location.href);
        parsed = parsed.pathname.split('/');
        const index = parsed.indexOf("");
        if (index > -1) {
            parsed.splice(index, 1);
        }
        const [labs, bodies] = getLabsBodies();
        let redirect_lab = null;
        let redirect_body = null;
        let noMatch = false;
        parsed.filter(string => {
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
        switch (redirect_lab) {
            case "Lab1":
                actions.setLab(1);
                break;
            // case "Lab2":
            //     actions.setLab(2);
            //     break;
            // case "Lab3":
            //     actions.setLab(3);
            //     break;
            // case "Lab4":
            //     actions.setLab(4);
            //     break;
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
            case "Sitemap":
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
            alert("Page does not exist")
            navigate(process.env.PUBLIC_URL + "/").then(()=>{
                actions.setBody(0);
                actions.setLab(0);
            }
            )
        }

    }

}
const getLabsBodies =()=>{
    let labs=[];
    let bodies=[];
    for (let lab in Sections){
        labs.push(Sections[lab].name);
        for (let body in Sections[lab]){
            if(bodies.indexOf(Sections[lab][body].name)=== -1){
                bodies.push(Sections[lab][body].name);
            }

        }
    }
    return [labs, bodies];
}


export default handleRedirect;