import { Sections } from "../App";

export const handleRedirect = (actions, lab, body =0) => {
    console.log(lab);
    const labname = Sections[lab].name;
    const bodyname = Sections[lab][body].name;
    window.location.href = process.env.PUBLIC_URL + "/" +labname + "/" + bodyname
    //     actions.setLab(lab);
    // if (body){
    //     actions.setBody(body);
    // }
}

export default handleRedirect;