import React from 'react';
import styled from 'styled-components';
import { Container, Segment } from 'semantic-ui-react';

import Banner from '../components/Banner';

import FighterEditableFormContainer from './FighterEditableFormContainer';
import FighterListContainer from './FighterListContainer';

const StyledSegment = styled(Segment)`
  &&& {
    background-color: white;
  }
`;

const StyledContainer = styled(Container)`
  &&& {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const CombatPlannerContainer = () => {
  return (
    <div>
      <Banner />
      <StyledSegment basic>
        <StyledContainer>
          <FighterListContainer />
          <FighterEditableFormContainer />
        </StyledContainer>
      </StyledSegment>
    </div>
  );
};

export default CombatPlannerContainer;
