import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "UI-Garden/Table",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = (args) => (
  <Table data-test-id="InputField-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  th: ["First Name", "Last Name", "Job Title", "Email"],
  row1: ["John", "Stevens", "Software Engineer", "john@gmail.com"],
  row2: ["Olivia", "Smith", "Web Designer", "olivia@yahoo.com"],
  footer: ["Mark", "Williams", "Accountant", "mark@hotmail.com"],
};

export const Disabled: Story = (args) => (
  <Table data-test-id="InputField-id" {...args} />
);
Disabled.args = {
  primary: false,
  disabled: true,
  th: ["First Name", "Last Name", "Job Title", "Email"],
  row1: ["John", "Stevens", "Software Engineer", "john@gmail.com"],
  row2: ["Olivia", "Smith", "Web Designer", "olivia@yahoo.com"],
  footer: ["Mark", "Williams", "Accountant", "mark@hotmail.com"],
};
