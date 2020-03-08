import styled from 'styled-components';

const P = styled.p`
  text-align: start;
  margin: 0;
  padding: var(--space-xs);
  font-weight: 300;
`;
const H1 = styled.h1`
  text-align: start;
  margin: 0;
  padding: var(--space-s);
  width: 100%;
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

export { P, H1, A };
