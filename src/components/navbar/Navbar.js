import React from 'react';
import { ReactComponent as Logo } from '../../assets/Allcats_logo.svg';
import { ReactComponent as Home } from '../../assets/Allcats_home.svg';
import styled from 'styled-components';

const Pages = styled.div`
  align-self: flex-end;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 var(--space-m);
  flex-grow: 2;

  @media (max-width: 768px) {
    flex-grow: 1;
  }
`;
const Nav = styled.nav`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-s);
`;

const A = styled.a`
  padding: var(--space-xs);
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: var(--primary-colour);
    text-decoration: underline;
    transition: width 0.3s ease 0.5s, left 0.3s ease 0s;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo></Logo>
      <Pages>
        <A>Cat Delivery</A>
        <A>Book a visit</A>
        <A>Donate</A>
      </Pages>
      <Home></Home>
    </Nav>
  );
};
export default Navbar;
