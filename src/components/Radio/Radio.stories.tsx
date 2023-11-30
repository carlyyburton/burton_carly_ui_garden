import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "UI-Garden/Radio",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Primary: Story = (args) => (
  <Radio data-test-id="InputField-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  label: "Radio Button",
};

export const Disabled: Story = (args) => (
  <Radio data-test-id="InputField-id" {...args} />
);
Disabled.args = {
  primary: false,
  disabled: true,
  label: "Radio Button",
};