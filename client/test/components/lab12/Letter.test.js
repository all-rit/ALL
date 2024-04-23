import React from "react";
import renderer from "react-test-renderer";
import Letter from "../../../src/components/exercise/lab11/components/Letter";
import { ALUMNI_NEWSLETTER_CONTENT } from "../../../src/constants/lab12/index";

describe("Letter tests", () => {
  test("provided name in appears in address at the top of the letter", () => {
    const name = "Test";

    const letter = (
      <Letter
        alumniName={name}
        letterBody={ALUMNI_NEWSLETTER_CONTENT}
        isEditable={false}
      />
    );
    const component = renderer.create(letter).toJSON();

    const render = renderer
      .create(
        <div
          className={`tw-h-auto tw-text-xl tw-text-black tw-font-medium tw-self-start tw-text-start tw-word-breaks tw-mb-16`}
          style={{ fontFamily: "Kumbh Sans" }}
        >
          {name}
          <br />
          111 Accessibility Street,
          <br />
          Rochester, New York, 14626
        </div>,
      )
      .toJSON();
    expect(
      JSON.stringify(component.children[1].children[1].children[0].children[0]),
    ).toBe(JSON.stringify(render));
  });

  test("provided name appears in 'dear name' below the address", () => {
    const name = "Test";

    const letter = (
      <Letter
        alumniName={name}
        letterBody={ALUMNI_NEWSLETTER_CONTENT}
        isEditable={false}
      />
    );
    const component = renderer.create(letter).toJSON();

    const render = renderer
      .create(
        <div
          className={`tw-h-auto tw-text-xl tw-text-black tw-font-bold tw-self-start tw-mb-10`}
          style={{ fontFamily: "Kumbh Sans" }}
        >
          Dear {name},
        </div>,
      )
      .toJSON();
    expect(
      JSON.stringify(component.children[1].children[1].children[0].children[1]),
    ).toBe(JSON.stringify(render));
  });

  // this test is in progress and will be modified after tests are updated in dev/lab-12
  // test("Test provided content appears in the body of the letter", () => {
  //   const name = "Test";

  //   const letter = <Letter alumniName={name} letterBody={ALUMNI_NEWSLETTER_CONTENT} isEditable={false} />;
  //   const component = renderer.create(letter).toJSON();

  //   const render = renderer
  //     .create(
  //       <div
  //         id="editable-letter"
  //         aria-label="Please edit the letter below to change Fog Index."
  //         contentEditable={false}
  //         suppressContentEditableWarning={true}
  //         tabIndex={0}
  //         className={`tw-px-2 tw-text-black tw-text-xl tw-font-medium tw-break-words tw-text-start`}
  //         style={{ fontFamily: "Kumbh Sans" }}
  //       >
  //         Congratulations on graduating from ALL University! We are proud to have provided each and every student with an education in accessibility.
  //         We look forward to seeing our former students thrive in their careers and carry forward the values we’ve instilled during your time here.
  //         We encourage you to stay connected with your fellow alumni and the university itself.
  //         We hope to see you attend alumni events, participate in mentorship programs and give back to the ALL community.
  //         We will be keeping alumni up to date with various volunteering opportunities and alumni events on campus!
  //         All of us here from ALL University wish you the best of luck and are excited to see where your education takes you!
  //       </div>
  //     )
  //     .toJSON();
  //   expect(JSON.stringify(component.children)).toBe(JSON.stringify(render));
  // });
});
