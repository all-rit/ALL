import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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

  test("has correct placeholder text", async () => {
    // Check placeholder text:
    render(<GradApplication />);
    const firstNameInputPlaceholder =
      await screen.getByPlaceholderText("Ex: Jane").placeholder;
    const lastNameInputPlaceholder =
      await screen.getByPlaceholderText("Ex: Smith").placeholder;
    const pronounsInputPlaceholder =
      await screen.getByPlaceholderText("Ex: They/Them").placeholder;
    const collegeInputPlaceholder =
      await screen.getByPlaceholderText("Ex: RIT").placeholder;
    const majorInputPlaceholder =
      await screen.getByPlaceholderText("Ex: CS").placeholder;
    const gradTermInputPlaceholder =
      await screen.getByPlaceholderText("Ex: Spring 2024").placeholder;
    expect(firstNameInputPlaceholder).toBe("Ex: Jane");
    expect(lastNameInputPlaceholder).toBe("Ex: Smith");
    expect(pronounsInputPlaceholder).toBe("Ex: They/Them");
    expect(collegeInputPlaceholder).toBe("Ex: RIT");
    expect(majorInputPlaceholder).toBe("Ex: CS");
    expect(gradTermInputPlaceholder).toBe("Ex: Spring 2024");
  });
  test("invalid firstName info", async () => {
    render(<GradApplication />);
    const inputElement = await screen.getByLabelText("Legal First Name:");
    expect(inputElement).toBeTruthy();
  });
});
describe("Test GradApplication Component", () => {
  it("renders correctly", () => {
    render(<GradApplication />);

    //Test if the main heading is rendered ?? is this necessary
    expect(
      screen.getByText("Apply for Graduation at ALL University"),
    ).toBeTruthy();

    //Test if input fields are rendered
    expect(screen.getByPlaceholderText("Ex: Jane")).toBeTruthy();
    expect(screen.getByPlaceholderText("Ex: Smith")).toBeTruthy();
    expect(screen.getByPlaceholderText("Ex: They/Them")).toBeTruthy();
    expect(screen.getByPlaceholderText("Ex: RIT")).toBeTruthy();
    expect(screen.getByPlaceholderText("Ex: CS")).toBeTruthy();
    expect(screen.getByPlaceholderText("Ex: Spring 2024")).toBeTruthy();
  });

  it("validates input correctly", () => {
    render(<GradApplication />);

    //Fill in input fields with invalid data
    //fireEvent allows us to simulate user interactions with the application that change its state
    fireEvent.change(screen.getByPlaceholderText("Ex: Jane"), {
      target: { value: "Jane123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Ex: Smith"), {
      target: { value: "Smith123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Ex: They/Them"), {
      target: { value: "They/Them123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Ex: RIT"), {
      target: { value: "RIT123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Ex: CS"), {
      target: { value: "CS123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Ex: Spring 2024"), {
      target: { value: "Spring 2024!" },
    });

    fireEvent.click(screen.getByText("Submit Application"));

    //Check if error messages are displayed
    //idk if this works yet
    const errorMessages = screen.getAllByText("Error: Invalid character.");
    expect(errorMessages).toHaveLength(6);

    //Fill in input fields with empty data
    fireEvent.change(screen.getByPlaceholderText("Ex: Jane"), {
      target: { value: " " },
    });
    fireEvent.change(screen.getByPlaceholderText("Ex: Smith"), {
      target: { value: " " },
    });
    fireEvent.change(screen.getByPlaceholderText("Ex: They/Them"), {
      target: { value: "    " },
    });
    fireEvent.change(screen.getByPlaceholderText("Ex: RIT"), {
      target: { value: ".  " },
    });
    fireEvent.change(screen.getByPlaceholderText("Ex: CS"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByPlaceholderText("Ex: Spring 2024"), {
      target: { value: "" },
    });
    fireEvent.click(screen.getByText("Submit Application"));
    //Check if error messages are displayed
    const error2Messages = screen.getAllByText("Error: Input required.");
    expect(error2Messages).toHaveLength(6);
  });
});

describe("Grad Application Tests", () => {
  test("component has 6 input fields", () => {
    const { container } = render(<GradApplication />); // Render component
    // Get all input elements within the rendered GradApplication
    const inputFields = container.querySelectorAll("input");
    // Assert that there are 6 fields (LFN, LLN, PR, COL, MJ, GT)
    expect(inputFields.length).toBe(6);
  });

  test("component has 1 button field", () => {
    const { container } = render(<GradApplication />);
    const buttonField = container.querySelectorAll("button");
    expect(buttonField.length).toBe(1);
  });
  /**
   test("LFN", async () => {
     const user = userEvent.setup();

     const updateCallback = vi.fn()
     render(<MyTest value="" updateCallback={updateCallback}/>)

     const input = screen.getByLabelText("My Test");

     await act(async () => await user.type(input, "my-value"));

     expect(updateCallback).toHaveBeenLastCalledWith("my-value");
   });
   */
});
