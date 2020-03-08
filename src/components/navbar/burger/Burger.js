import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import PageList from '../pageList/PageList';

const BurgerMenu = ({ burger }) => {
  return burger ? (
    <Menu>
      <PageList></PageList>
    </Menu>
  ) : null;
};
export default BurgerMenu;
