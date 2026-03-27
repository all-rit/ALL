/* eslint-disable react/prop-types */
/**
 * LinkFooter is a visual component used at the bottom of each of the reading
 * section of a lab. Displaying a assortment of links to other sites
 * @param {data} props from the higher order component with site content
 * @returns rendered list of links to other sites
 */
const LinkFooter = ({ data }) => {
  return (
    <>
      <h4 className="footer-header tw-body-text tw-leading-snug xs:tw-text-s md:tw-text-[1.125rem]">
        For more information, please visit the following websites:
      </h4>
      <div className="link-footer">
        {data.map((data, index) => {
          return (
            <a
              className="link tw-text-primary-blue tw-body-text"
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
