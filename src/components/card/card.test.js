import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('The Card renders', () => {
  const { getByText } = render(<Card></Card>);
  const cardText = getByText(/Card/i);
  expect(cardText).toBeInTheDocument();
});
