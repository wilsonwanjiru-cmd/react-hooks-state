import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

test("increments count when button is clicked", () => {
  const { getByText } = render(<Counter />);

  // Initially, the count should be 0
  expect(getByText("Count: 0")).toBeInTheDocument();

  // Click the increment button
  const incrementButton = getByText("Increment");
  fireEvent.click(incrementButton);

  // After clicking, the count should be 1
  expect(getByText("Count: 1")).toBeInTheDocument();
});

