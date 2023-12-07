import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Card from './Card';

describe('Running Test #1', () => {
  test('Check Card Visible', () => {
    render(<Card />);
    expect(document.querySelector('img')).toBeVisible();
  });
});

describe('Running Test #2', () => {
  test('Check Card Color Change When Disabled', () => {
    render(<Card disabled />);
    expect(document.querySelector('img')).toHaveStyle({ opacity: '0.5' });
  });
});
