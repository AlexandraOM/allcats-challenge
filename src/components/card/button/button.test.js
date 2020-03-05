import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('The Button renders', () => {
  const { getByText } = render(<Button></Button>);
  const buttonText = getByText(/button/i);
  expect(buttonText).toBeInTheDocument();
});
