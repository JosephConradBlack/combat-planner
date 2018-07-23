import React from 'react';
import styled from 'styled-components';
import { Container, Segment, Button } from 'semantic-ui-react';

import Banner from './Banner';
import FighterList from './FighterList';

import FighterEditableFormContainer from '../containers/FighterEditableFormContainer';

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

const CombatPlannerPage = ({ items, onFighterUpdate }) => (
  <div>
    <Banner />
    <StyledSegment basic>
      <StyledContainer>
        <FighterList items={items} onFighterUpdate={onFighterUpdate} />
        <FighterEditableFormContainer />
      </StyledContainer>
    </StyledSegment>
  </div>
);

export default CombatPlannerPage;
