import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "UI-Garden/Label",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = (args) => (
  <Label data-test-id="InputField-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  label: "Label",
};

export const Disabled: Story = (args) => (
  <Label data-test-id="InputField-id" {...args} />
);
Disabled.args = {
  primary: false,
  disabled: true,
  label: "Label",
};
