import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { A } from '../../styled/StyledComponents';
import './burger.css';

const BurgerMenu = ({ burger }) => {
  return burger ? (
    <Menu isOpen={false} width={'30vw'}>
      <A>Cat Delivery</A>
      <A>Book a visit</A>
      <A>Donate</A>
    </Menu>
  ) : null;
};
export default BurgerMenu;
