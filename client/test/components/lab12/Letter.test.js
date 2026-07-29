import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Letter from "../../../src/components/all-components/Letter";
import { ALUMNI_NEWSLETTER_CONTENT } from "../../../src/constants/lab12/index";

describe("Letter tests", () => {
  test("provided name in appears in address at the top of the letter", () => {
    const name = "Test";

    render(
      <Letter
        alumniName={name}
        letterBody={ALUMNI_NEWSLETTER_CONTENT}
        isEditable={false}
      />,
    );

    expect(screen.getByTestId("letter-address")).toHaveTextContent(
      `${name}111 Accessibility StreetRochester, New York, 14626`,
    );
  });

  test("provided name appears in 'dear name' below the address", () => {
    const name = "Test";

    render(
      <Letter
        alumniName={name}
        letterBody={ALUMNI_NEWSLETTER_CONTENT}
        isEditable={false}
      />,
    );

    expect(screen.getByTestId("dear-name")).toHaveTextContent(`Dear ${name}`);
  });

  // this test is in progress and will be modified after tests are updated in dev/lab-12
  test("provided content appears in the body of the letter", () => {
    const name = "Test";

    render(
      <Letter
        alumniName={name}
        letterBody={ALUMNI_NEWSLETTER_CONTENT}
        isEditable={false}
      />,
    );

    expect(screen.getByTestId("letter-body")).toHaveTextContent(
      "Congratulations on graduating from ALL University! We are proud to have provided each and every student with an education in accessibility. We look forward to seeing our former students thrive in their careers and carry forward the values we’ve instilled during your time here. We encourage you to stay connected with your fellow alumni and the university itself. We hope to see you attend alumni events, participate in mentorship programs and give back to the ALL community. We will be keeping alumni up to date with various volunteering opportunities and alumni events on campus! All of us here from ALL University wish you the best of luck and are excited to see where your education takes you!",
    );
  });
});
