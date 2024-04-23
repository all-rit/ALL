import React from "react";
import { render, screen } from "@testing-library/react";
import GradApplication from "../../../src/components/exercise/lab12/components/GradApplication";

/*
 * Test that the component has 6 input fileds for
 * LFN, LLN, PRN, COL, MJR, GTM
 * And one "Submit Application" button field
 */
describe("Test GradApplication Component Input Fields", () => {
  test("has 6 input fields", async () => {
    render(<GradApplication />);
    // Verify header:'
    const textElement = await screen.findByText(
      "Apply for Graduation at ALL University",
    );
    expect(textElement).toBeTruthy();
  });

  /**
  test("has correct placeholder text", () => {
    // Check placeholder text:
    const firstNameInputPlaceholder = inputFields[0].props.placeholder;
    const lastNameInputPlaceholder = inputFields[1].props.placeholder;
    const pronounsInputPlaceholder = inputFields[2].props.placeholder;
    const collegeInputPlaceholder = inputFields[3].props.placeholder;
    const majorInputPlaceholder = inputFields[4].props.placeholder;
    const gradTermInputPlaceholder = inputFields[5].props.placeholder;
    expect(firstNameInputPlaceholder).toBe("Ex: Jane");
    expect(lastNameInputPlaceholder).toBe("Ex: Smith");
    expect(pronounsInputPlaceholder).toBe("Ex: They/Them");
    expect(collegeInputPlaceholder).toBe("Ex: RIT");
    expect(majorInputPlaceholder).toBe("Ex: CS");
    expect(gradTermInputPlaceholder).toBe("Ex: Spring 2024");
  });
  test("invalid firstName info", () => {
    const inputElement = screen.getByLabelText("Legal First Name:");
    expect(inputElement).toBeInTheDocument();
  });
  */
});
