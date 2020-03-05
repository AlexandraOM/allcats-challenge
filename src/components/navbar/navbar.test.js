import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('The Navbar renders', () => {
  render(<Navbar></Navbar>);
});
