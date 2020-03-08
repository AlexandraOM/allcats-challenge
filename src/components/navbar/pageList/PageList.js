import React from 'react';
import styled from 'styled-components';
import { A } from '../../styled/StyledComponents';

const Pages = styled.div`
  align-self: flex-end;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 var(--space-m);
  flex-grow: 2;

  @media (max-width: 768px) {
    width: 100%
    padding: var(--space-xs);
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PageList = ({ burger }) => {
  return burger !== true ? (
    <Pages>
      <A>Cat Delivery</A>
      <A>Book a visit</A>
      <A>Donate</A>
    </Pages>
  ) : null;
};
export default PageList;
