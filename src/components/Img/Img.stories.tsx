import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Img from "./Img";
import imageFile from '/src/components/Img/cat.jpg';


const meta: Meta<typeof Img> = {
  component: Img,
  title: "UI-Garden/Img",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Img>;

export const Primary: Story = (args) => (
  <Img data-test-id="InputField-id" {...args} />
);
Primary.args = {
  src: imageFile,
  alt: 'Image of a cat.',
  primary: true,
  disabled: false,
};

export const Disabled: Story = (args) => (
  <Img data-test-id="InputField-id" {...args} />
);
Disabled.args = {
  src: imageFile,
  alt: 'Image of a cat.',
  primary: false,
  disabled: true,
};