import { Sections } from "../App";
import { navigate } from "@reach/router";

export const handleRedirect = (actions, lab, body =0) => {
    const labname = Sections[lab].name;
    const bodyname = Sections[lab][body].name;
    navigate(process.env.PUBLIC_URL + "/" + (lab !== 0 ?  labname + "/" : "") + bodyname).then( ()=>{
        actions.setLab(lab);
        if (body){
            actions.setBody(body);
        }
    })
}

export default handleRedirect;