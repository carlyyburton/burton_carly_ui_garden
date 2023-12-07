import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Label from './Label';

describe('Running Test #1', () => {
  test('Check Label Visible', () => {
    render(<Label label="Label" />);
    expect(document.querySelector('label')).toBeVisible();
  });
});

describe('Running Test #2', () => {
  test('Check Label Text Colour Change When Disabled', () => {
    render(<Label label="Label" disabled />);
    expect(document.querySelector('label')).toHaveStyle({ opacity: '0.5' });
  });
});
