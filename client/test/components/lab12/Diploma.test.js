import React from "react";
import { render, screen } from "@testing-library/react";
import Diploma from "../../../src/components/exercise/lab12/components/Diploma";

import "@testing-library/jest-dom";

describe("Diploma Tests", () => {
  test("collegeName Test", async () => {
    const collegeName = "ALL University";
    render(<Diploma collegeName={collegeName} />);

    // ACT
    const component = await screen.findByTestId("collegeName");

    // ASSERT
    expect(component).toHaveTextContent(
      "Upon the recommendation of the President and Faculty of the " +
        collegeName +
        " and by the Board of Trustees has conferred upon",
    );
  });

  test("First, Middle, Last name Test", async () => {
    const firstName = "Owen";
    const middleName = "Daniel";
    const lastName = "Luts";

    render(
      <Diploma
        firstName={firstName}
        middleName={middleName}
        lastName={lastName}
      />,
    );

    // ACT
    const component = await screen.findByTestId("names");

    // ASSERT
    expect(component).toHaveTextContent(
      firstName + " " + middleName + " " + lastName,
    );
  });

  test("Degree Test", async () => {
    const degree = "Software Engineering";

    render(<Diploma degree={degree} />);

    // ACT
    const component = await screen.findByTestId("degree");

    // ASSERT
    expect(component).toHaveTextContent(degree);
  });

  test("Date Test", async () => {
    const date = "September 21st";

    render(<Diploma date={date} />);

    // ACT
    const component = await screen.findByTestId("date");

    // ASSERT
    expect(component).toHaveTextContent("Earned on this " + date);
  });
});
