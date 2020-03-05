import React from 'react';
import styled from 'styled-components';

const TakeHome = styled.button`
  background-color: var(--primary-colour);
  cursor: pointer;
`;
const Button = () => {
  return <TakeHome>TAKE HOME</TakeHome>;
};
export default Button;
