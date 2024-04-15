import React from "react";
import renderer from "react-test-renderer";
import GradApplication from "../../../src/components/exercise/lab12/GradApplication";

/*
 * Test that the component has 6 input fileds for
 * LFN, LLN, PRN, COL, MJR, GTM
 * And one "Submit Application" button field
 */
describe("Test GradApplication Component Input Fields", () => {
  it("has 6 input fields", () => {
    const component = renderer.create(<GradApplication />);
    const rootInstance = component.root;

    // Verify header:
    const textElement = rootInstance.findByProps({
      children: "Apply for Graduation at ALL University",
    });
    expect(textElement).toBeTruthy();

    // Verify input fields:
    const inputFields = rootInstance.findAllByType("input");
    expect(inputFields.length).toBe(6);
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

// describe("Test logging", () => {
//   const testRenderer = renderer.create(<GradApplication />);
//   const testInstance = testRenderer.root;

//   // manually trigger the callback
//   renderer.act(() => {
//     tree.props.onMouseEnter();
//   });
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // Trigger an update lifecycle
//   testInstance.findByType('button').props.onClick();
//   // Assert on the new state of the component
//   // expect(testInstance.findByType('button').children[1]).toBe('1');
// });

// describe("Test GradApplication Component", () => {
//   it("renders correctly", () => {
//     const { getByText, getByPlaceholderText } = render(<GradApplication />);

//     // Test if the main heading is rendered ?? is this necessary
//     expect(getByText("Apply for Graduation at ALL University")).toBeInTheDocument();

//     // Test if input fields are rendered
//     expect(getByPlaceholderText("Ex: Jane")).toBeInTheDocument();
//     expect(getByPlaceholderText("Ex: Smith")).toBeInTheDocument();
//     expect(getByPlaceholderText("Ex: They/Them")).toBeInTheDocument();
//     expect(getByPlaceholderText("Ex: RIT")).toBeInTheDocument();
//     expect(getByPlaceholderText("Ex: CS")).toBeInTheDocument();
//     expect(getByPlaceholderText("Ex: Spring 2024")).toBeInTheDocument();
//   });

//   it("validates input correctly", () => {
//     const { getByPlaceholderText, getByText } = render(<GradApplication />);

//     // Fill in input fields with invalid data
//     // fireEvent allows us to simulate user interactions with the application that change its state
//     fireEvent.change(getByPlaceholderText("Ex: Jane"), { target: { value: "Jane123" } });
//     fireEvent.change(getByPlaceholderText("Ex: Smith"), { target: { value: "Smith123" } });
//     fireEvent.change(getByPlaceholderText("Ex: They/Them"), { target: { value: "They/Them123" } });
//     fireEvent.change(getByPlaceholderText("Ex: RIT"), { target: { value: "RIT123" } });
//     fireEvent.change(getByPlaceholderText("Ex: CS"), { target: { value: "CS123" } });
//     fireEvent.change(getByPlaceholderText("Ex: Spring 2024"), { target: { value: "Spring 2024!" } });

//     fireEvent.click(getByText("Submit Application"));

//     // Check if error messages are displayed
//     // idk if this works yet
//     expect(getByText("Error: Invalid character.")).toBeInTheDocument();
//     expect(getByText("Error: Invalid character.")).toBeInTheDocument();
//     expect(getByText("Error: Invalid character.")).toBeInTheDocument();
//     expect(getByText("Error: Invalid character.")).toBeInTheDocument();
//     expect(getByText("Error: Invalid character.")).toBeInTheDocument();
//     expect(getByText("Error: Invalid character.")).toBeInTheDocument();

//     // Fill in input fields with empty data
//     fireEvent.change(getByPlaceholderText("Ex: Jane"), { target: { value: " " } });
//     fireEvent.change(getByPlaceholderText("Ex: Smith"), { target: { value: " " } });
//     fireEvent.change(getByPlaceholderText("Ex: They/Them"), { target: { value: "    " } });
//     fireEvent.change(getByPlaceholderText("Ex: RIT"), { target: { value: ".  " } });
//     fireEvent.change(getByPlaceholderText("Ex: CS"), { target: { value: "" } });
//     fireEvent.change(getByPlaceholderText("Ex: Spring 2024"), { target: { value: "" } });

//     // Check if error messages are displayed
//     expect(getByText("Error: Input required.")).toBeInTheDocument();
//     expect(getByText("Error: Input required.")).toBeInTheDocument();
//     expect(getByText("Error: Input required.")).toBeInTheDocument();
//     expect(getByText("Error: Input required.")).toBeInTheDocument();
//     expect(getByText("Error: Input required.")).toBeInTheDocument();
//     expect(getByText("Error: Input required.")).toBeInTheDocument();
//   });
// });

// // describe("Grad Application Tests", () => {

// //   const render = renderer;

// //   test('Test component has 6 input fields', () => {
// //     const { container } = render(<GradApplication />); // Render component
// //     // Get all input elements within the rendered GradApplication
// //     const inputFields = container.querySelectorAll('input');
// //     // Assert that there are 6 fields (LFN, LLN, PR, COL, MJ, GT)
// //     expect(inputFields.length).toBe(6);
// //   });

// //   test('Test component has 1 button field', () => {
// //     const { container } = render(<GradApplication />);
// //     const buttonField = container.querySelectorAll('button');
// //     expect(buttonField.length).toBe(1);
// //   });

// //   test("LFN", async () => {
// //     const user = userEvent.setup();

// //     const updateCallback = vi.fn()
// //     render(<MyTest value="" updateCallback={updateCallback}/>)

// //     const input = screen.getByLabelText("My Test");

// //     await act(async () => await user.type(input, "my-value"));

// //     expect(updateCallback).toHaveBeenLastCalledWith("my-value");
// //   });
// // });

// // export default Test;
