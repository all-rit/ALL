import React from "react";

/**
 * NonBulletList is a display component used to render to the page a 
 * list like view of information to the reading section of the lab.
 */
const NonBulletList = ({data}) => {
    return(
        <>
        <ul className="non-bullet-list">
            {data.map((text , index) =>{
              <li key={index}>
                <>
                    <h5>{text.header}</h5>
                    <p>{text.context}</p>
                </>
              </li>  
            })}
        </ul>
        </>
    );
}
export default NonBulletList;