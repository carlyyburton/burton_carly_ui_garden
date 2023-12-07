import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Dropdown from "./Dropdown";

describe("Running Test #1", () => {
  test("Check Dropdown Visible", () => {
    render(<Dropdown options={[]} />);
    expect(document.querySelector("label")).toBeVisible();
  });
});

describe("Running Test #2", () => {
  test("Check Dropdown Colour Change When Disabled", () => {
    render(<Dropdown options={[]} disabled />);
    expect(document.querySelector("label")).toHaveStyle({ opacity: "0.5" });
  });
});
