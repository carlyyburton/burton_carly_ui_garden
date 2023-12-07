import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'UI-Garden/Button',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
  <Button data-test-id="InputField-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  text: 'Enabled',
};

export const Disabled: Story = (args) => (
  <Button data-test-id="InputField-id" {...args} />
);
Disabled.args = {
  primary: false,
  disabled: true,
  text: 'Disabled',
};
