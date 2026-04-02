import { Col, Container, Row } from "reactstrap";
import logo from "../../assets/images/logos/ALL_White.svg";
import nsf from "../../assets/images/logos/nsf.png";
import rit from "../../assets/images/logos/RIT.png";

const NewMainFooter = () => {
  return (
    <Row className="tw-px-12 tw-pb-5 tw-bg-labGray tw-text-white tw-mt-[5rem] tw-flex tw-flex-row tw-justify-end">
      {/*Column 1*/}
      <Col xs={3}>
        <Col xs={9}>
          <a href="#">
            <img className="logo tw-flex tw-h-auto" src={logo} alt="ALL Logo" />
          </a>
        </Col>
        <p className="tw-body-text tw-text-left">
          Accessible Learning Labs is an NSF funded initiative aimed at
          fostering STEM proficiency.
        </p>
      </Col>
      {/*Column 2*/}
      <Col xs={4}>
        <p>col 2</p>
      </Col>
      {/*Column 3*/}
      <Col xs={2}>
        <p>col 3</p>
      </Col>
      {/*Column 4*/}
      <Col xs={3} className="tw-flex tw-flex-col tw-justify-end">
        <Container>
          <div className="tw-flex tw-flex-row tw-items-center tw-gap-4">
            <Col xs={2} className="tw-mr-5">
              <a
                href="https://www.nsf.gov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="tw-object-cover tw-w-full tw-max-w-[10rem]"
                  src={nsf}
                  alt="National Science Foundation"
                />
              </a>
            </Col>
            <Col xs={5}>
              <a
                href="https://www.rit.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="tw-object-cover tw-w-full tw-max-w-[16rem]"
                  src={rit}
                  alt="Rochester Institute Of Technology"
                />
              </a>
            </Col>
          </div>
        </Container>
        <p className={"tw-pt-2 tw-body-text tw-text-left tw-font-medium"}>
          Available under the Federal Government License. This work is National
          Science Foundation Under Under #2111152, #2336941
        </p>
      </Col>
    </Row>
  );
};
export default NewMainFooter;
