import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("Button Component Tests", () => {
  it("renders button component correctly", () => {
    const { getByTestId } = render(<Button dataTestId="button" />);
    const component = getByTestId("button");

    expect(component).toBeInTheDocument;
  });

  it("expects to find button HTML element in the DOM", () => {
    const buttonName = "Check";
    const { getByText } = render(<Button>{buttonName}</Button>);
    const textInnerButton = getByText(buttonName);

    expect(textInnerButton).toBeInTheDocument;
  });

  it("expects to run onClick function when button is pressed", () => {
    const clickFn = jest.fn();
    const buttonName = "Check";
    const { getByText } = render(
      <Button handleClick={clickFn}>{buttonName}</Button>
    );
    const textInnerButton = getByText(buttonName);

    fireEvent.click(textInnerButton);
    expect(clickFn).toHaveBeenCalledTimes(1);
  });
});
