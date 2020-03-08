import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('The Button renders', () => {
  const { getByText, debug } = render(<Button></Button>);
  debug();
  const buttonText = getByText(/TAKE HOME/i);
  expect(buttonText).toBeInTheDocument();
});
