import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component tests", () => {
  it("renders App component correctly", () => {
    const { getByTestId } = render(<App />);
    const component = getByTestId("App");

    // For toBeInTheDocument() to be a function
    // and be able to perform validation, it is
    // necessary to import "@testing-library/jest-dom"

    expect(component).toBeInTheDocument();
  });
});
