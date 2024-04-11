import React from "react";
import renderer from "react-test-renderer";
import Diploma from "../../../src/components/exercise/lab12/components/Diploma";
// '../../../../assets/images/lab12/diploma_seal.png'

test("simple test", () => {
  expect(1).toBe(1);
});

describe("first", () => {
  test("some text shows up", () => {
    const diploma = <Diploma />;
    const component = renderer.create(diploma).toJSON();
    const header = renderer
      .create(
        <h1 className="tw-font-diploma tw-text-7xl tw-leading-none tw-pb-8 tw-pt-4">
          ALL University
        </h1>,
      )
      .toJSON();
    expect(JSON.stringify(component.children[0])).toBe(JSON.stringify(header));
  });
});
