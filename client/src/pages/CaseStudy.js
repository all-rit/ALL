import React, { Component } from 'react';
import { Link } from '@reach/router';

import Image1 from '../assets/images/casestudy/1.jpg';

class CaseStudy extends Component {
	render() {
		return (
			<div className="study">
				<h1>Case Study</h1>

				<p>
					In order to establish accessibility standards throughout government-run technology applications,
					allowing for anyone with or without a disability to interact with fundamental government websites,
					kiosks, and mobile applications,{' '}
					<a href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer">
						Section 508 of the Rehabilitation Act
					</a>{' '}
					was established in 1998. This section outlines all of the necessary components of web infrastructure
					to keep its promise to ensure applications are accessible to all.{' '}
					<a
						href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/iii-major-issues"
						target="_blank"
						rel="noopener noreferrer"
					>
						Section 508.C & D
					</a>{' '}
					is fundamental to this project, as it outlines the necessity for applications to use alternative
					approaches to make audio cues more accessible to meet the{' '}
					<a
						href="https://www.w3.org/WAI/standards-guidelines/wcag/#versions"
						target="_blank"
						rel="noopener noreferrer"
					>
						WCAG AAA standards
					</a>. This relates directly to this web application, as its main focus is to outline and teach the
					necessity of creating accessible software to ensure individuals with hearing impairment can properly
					identify prominent information in student’s web applications moving forward.
				</p>

				<p>
					Existing validators, such as{' '}
					<a href="https://achecker.ca/checker/index.php" target="_blank" rel="noopener noreferrer">
						AChecker
					</a>, can help to ensure this standard is met. Validators analyze a webpage by inputting an URL and
					ensure that the page follows the{' '}
					<a href="https://www.w3.org/TR/WCAG21/#perceivable" target="_blank" rel="noopener noreferrer">
						WCAG's Perceivable accessibility principle
					</a>{' '}
					and satisfies each criteria as shown in{' '}
					<a
						href="https://achecker.ca/guideline/view_guideline.php?id=8"
						target="_blank"
						rel="noopener noreferrer"
					>
						AChecker's validator (1.1 - 1.4)
					</a>. If software is not accessible to people with hearing impairment, this can be in violation of
					the{' '}
					<a href="https://www.ada.gov/ada_intro.htm" target="_blank" rel="noopener noreferrer">
						American with Disabilities Act (ADA)
					</a>{' '}
					and the individual could sue the company for their inaccessible software. In 2011, the National
					Association of the Deaf (NAD) filed a{' '}
					<a
						href="https://www.3playmedia.com/2015/07/23/nad-v-netflix-ada-lawsuit-requires-closed-captioning-on-streaming-video/"
						target="_blank"
						rel="noopener noreferrer"
					>
						lawsuit
					</a>{' '}
					against Netflix due to the lack of closed captioning in their streaming videos and won. Netflix had
					to add subtitles for their streaming videos (shown in Figure 1) to make their website accessible for Deaf and Hard of
					Hearing users.
				</p>

				<img src={Image1} alt="Netflix's implemented subtitles settings" />

				<div>
					Figure 1 <br />
					Netflix's Implemented Captions
				</div>

				<p>
					As software developers, we have a professional responsibility to uphold the{' '}
					<a href="https://www.acm.org/code-of-ethics" target="_blank" rel="noopener noreferrer">
						Association for Computing Machinery (ACM) code of ethics
					</a>,{' '}
					<a
						href="https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						the Convention on the Rights of Persons with Disabilities (CRPD)
					</a>, and our own personal morals. We as individuals must ensure that we contribute to society and
					to human well-being, acknowledging that all people are stakeholders in computing{' '}
					<a
						href="https://www.acm.org/code-of-ethics#h-1.1-contribute-to-society-and-to-human-well-being,-acknowledging-that-all-people-are-stakeholders-in-computing."
						target="_blank"
						rel="noopener noreferrer"
					>
						(ACM 1.1)
					</a>{' '}
					and that we are fair and take action not to discriminate{' '}
					<a
						href="https://www.acm.org/code-of-ethics#h-1.4-be-fair-and-take-action-not-to-discriminate."
						target="_blank"
						rel="noopener noreferrer"
					>
						(ACM 1.4)
					</a>. On top of this, we must take into account the protection and promotion of the human rights of
					persons with disabilities in all policies and programmes, including our web development{' '}
					<a
						href="https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities/article-4-general-obligations.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						(CRPD Article 4.C)
					</a>. In order to ensure we are compliant with all of these professional responsibilities, as well
					as ensure we as individuals are upholding our own morals, alternative approaches to audio cues must
					be considered in everything we create for the web, as without it, we are not treating individuals
					with a hearing impairment as a stakeholder in computing, we are discriminating against their use of
					our applications, and we are not protecting the rights of these individuals to be able to access the
					internet the same as everyone else. {' '}
					<a
						href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/iii-major-issues"
						target="_blank"
						rel="noopener noreferrer"
					>
						Section 508.C
					</a>{' '}
					is vital to the continued success of web applications on the internet.
				</p>

				<div className="study__actions">
					<Link to="/supplementary">&laquo; Back to Supplementary Materials</Link>
				</div>
			</div>
		);
	}
}

export default CaseStudy;
