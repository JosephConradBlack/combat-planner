import React from 'react';
import styled from 'styled-components';
import { Segment, Header, Container } from 'semantic-ui-react';

const StyledSegment = styled(Segment)`
  &&& {
    min-height: 400px;
    background-color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const BigHeaderContainer = styled(Container)`
  &&& {
    z-index: 10;
  }
`;

const BigHeader = styled(Header)`
  &&& {
    font-size: ${props => props.theme.h1.fontSize};
    font-weight: ${props => props.theme.h1.fontWeight};
    letter-spacing: ${props => props.theme.h1.letterSpacing};
    z-index: 10;
  }
`;

const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;

  background-color: #2c3e50;
`;

const HeroImage = styled.div`
  height: 100%;
  width: 100%;

  background-image: url(hero.jpeg);
  background-size: 200%;
  background-position: center center;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  mix-blend-mode: multiply;
`;

const Banner = () => {
  return (
    <StyledSegment inverted vertical textAlign="center">
      <HeroContainer>
        <HeroImage src="hero.jpg" />
      </HeroContainer>
      <BigHeaderContainer>
        <BigHeader inverted as="h1">
          Combat Tracker
        </BigHeader>
      </BigHeaderContainer>
    </StyledSegment>
  );
};

export default Banner;
