import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import mockCatData from '../../model/mockCatData';

test('The Card renders', () => {
  const { getByText } = render(<Card cats={mockCatData}></Card>);
  const firstCard = getByText(/Mr Business/i);
  expect(firstCard).toBeInTheDocument();
});
