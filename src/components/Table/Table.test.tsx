import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Table from "./Table";

describe("Running Test #1", () => {
  test("Check Table Visible", () => {
    render(<Table th={[]} row1={[]} row2={[]} footer={[]} />);
    expect(document.querySelector("table")).toBeVisible();
  });
});

describe("Running Test #2", () => {
  test("Check Table Color Change When Disabled", () => {
    render(<Table th={[]} row1={[]} row2={[]} footer={[]} disabled />);
    expect(document.querySelector("table")).toHaveStyle({ opacity: "0.5" });
  });
});
