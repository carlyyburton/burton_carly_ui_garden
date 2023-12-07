import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Running Test #1', () => {
  test('Check Button Visible', () => {
    render(<Button text="Button" />);
    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
  });
});

describe('Running Test #2', () => {
  test('Check Button Color Change When Disabled', () => {
    render(<Button text="Button" disabled />);
    expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle({
      opacity: '0.5',
    });
  });
});
