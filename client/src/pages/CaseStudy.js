import React, { Component } from "react";

import Image1 from "../assets/images/casestudy/1.jpg";

import "./../vendor/bootstrap/css/bootstrap.min.css";
import "./aboutInfoStyle.css";

class CaseStudy extends Component {
  render() {
    return (
      <div className="study">
        <h1>Case Study</h1>

        <h3>Accessibility Standards</h3>

        <p>
          In order to establish accessibility standards throughout
          government-run technology applications, allowing for anyone with or
          without a disability to interact with fundamental government websites,
          kiosks, and mobile applications,{" "}
          <a
            href="https://www.section508.gov/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Section 508"
          >
            Section 508 of the Rehabilitation Act
          </a>{" "}
          was established in 1998. This section outlines all of the necessary
          components of web infrastructure to keep its promise to ensure
          applications are accessible to all.{" "}
          <a
            href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/iii-major-issues"
            target="_blank"
            rel="noopener noreferrer"
            alt="Section 508.C & D"
          >
            Section 508.C & D
          </a>{" "}
          is fundamental to this project, as it outlines the necessity for
          applications to use alternative approaches to make audio cues more
          accessible to meet the{" "}
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/#versions"
            target="_blank"
            rel="noopener noreferrer"
            alt="WCAG AAA standards"
          >
            WCAG AAA standards
          </a>
          . This relates directly to this web application, as its main focus is
          to outline and teach the necessity of creating accessible software to
          ensure individuals with hearing loss can properly identify prominent
          information in student’s web applications moving forward.
        </p>

        <h3>Validators</h3>

        <p>
          Existing validators, such as{" "}
          <a
            href="https://achecker.ca/checker/index.php"
            target="_blank"
            rel="noopener noreferrer"
            alt="AChecker"
          >
            AChecker
          </a>
          , can help to ensure this standard is met. Validators analyze a
          webpage by inputting an URL and ensure that the page follows the{" "}
          <a
            href="https://www.w3.org/TR/WCAG21/#perceivable"
            target="_blank"
            rel="noopener noreferrer"
            alt="WCAG's Perceivable accessibility principle"
          >
            WCAG's Perceivable accessibility principle
          </a>{" "}
          and satisfies each criteria as shown in{" "}
          <a
            href="https://achecker.ca/guideline/view_guideline.php?id=8"
            target="_blank"
            rel="noopener noreferrer"
          >
            AChecker's validator (1.1 - 1.4)
          </a>
          . If software is not accessible to people with hearing loss, this can
          be in violation of the{" "}
          <a
            href="https://www.ada.gov/ada_intro.htm"
            target="_blank"
            rel="noopener noreferrer"
            alt="American with Disabilities Act"
          >
            American with Disabilities Act (ADA)
          </a>{" "}
          and the individual could sue the company for their inaccessible
          software.
        </p>

        <h3>NAD vs Netflix Lawsuit</h3>

        <p>
          In 2011, the National Association of the Deaf (NAD) filed a{" "}
          <a
            href="https://www.3playmedia.com/2015/07/23/nad-v-netflix-ada-lawsuit-requires-closed-captioning-on-streaming-video/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Lawsuit"
          >
            lawsuit
          </a>{" "}
          against Netflix due to the lack of closed captioning in their
          streaming videos, which is considered as a violation of the ADA. More
          than half of all Americans use Netflix. Thus it must be made
          accessible to Deaf and Hard of Hearing viewers. Netflix argues that
          the ADA only specified that "places of public accommodation" must be
          accessible to people with disabilities and its business cannot be
          considered a "place of public accommodation" since it is not a
          physical place. Hence, Netflix is not subject to the ADA. NAD argued
          that the Internet is not exempt from the ADA, and Netflix is
          considered a shared or public activity, which makes the ADA
          applicable. The judge ruled in favor of the NAD's argument. Thus,
          Netflix had to add subtitles for their streaming videos (shown in
          Figure 1) to make their website accessible for Deaf and Hard of
          Hearing users.
        </p>

        <img src={Image1} alt="Netflix's implemented subtitles settings" />

        <div>
          <b>Figure 1</b>
          <br />
          Netflix's Implemented Captions
        </div>

        <h3>Professional Responsibility</h3>

        <p>
          As software developers, we have a professional responsibility to
          uphold the{" "}
          <a
            href="https://www.acm.org/code-of-ethics"
            target="_blank"
            rel="noopener noreferrer"
            alt="Association for Computing Machinery"
          >
            Association for Computing Machinery (ACM) code of ethics
          </a>
          ,{" "}
          <a
            href="https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities.html"
            target="_blank"
            rel="noopener noreferrer"
            alt="Convention on the Rights of Persons with Disabilities"
          >
            the Convention on the Rights of Persons with Disabilities (CRPD)
          </a>
          , and our own personal morals. We as individuals must ensure that we
          contribute to society and to human well-being, acknowledging that all
          people are stakeholders in computing{" "}
          <a
            href="https://www.acm.org/code-of-ethics#h-1.1-contribute-to-society-and-to-human-well-being,-acknowledging-that-all-people-are-stakeholders-in-computing."
            target="_blank"
            rel="noopener noreferrer"
            alt="ACM 1.1"
          >
            (ACM 1.1)
          </a>{" "}
          and that we are fair and take action not to discriminate{" "}
          <a
            href="https://www.acm.org/code-of-ethics#h-1.4-be-fair-and-take-action-not-to-discriminate."
            target="_blank"
            rel="noopener noreferrer"
            alt="ACM 1.4"
          >
            (ACM 1.4)
          </a>
          . On top of this, we must take into account the protection and
          promotion of the human rights of persons with disabilities in all
          policies and programmes, including our web development{" "}
          <a
            href="https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities/article-4-general-obligations.html"
            target="_blank"
            rel="noopener noreferrer"
            alt="CRPD Artivle"
          >
            (CRPD Article 4.C)
          </a>
          . In order to ensure we are compliant with all of these professional
          responsibilities, as well as ensure we as individuals are upholding
          our own morals, alternative approaches to audio cues must be
          considered in everything we create for the web, as without it, we are
          not treating individuals with a hearing loss as a stakeholder in
          computing, we are discriminating against their use of our
          applications, and we are not protecting the rights of these
          individuals to be able to access the internet the same as everyone
          else.{" "}
          <a
            href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/iii-major-issues"
            target="_blank"
            rel="noopener noreferrer"
            alt="Section 508.C"
          >
            Section 508.C
          </a>{" "}
          is vital to the continued success of web applications on the internet.
        </p>
      </div>
    );
  }
}

export default CaseStudy;
