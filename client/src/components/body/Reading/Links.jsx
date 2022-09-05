import React from "react";
/**
 * Links is a visual component used in the reading
 * section of a lab. Displaying a assortment of links to other sites
 * @param {data} props from the higher order component with site content
 * @returns rendered list of links to other sites
 */
const Links = ({ data }) => {
  return (
    <>
      <div className="link-component">
        {data.map((data, index) => {
          return (
            <a
              className="link"
              key={index}
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.name === null || data.name === undefined
                ? data.link
                : data.name}
            </a>
          );
        })}
      </div>
    </>
  );
};
export default Links;
