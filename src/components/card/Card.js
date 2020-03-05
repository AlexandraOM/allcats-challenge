import React from 'react';
import Button from './button/Button';
import { ReactComponent as BestTag } from '../../assets/Allcats_badge.svg';
import styled from 'styled-components';

const Article = styled.article`
  border: 1px solid black;
  width: 20vw;
  margin: var(--space-s);
  padding: var(--space-xs);
  background-color: white;

  @media (max-width: 768px) {
    width: 40%;
  }
`;
const ImageContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: ${props => props.height || '10rem'};
  width: 100%;
  align: center;
`;
const CardSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;

const Card = ({ cats }) => {
  return (
    <CardSection>
      {cats
        ? cats.map(cat => (
            <Article>
              <ImageContainer imageUrl={cat.image} alt={cat.name}>
                {cat.tags[0] === 'best' ? <BestTag></BestTag> : null}
              </ImageContainer>
              <h1>{cat.name}</h1>

              <p>{cat.description}</p>
              <Button></Button>
            </Article>
          ))
        : null}
    </CardSection>
  );
};
export default Card;
