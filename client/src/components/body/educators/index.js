/* eslint-disable react/prop-types */
import React from "react";
import { bindActionCreators } from "redux";
import { actions as mainActions } from "../../../reducers/MainReducer";
import { connect } from "react-redux";
import { navigate } from "@reach/router";
import lectureImage from "../../../assets/images/educators/LectureSlides.png"
import walkthroughImage from "../../../assets/images/educators/walkthroughVideos.png"
import assignHW from "../../../assets/images/educators/AssignHW.png"
import contactUs from "../../../assets/images/educators/contactUs.jpg"
//import { useState } from 'react';

//const searchBar = () => {}
//const [searchInput, setSearchInput] = useState("");
const Educators = (props) => {
  const {
    actions,
  } = props;
  return (
    <div className="educators-page tw-h-screen">
      <span className={"top-span tw-h-600px"}>
        <div className={"left-container"}>
          <div>
            <p className={"educator-heading"}>EDUCATOR RESOURCES</p>
          </div>
          <div className={"bottom_left_container"}>
            <p className={"educator-welcome"}>Hello, [User First Name]!</p>
          <input
            className={"course-search"}
            placeholder={"Search Courses"}
          />
          </div>
        </div>
        <div className={"right-container tw-h-100 tw-border-4 tw-border-dashed tw-border-labGreen"}>
          <div className={"educator-welcome"}>Placeholder for Intro Video</div>
        </div>
      </span>

      {/* Lecture Slides, Videos, and Redirect to Profile*/}
     <span className={"bottom-span"}>
       {/* Lecture Slides*/}
       <div className=" module__col module__lab_col">
         <span>
           <a className="portfolio-link"
             onClick={() => navigate(actions)}
             href="# "
           >
             <div className="img-fluid module__image module__educators_image"
               style={{ backgroundImage: `url(${lectureImage})` }}
             />
           </a>
         </span>
         <ul className="module__caption">
           <li className="tw-mt-3 tw-mb-0 module__title module__lab_title">
             <a className={"tw-text-dark tw-text-3xl tw-font-semibold tw-tracking-wide"} onClick={() => navigate(actions)} href="# ">
               Lab Lecture Slides
             </a>
             <ul className="tw-mt-5 tw-mb-5">
               <li>
                 <a
                   className="tw-mb-0 tw-font-labBlue tw-text-xl tw-tracking-wide"
                   onClick={() => navigate(actions)}
                 >
                   Go to Lecture Slides
                 </a>
               </li>
             </ul>
             <ul className={"tw-text-labGreen tw-mb-3"}>
              <li>
                All lecture slides are available for free download
              </li>
            </ul>
           </li>
         </ul>
       </div>

       {/* Walkthrough Videos*/}
       <div className="module__col module__lab_col">
         <span>
           <a className="portfolio-link"
              onClick={() => navigate(actions)}
              href="# "
           >
             <div className="img-fluid module__image module__educators_image"
                  style={{ backgroundImage: `url(${walkthroughImage})` }}
             />
           </a>
         </span>
         <ul className="module__caption">
           <li className="tw-mt-3 tw-mb-0 module__title module__lab_title">
             <a className={"tw-text-dark tw-text-3xl tw-font-semibold tw-tracking-wide"} onClick={() => navigate(actions)} href="# ">
               Walkthrough Videos
             </a>
             <ul className="tw-mt-5 tw-mb-5">
               <li>
                 <a
                   className="tw-mb-0 tw-font-labBlue tw-text-xl tw-tracking-wide"
                   onClick={() => navigate(actions)}
                 >
                   Go to Walkthrough Videos
                 </a>
               </li>
             </ul>
             <ul className={"tw-text-labGreen tw-mb-3"}>
              <li>
                Comprehensive, step-by-step videos for each lab
              </li>
            </ul>
           </li>
         </ul>
       </div>

       {/*Assign Hw*/}
       <div className="module__col module__lab_col">
         <span>
           <a className="portfolio-link"
              onClick={() => navigate(actions)}
              href="# "
           >
             <div className="img-fluid module__image module__educators_image"
                  style={{ backgroundImage: `url(${assignHW})`,
                            backgroundSize: "400px",
                  }}
             />
           </a>
         </span>
         <ul className="module__caption">
           <li className="tw-mt-3 tw-mb-0 module__title module__lab_title">
             <a className={"tw-text-dark tw-text-3xl tw-font-semibold tw-tracking-wide"} onClick={() => navigate(actions)} href="# ">
               Assign Labs
             </a>
             <ul className="tw-mt-5 tw-mb-5">
               <li>
                 <a
                   className="tw-mb-0 tw-font-labBlue tw-text-xl tw-tracking-wide"
                   onClick={() => navigate(actions)}
                 >
                   Go to Lab Assignments
                 </a>
               </li>
             </ul>
             <ul className={"tw-text-labGreen tw-mb-3"}>
               <li>
                 Simplified and user-friendly lab
                 assignment and grading functionality
               </li>
             </ul>
           </li>
         </ul>
       </div>

       {/* Contact Us */}
        <div className="module__col module__lab_col">
         <span>
           <a className="portfolio-link"
              onClick={() => navigate(actions)}
              href="# "
           >
             <div className="img-fluid module__image module__educators_image"
                  style={{ backgroundImage: `url(${contactUs})` }}
             />
           </a>
         </span>
         <ul className="module__caption">
           <li className="tw-mt-3 tw-mb-0 module__title module__lab_title">
             <a className={"tw-text-dark tw-text-3xl tw-font-semibold tw-tracking-wide"} onClick={() => navigate(actions)} href="# ">
               Contact Us
             </a>
             <ul className="tw-mt-5 tw-mb-5">
               <li>
                 <a
                   className="tw-mb-0 tw-font-labBlue tw-text-xl tw-tracking-wide"
                   onClick={() => navigate(actions)}
                 >
                   Go to Contact Information
                 </a>
               </li>
             </ul>
             <ul className={"tw-text-labGreen tw-mb-3"}>
              <li>
                Have a question or a suggestion? Let us know!
              </li>
            </ul>
           </li>
         </ul>
       </div>
     </span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mainActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Educators);
