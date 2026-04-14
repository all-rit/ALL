import { Col, Row } from "reactstrap";
import logo from "../../assets/images/logos/ALL_White.svg";
// import nsf from "../../assets/images/logos/nsf.png";
// import rit from "../../assets/images/logos/RIT.png";

const MobileFooter = () => {
  return (
    <div className="tw-px-4 tw-pt-[1rem] tw-w-screen tw-pb-6 tw-bg-labGray tw-text-white tw-mt-[5rem] tw-mb-0 tw-flex tw-flex-row tw-justify-center">
      <Col>
        {/* Row 1 */}
        <Row className="tw-mb-0">
          {/* ALL Logo*/}
          <Col xs="6" className="tw-justify-start">
            <a href="#" className="tw-left-0 tw-top-0 tw-content-start">
              <img
                className="logo tw-flex tw-h-auto"
                src={logo}
                alt="ALL Logo"
              />
            </a>
          </Col>
          <Col>
            <p className="tw-text-left">
              Accessible Learning Labs is an NSF funded initiative aimed at
              fostering STEM proficiency.
            </p>
          </Col>
        </Row>
        {/* Row 2 */}
        <Row></Row>
        <Row>
          {/* Row 3 */}
          <div className="tw-flex tw-justify-left tw-pt-0 tw-space-x-4">
            <svg
              className="tw-fill-white tw-w-9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              {/*Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <a
                className="tw-fill-white"
                href="https://www.linkedin.com/company/accessible-learning-labs-rit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </a>
            </svg>
            <svg
              className="tw-fill-white tw-w-11"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              {/*Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <a
                className="tw-fill-white"
                href="https://www.youtube.com/@accessibilitylearninglabs5949"
                target="_blank"
                rel="noopener noreferrer"
              >
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </a>
            </svg>
            <svg
              className="tw-fill-white tw-w-11"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              {/*Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.*/}
              <a
                className="tw-text-white tw-no-underline"
                href="mailto:dxkvse@rit.edu"
              >
                <path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z" />
              </a>
            </svg>
          </div>
        </Row>
      </Col>
    </div>
  );
};
export default MobileFooter;
