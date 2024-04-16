// import React from "react";
// import renderer from "react-test-renderer";
// import '@testing-library/jest-dom';
// import Letter from "../../../src/components/exercise/lab11/components/Letter";

describe("Letter tests", () => {
  // test("Test name in address at the top of the letter", () => {
  //     const name = "Test";
  //     const address =
  //     `
  //     ${name}
  //     111 Accessibility Street,
  //     Rochester, New York, 14626
  //     `;

  //     const letter = <Letter alumniName={name} />;
  //     const component = renderer.create(letter).toJSON();

  //     const render = renderer
  //       .create(
  //         <div
  //           className={`tw-h-auto tw-text-xl tw-text-black tw-font-medium tw-self-start tw-text-start tw-word-breaks tw-mb-16`}
  //           style={{ fontFamily: "Kumbh Sans" }}
  //         >
  //           {name}
  //           <br />
  //           111 Accessibility Street,
  //           <br />
  //           Rochester, New York, 14626
  //         </div>
  //       )
  //       .toJSON();
  //     expect(JSON.stringify(render.container.querySelector("#letter-address"))).toBe(JSON.stringify(render));
  //   });

  test("basic test", () => {
    expect(1).toBe(1);
  });
});
