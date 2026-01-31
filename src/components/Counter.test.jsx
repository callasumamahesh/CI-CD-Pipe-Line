import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders initial count", () => {
  render(<Counter />);
  expect(screen.getByTestId("count-value")).toHaveTextContent("0");
});

test("increments count on button click", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("1");
});
