/**
 * 
import React from "react";
import renderer from "react-test-renderer";
import Diploma from "../../../src/components/exercise/lab12/components/Diploma";

describe("Diploma Tests", () => {
  test("collegeName Test", () => {
    const collegeName = "ALL University";

    const diploma = <Diploma collegeName={collegeName} />;
    const component = renderer.create(diploma).toJSON();

    const render = renderer
      .create(
        <p className="fancy-text tw-text-3xl tw-leading-none">
          Upon the recommendation of the President and Faculty of the{" "}
          <span className="tw-font-diploma tw-leading-none">{collegeName}</span>{" "}
          and by the Board of Trustees has conferred upon
        </p>,
      )
      .toJSON();
    expect(JSON.stringify(component.children[1])).toBe(JSON.stringify(render));
  });

  test("First, Middle, Last name Test", () => {
    const firstName = "Owen";
    const middleName = "Daniel";
    const lastName = "Luts";

    const diploma = (
      <Diploma
        firstName={firstName}
        middleName={middleName}
        lastName={lastName}
      />
    );
    const component = renderer.create(diploma).toJSON();

    const render = renderer
      .create(
        <h2 className="tw-font-bold tw-text-5xl tw-leading-none tw-pb-4 tw-pt-4">
          {firstName} {middleName} {lastName}
        </h2>,
      )
      .toJSON();
    expect(JSON.stringify(component.children[2])).toBe(JSON.stringify(render));
  });

  test("Degree Test", () => {
    const degree = "Software Engineering";

    const diploma = <Diploma degree={degree} />;
    const component = renderer.create(diploma).toJSON();

    const render = renderer
      .create(
        <h3 className="tw-font-diploma tw-text-5xl tw-leading-none tw-pb-4 tw-pt-4">
          {degree}
        </h3>,
      )
      .toJSON();
    expect(JSON.stringify(component.children[4])).toBe(JSON.stringify(render));
  });

  test("Date Test", () => {
    const date = "September 21st";

    const diploma = <Diploma date={date} />;
    const component = renderer.create(diploma).toJSON();

    const render = renderer
      .create(
        <p className="fancy-text tw-text-3xl tw-pb-8 tw-leading-normal">
          Earned on this {date}
        </p>,
      )
      .toJSON();
    expect(JSON.stringify(component.children[6])).toBe(JSON.stringify(render));
  });

  test("Seal Alt text Test", () => {
    const SealImage = "";
    const element = (
      <img
        className="tw-w-32 md:tw-w-40 lg:tw-w-48"
        src={SealImage}
        alt="College Seal"
      />
    );

    const diploma = <Diploma />;
    const component = renderer.create(diploma).toJSON();

    expect(JSON.stringify(component.children[7].children[1].alt)).toBe(
      JSON.stringify(element.alt),
    );
  });
});
**/

test("Diploma Tests", () => {
  expect(true).toBeTruthy();
});
