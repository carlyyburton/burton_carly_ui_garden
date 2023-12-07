import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Text from "./Text";

describe("Running Test #1", () => {
  test("Check Text Visible", () => {
    render(<Text text="Text" />);
    expect(document.querySelector("text")).toBeVisible();
  });
});

describe("Running Test #2", () => {
  test("Check Text Color Change When Disabled", () => {
    render(<Text text="Text" disabled />);
    expect(document.querySelector("text")).toHaveStyle({ opacity: "0.5" });
  });
});
