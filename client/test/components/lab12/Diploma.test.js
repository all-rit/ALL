import React from "react";
import { render, screen } from "@testing-library/react";
import Diploma from "../../../src/components/exercise/lab12/components/Diploma";
import ExerciseStateContext from "src/components/exercise/lab12/Lab12Context";

import "@testing-library/jest-dom";

describe("Diploma Tests", () => {
  test("collegeName Test", async () => {
    const firstName = "Owen";
    const lastName = "Luts";
    const preferredName = "Jay";
    const college = "RIT";
    const major = "CS";
    const gradTerm = "Spring 2024";

    render(
      <ExerciseStateContext.Provider
        value={{ firstName, lastName, preferredName, college, major, gradTerm }}
      >
        <Diploma />
      </ExerciseStateContext.Provider>,
    );

    // ACT
    const component = await screen.findByTestId("collegeName");

    // ASSERT
    expect(component).toHaveTextContent(
      "Upon the recommendation of the President and Faculty of the " +
        college +
        " and by the Board of Trustees has conferred upon",
    );
  });

  test("First and Last Name Test", async () => {
    const firstName = "Owen";
    const lastName = "Luts";

    render(
      <ExerciseStateContext.Provider value={{ firstName, lastName }}>
        <Diploma />
      </ExerciseStateContext.Provider>,
    );

    // ACT
    const component = await screen.findByTestId("names");

    // ASSERT
    expect(component).toHaveTextContent(firstName + " " + lastName);
  });

  test("Degree Test", async () => {
    const major = "Software Engineering";

    render(
      <ExerciseStateContext.Provider value={{ major }}>
        <Diploma />
      </ExerciseStateContext.Provider>,
    );

    // ACT
    const component = await screen.findByTestId("degree");

    // ASSERT
    expect(component).toHaveTextContent(major);
  });

  test("Date Test", async () => {
    const gradTerm = "September 21st";

    render(
      <ExerciseStateContext.Provider value={{ gradTerm }}>
        <Diploma />
      </ExerciseStateContext.Provider>,
    );

    // ACT
    const component = await screen.findByTestId("date");

    // ASSERT
    expect(component).toHaveTextContent("Earned on this " + gradTerm);
  });
});
