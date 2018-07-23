import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Segment, Divider } from 'semantic-ui-react';

import Banner from './Banner';
import FighterList from './FighterList';
import ButtonGroup from './ButtonGroup';

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

const CombatPlannerPage = ({
  items,
  onFighterUpdate,
  onClearFighters,
  onNextFighter
}) => (
  <div>
    <Banner />
    <StyledSegment basic>
      <StyledContainer>
        <ButtonGroup
          items={items}
          onClearFighters={onClearFighters}
          onNextFighter={onNextFighter}
        />
        <Divider />
        <FighterList items={items} onFighterUpdate={onFighterUpdate} />
        <FighterEditableFormContainer />
      </StyledContainer>
    </StyledSegment>
  </div>
);

CombatPlannerPage.propTypes = {
  items: PropTypes.array,
  onClearFighters: PropTypes.func,
  onNextFighter: PropTypes.func
};

export default CombatPlannerPage;
