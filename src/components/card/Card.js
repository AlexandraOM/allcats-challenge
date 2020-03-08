import React from 'react';
import Button from './button/Button';
import { ReactComponent as BestTag } from '../../assets/Allcats_badge.svg';
import styled from 'styled-components';
import { P, H1 } from '../styled/StyledComponents';

const Article = styled.article`
  width: 20vw;
  max-width: 250px;
  margin: var(--space-s);
  padding: var(--space-xs);
  background-color: white;
  @media (max-width: 768px) {
    width: 40%;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: ${props => props.height || '10rem'};
  width: 100%;
  align: center;
`;
const CardSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: var(--space-s);
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: ${props => props.height || '10rem'};
  width: 100%;
  align: center;
`;

const Best = styled(BestTag)`
  padding: var(--space-xs);
  transition: background 2s, transform 0.5s;
  &:hover {
    transform: rotate(360deg);
  }
`;

const Card = ({ cats }) => {
  return (
    <CardSection>
      {cats
        ? cats.map(cat => (
            <Article id={cat.id} data-testid={cat.id}>
              <ImageContainer imageUrl={cat.image} alt={cat.name}>
                {cat.tags[0] === 'best' ? <Best></Best> : null}
              </ImageContainer>
              <ContentContainer>
                <H1>{cat.name}</H1>
                <P>{cat.description}</P>
              </ContentContainer>
              <Button></Button>
            </Article>
          ))
        : null}
    </CardSection>
  );
};
export default Card;
