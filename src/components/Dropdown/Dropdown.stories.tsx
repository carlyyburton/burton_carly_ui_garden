import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: "UI-Garden/Dropdown",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = (args) => (
  <Dropdown data-test-id="InputField-id" {...args} />
);
Primary.args = {
  label: "Select your Province: ",
  name: "option",
  options: [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
  ],
  primary: true,
  disabled: false,
};

export const Disabled: Story = (args) => (
  <Dropdown data-test-id="InputField-id" {...args} />
);
Disabled.args = {
  label: "Select your Province: ",
  name: "option",
  options: [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
  ],
  primary: false,
  disabled: true,
};
