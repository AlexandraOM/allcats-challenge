import React from 'react';
import { ReactComponent as Logo } from '../../assets/Allcats_logo.svg';
import { ReactComponent as Home } from '../../assets/Allcats_home.svg';
import styled from 'styled-components';

const Top = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-xs);
`;

const Navbar = () => {
  return (
    <Top>
      <Logo></Logo>
      <nav>
        <a>Cat Delivery</a>
        <a>Book a visit</a>
        <a>Donate</a>
      </nav>
      <Home></Home>
    </Top>
  );
};
export default Navbar;
