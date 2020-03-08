import React from 'react';
import styled from 'styled-components';

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
    padding: var(--space-xs);
  }
`;

const PageList = ({ burger }) => {
  console.log(burger);
  return burger !== true ? (
    <Pages>
      <A>Cat Delivery</A>
      <A>Book a visit</A>
      <A>Donate</A>
    </Pages>
  ) : null;
};
export default PageList;
