import React from "react";

/**
 * Image is a display component used to render to the page a 
 * Image with subheadings to the reading section of the lab.
 */
const Image = ({data}) => {
    return(
        <>
        <ul>
            <li>
                <img
                    className="center"
                    src={"/img/lab_images"+data.image}
                    alt={data.alt}
                />
            </li>
            <ul>
                <li>
                    <b>{data.sub_caption}</b> 
                    <br />
                </li>
                <li>{data.caption}</li>
            </ul>
        </ul>
        </>
    );
}

export default Image;

