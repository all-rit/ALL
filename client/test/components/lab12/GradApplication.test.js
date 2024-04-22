import React from "react";
import renderer from "react-test-renderer";
import GradApplication from "../../../src/components/exercise/lab12/components/GradApplication";

/*
 * Test that the component has 6 input fileds for
 * LFN, LLN, PRN, COL, MJR, GTM
 * And one "Submit Application" button field
 */
describe("Test GradApplication Component Input Fields", () => {
  const component = renderer.create(<GradApplication />);
  const rootInstance = component.root;
  const inputFields = rootInstance.findAllByType("input");

  it("has 6 input fields", () => {
    // Verify header:
    const textElement = rootInstance.findByProps({
      children: "Apply for Graduation at ALL University",
    });
    expect(textElement).toBeTruthy();

    // Verify input fields:
    expect(inputFields.length).toBe(6);
  });
  it("has correct placeholder text", () => {
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
  it("has correct button text", () => {
    // Verify button:
    const buttons = rootInstance.findAllByType("button");
    const submitButton = buttons.find(
      (button) => button.props.children === "Submit Application",
    );

    // Check if button with text "Submit Application" exists
    expect(submitButton).toBeTruthy();
  });
});

/*
 * Snapshot testing allows you to automatically save a copy
 * of the rendered output of your components and compare it
 * to the output in future tests. This helps catch
 * unintended changes in your components.
 */

describe("Test GradApplication Component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<GradApplication />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
