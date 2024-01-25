import { fireEvent, render } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput Component Tests", () => {
  const clickFn = jest.fn();
  describe("TextInput render", () => {
    const { getByTestId } = render(<TextInput handleOnChange={clickFn} />);
    const component = getByTestId("textInput");

    it("renders button component correctly", () => {
      expect(component).toBeInTheDocument;
    });
  });

  describe("TextInput actions", () => {
    it("should type action", () => {
      const { getByTestId, findByText } = render(
        <TextInput handleOnChange={clickFn} />
      );
      const component = getByTestId("textInput");
      fireEvent.change(component, { target: { value: "Type text test" } });
      expect(findByText("Type text test")).toBeInTheDocument;
    });

    it("should only allow numbers", async () => {
      const { getByTestId, findByText } = render(
        <TextInput handleOnChange={clickFn} type="number" />
      );
      const component = getByTestId("textInput");
      fireEvent.change(component, { target: { value: "Type text test" } });
      expect(findByText("Type text test")).not.toBeInTheDocument;
      fireEvent.change(component, { target: { value: "123" } });
      expect(findByText("123")).toBeInTheDocument;
    });
  });

  it("should be required", async () => {
    const { findByText } = render(<TextInput required={true} />);
    expect(findByText("*")).toBeInTheDocument;
  });

  it("should be appear error", async () => {
    const { getByTestId } = render(<TextInput error={true} />);
    expect(getByTestId("error-textInput")).toBeInTheDocument;
  });
});
