import React from 'react';
import Button from './button/Button';
import { ReactComponent as BestTag } from '../../assets/Allcats_badge.svg';
import styled from 'styled-components';

const Article = styled.article`
  border: 1px solid black;
`;
const Card = ({ cats }) => {
  return cats
    ? cats.map(cat => (
        <Article>
          <h1>{cat.name}</h1>
          {cat.tags[0] === 'best' ? <BestTag></BestTag> : null}
          <img src={cat.image} alt={cat.name}></img>
          <p>{cat.description}</p>
        </Article>
      ))
    : null;
};
export default Card;
