/* eslint-disable react/prop-types */
/**
 * NonBulletList is a display component used to render to the page a
 * list like view of information to the reading section of the lab.
 */
const NonBulletList = ({ data, isImagine }) => {
  return (
    <ul className="non-bullet-list">
      {data.map((text, index) => {
        return (
          <li key={index} className={'tw-body-text'}>
            <h5
              className={
                isImagine ? 'tw-text-[3vw] lg:tw-text-[2.25vh]' : 'tw-body-text'
              }
            >
              {text.header}
            </h5>
            <p
              className={
                isImagine ? 'tw-text-[3vw] lg:tw-text-[2.25vh]' : 'tw-body-text'
              }
            >
              {text.content}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
export default NonBulletList;
