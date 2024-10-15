import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Diploma from "../../../src/components/exercise/lab12/components/Diploma";
import ExerciseStateContext from "src/components/exercise/lab12/Lab12Context";
import useMainStateContext from "../../../src/reducers/MainContext";
import { ExerciseService } from "../../../src/services/lab12/ExerciseService";

import "@testing-library/jest-dom";

// Mock the router navigation
jest.mock("@reach/router", () => ({
  navigate: jest.fn(),
}));

// Mock the MainContext hook
jest.mock("../../../src/reducers/MainContext", () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock the ExerciseService
jest.mock("../../../src/services/lab12/ExerciseService", () => ({
  ExerciseService: {
    fetchExercise: jest.fn(),
  },
}));

describe("Diploma Tests", () => {
  const defaultProps = {
    firstName: "Owen",
    lastName: "Luts",
    preferredName: "Jay",
    college: "RIT",
    major: "CS",
    gradTerm: "Spring 2024",
  };

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Mock the MainContext hook return value
    useMainStateContext.mockReturnValue({
      state: {
        main: {
          user: {
            userid: 1,
          },
        },
      },
    });

    // Mock the ExerciseService.fetchExercise to resolve immediately
    ExerciseService.fetchExercise.mockResolvedValue({
      isFormRepairComplete: true,
      isDatabaseRepairComplete: true,
    });
  });

  const renderDiploma = (props = {}) => {
    const allProps = { ...defaultProps, ...props };
    return render(
      <ExerciseStateContext.Provider value={allProps}>
        <Diploma />
      </ExerciseStateContext.Provider>,
    );
  };

  test("displays college name correctly", async () => {
    renderDiploma();

    await waitFor(() => {
      const collegeElement = screen.getByTestId("collegeName");
      expect(collegeElement).toHaveTextContent(
        `Upon the recommendation of the President and Faculty of the ${defaultProps.college} and by the Board of Trustees has conferred upon`,
      );
    });
  });

  test("displays preferred name when repair is complete", async () => {
    renderDiploma();

    await waitFor(() => {
      const namesElement = screen.getByTestId("names");
      expect(namesElement).toHaveTextContent(
        `${defaultProps.preferredName} ${defaultProps.lastName}`,
      );
    });
  });

  test("displays first name when repair is not complete", async () => {
    ExerciseService.fetchExercise.mockResolvedValue({
      isFormRepairComplete: false,
      isDatabaseRepairComplete: false,
    });

    renderDiploma();

    await waitFor(() => {
      const namesElement = screen.getByTestId("names");
      expect(namesElement).toHaveTextContent(
        `${defaultProps.firstName} ${defaultProps.lastName}`,
      );
    });
  });

  test("displays correct degree", async () => {
    renderDiploma();

    await waitFor(() => {
      const degreeElement = screen.getByTestId("degree");
      expect(degreeElement).toHaveTextContent(defaultProps.major);
    });
  });

  test("displays correct graduation date", async () => {
    renderDiploma();

    await waitFor(() => {
      const dateElement = screen.getByTestId("date");
      expect(dateElement).toHaveTextContent(
        `Earned on this ${defaultProps.gradTerm}`,
      );
    });
  });
});
