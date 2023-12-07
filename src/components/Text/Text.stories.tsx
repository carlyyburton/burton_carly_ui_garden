import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'UI-Garden/Text',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = (args) => (
  <Text data-test-id="InputField-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const Disabled: Story = (args) => (
  <Text data-test-id="InputField-id" {...args} />
);
Disabled.args = {
  primary: false,
  disabled: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
