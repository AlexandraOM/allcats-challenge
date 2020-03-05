import React from 'react';
import styled from 'styled-components';

const TakeHome = styled.button`
  background-color: var(--primary-colour);
  cursor: pointer;
  border: none;
  padding: var(--space-s) var(--space-m);
  color: white;
  width: 100%;
`;
const Button = () => {
  return <TakeHome>TAKE HOME</TakeHome>;
};
export default Button;
