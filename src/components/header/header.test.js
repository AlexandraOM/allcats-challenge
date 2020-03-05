import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('The Header renders', () => {
  const { getByText } = render(<Header></Header>);
  const headerText = getByText(/Choose Cats/i);
  expect(headerText).toBeInTheDocument();
});
