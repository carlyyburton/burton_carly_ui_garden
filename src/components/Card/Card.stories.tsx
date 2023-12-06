import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import imageFile from '/src/components/Card/avatar.jpg';


const meta: Meta<typeof Card> = {
  component: Card,
  title: "UI-Garden/Card",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = (args) => (
  <Card data-test-id="InputField-id" {...args} />
);
Primary.args = {
  src: imageFile,
  alt: 'Avatar',
  h4: "Carly B",
  p: "Full Stack Developer",
  primary: true,
  disabled: false,

};

export const Disabled: Story = (args) => (
  <Card data-test-id="InputField-id" {...args} />
);
Disabled.args = {
  src: imageFile,
  alt: 'Avatar',
  h4: "Carly B",
  p: "Full Stack Developer",
  primary: false,
  disabled: true,
};