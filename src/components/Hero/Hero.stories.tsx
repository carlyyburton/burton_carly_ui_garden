import React from "react";
import { Meta, StoryObj } from "@storybook/react";
const imageFile = "/src/components/Hero/banner.jpg";
import Hero from "./Hero";

const meta: Meta<typeof Hero> = {
  component: Hero,
  title: "UI-Garden/Hero",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Hero>;

export const Primary: Story = (args) => (
  <Hero data-test-id="InputField-id" {...args} />
);
Primary.args = {
  src: imageFile,
  alt: 'Hero image.',
  primary: true,
  disabled: false,
  p: "Let me build your website.",
  text: "Contact Me",
};

export const Disabled: Story = (args) => (
  <Hero data-test-id="InputField-id" {...args} />
);
Disabled.args = {
  src: imageFile,
  alt: 'Hero image.',
  primary: false,
  disabled: true,
  p: "Let me build your website.",
  text: "Contact Me",
};