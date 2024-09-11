import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GradApplication from "../../../src/components/exercise/lab12/components/GradApplication";
import ExerciseStateContext from "src/components/exercise/lab12/Lab12Context";

/*
 * Test that the component has 5 input fileds for
 * LFN, LLN, Preferred Name, PRN, COL, MJR, GTM
 * And one "Submit Application" button field
 */
describe("Test GradApplication Component Input Fields Before Repair", () => {
  test("has 5 input fields", async () => {
    render(<GradApplication />);
    // Verify header:
    const textElement = await screen.findByText(
      "Apply for Graduation at ALL University",
    );
    expect(textElement).toBeTruthy();
  });

  test("has correct placeholder text", async () => {
    // Check placeholder text:
    render(<GradApplication />);
    const firstNameInputPlaceholder =
      await screen.getByPlaceholderText("Ex: Jane").placeholder;
    const lastNameInputPlaceholder =
      await screen.getByPlaceholderText("Ex: Smith").placeholder;
    const collegeInputPlaceholder =
      await screen.getByPlaceholderText("Ex: RIT").placeholder;
    const majorInputPlaceholder =
      await screen.getByPlaceholderText("Ex: CS").placeholder;
    const gradTermInputPlaceholder =
      await screen.getByPlaceholderText("Ex: Spring 2024").placeholder;
    expect(firstNameInputPlaceholder).toBe("Ex: Jane");
    expect(lastNameInputPlaceholder).toBe("Ex: Smith");
    expect(collegeInputPlaceholder).toBe("Ex: RIT");
    expect(majorInputPlaceholder).toBe("Ex: CS");
    expect(gradTermInputPlaceholder).toBe("Ex: Spring 2024");
  });
  test("invalid firstName info", async () => {
    render(<GradApplication />);
    const inputElement = await screen.getByLabelText("*Legal First Name:");
    expect(inputElement).toBeTruthy();
  });
});
describe("Test GradApplication Component", () => {
  it("renders correctly", () => {
    render(<GradApplication />);

    //Test if the main heading is rendered
    expect(
      screen.getByText("Apply for Graduation at ALL University"),
    ).toBeTruthy();

    //Test if input fields are rendered
    expect(screen.getByPlaceholderText("Ex: Jane")).toBeTruthy();
    expect(screen.getByPlaceholderText("Ex: Smith")).toBeTruthy();
    expect(screen.getByPlaceholderText("Ex: RIT")).toBeTruthy();
    expect(screen.getByPlaceholderText("Ex: CS")).toBeTruthy();
    expect(screen.getByPlaceholderText("Ex: Spring 2024")).toBeTruthy();
  });

  it("validates input (invalid characters) correctly", () => {
    const firstName = "Jane123";
    const setFirstName = jest.fn();
    const lastName = "Smith123";
    const setLastName = jest.fn();
    const college = "RIT123";
    const setCollege = jest.fn();
    const major = "CS123";
    const setMajor = jest.fn();
    const gradTerm = "Spring 2024!";
    const setGradTerm = jest.fn();

    render(
      <ExerciseStateContext.Provider
        value={{
          firstName,
          setFirstName,
          lastName,
          setLastName,
          college,
          setCollege,
          major,
          setMajor,
          gradTerm,
          setGradTerm,
        }}
      >
        <GradApplication />
      </ExerciseStateContext.Provider>,
    );

    fireEvent.click(screen.getByText("Submit Application"));

    //Check if error messages are displayed
    const errorMessages = screen.getAllByLabelText("Error: Invalid character.");
    expect(errorMessages).toHaveLength(5);
  });

  it("validates input (empty input) correctly", () => {
    const firstName = " ";
    const setFirstName = jest.fn();
    const lastName = " ";
    const setLastName = jest.fn();
    const college = " ";
    const setCollege = jest.fn();
    const major = " ";
    const setMajor = jest.fn();
    const gradTerm = " ";
    const setGradTerm = jest.fn();

    render(
      <ExerciseStateContext.Provider
        value={{
          firstName,
          setFirstName,
          lastName,
          setLastName,
          college,
          setCollege,
          major,
          setMajor,
          gradTerm,
          setGradTerm,
        }}
      >
        <GradApplication />
      </ExerciseStateContext.Provider>,
    );

    fireEvent.click(screen.getByText("Submit Application"));
    //Check if error messages are displayed
    const error2Messages = screen.getAllByLabelText("Error: Input required.");
    expect(error2Messages).toHaveLength(5);
  });
});

describe("Grad Application Tests", () => {
  test("component has 5 input fields", () => {
    const { container } = render(<GradApplication />);
    // Get all input elements within the rendered GradApplication
    const inputFields = container.querySelectorAll("input");
    // Assert that there are 5 fields (LFN, LLN, COL, MJ, GT) before repair
    expect(inputFields.length).toBe(5);
  });

  test("component has 1 button field", () => {
    const { container } = render(<GradApplication />);
    const buttonField = container.querySelectorAll("button");
    expect(buttonField.length).toBe(1);
  });
});
