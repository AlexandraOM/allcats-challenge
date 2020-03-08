import React from 'react';
import { ReactComponent as Logo } from '../../assets/Allcats_logo.svg';
import { ReactComponent as Home } from '../../assets/Allcats_home.svg';
import styled from 'styled-components';
import PageList from './pageList/PageList';
import BurgerMenu from './burger/Burger';

const Nav = styled.nav`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-s) var(--space-xl);
  @media (max-width: 768px) {
    padding: var(--space-xs);
  }
`;

const Navbar = () => {
  const [burger, setBurger] = React.useState(false);

  React.useEffect(() => {
    const handleResize = width => {
      if (window.innerWidth > 768) {
        setBurger(false);
      } else {
        setBurger(true);
      }
    };
    handleResize(window.innerWidth);
    // listen for when the layout is begin resized
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Nav>
      <BurgerMenu burger={burger}></BurgerMenu>
      <Logo></Logo>
      <PageList burger={burger}></PageList>
      <Home></Home>
    </Nav>
  );
};
export default Navbar;
