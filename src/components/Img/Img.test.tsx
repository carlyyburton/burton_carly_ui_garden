import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Img from "./Img";

describe("Running Test #1", () => {
  test("Check Image Visible", () => {
    render(<Img />);
    expect(
      document.querySelector('img')
    ).toBeVisible();
  });
});

describe("Running Test #2", () => {
  test("Check Image Color Change When Disabled", () => {
    render(<Img disabled/>);
    expect(
      document.querySelector('img')
    ).toHaveStyle({ opacity: '0.5' })
  });
});