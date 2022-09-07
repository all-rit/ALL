/* eslint-disable react/prop-types */
import React from "react";
/**
 * LinkFooter is a visual component used at the bottom of each of the reading
 * section of a lab. Displaying a assortment of links to other sites
 * @param {data} props from the higher order component with site content
 * @returns rendered list of links to other sites
 */
const LinkFooter = ({ data }) => {
  return (
    <>
      <h4 className="footerlink">
        For more information, please visit the following websites:
      </h4>
      <div className="link-footer">
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
export default LinkFooter;
