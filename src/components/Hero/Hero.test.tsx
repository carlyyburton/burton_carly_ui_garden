import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Hero from "./Hero";

describe("Running Test #1", () => {
  test("Check Hero Image Visible", () => {
    render(<Hero />);
    expect(document.querySelector("img")).toBeVisible();
  });
});

describe("Running Test #2", () => {
  test("Check Hero Image Color Change When Disabled", () => {
    render(<Hero disabled />);
    expect(document.querySelector("img")).toHaveStyle({ opacity: "0.5" });
  });
});
