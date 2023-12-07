import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Radio from './Radio';

describe('Running Test #1', () => {
  test('Check Radio Visible', () => {
    render(<Radio label="Radio" />);
    expect(document.querySelector('input')).toBeVisible();
  });
});

describe('Running Test #2', () => {
  test('Check Radio Color Change When Disabled', () => {
    render(<Radio label="Radio" disabled />);
    expect(document.querySelector('label')).toHaveStyle({ opacity: '0.5' });
  });
});
