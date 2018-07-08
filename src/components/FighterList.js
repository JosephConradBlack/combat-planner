import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import _ from 'underscore';

import Fighter from './Fighter';

const StyledSegmentGroup = styled(Segment.Group)`
  &&& {
    margin-bottom: 30px;
  }
`;

const getItems = items => {
  return items.map((item, index) => (
    <Fighter key={item.id} index={index} item={item} />
  ));
};

const getItemsPlaceholder = items => {
  const numPlaceholders = items ? 3 - items.length : 3;

  return (
    <React.Fragment>
      {_.times(numPlaceholders, idx => <Fighter key={idx} />)}
    </React.Fragment>
  );
};
const FighterList = ({ items }) => {
  return (
    <StyledSegmentGroup>
      {items && items.length > 0 && getItems(items)}
      {(!items || items.length < 3) && getItemsPlaceholder(items)}
    </StyledSegmentGroup>
  );
};

FighterList.propTypes = {
  items: PropTypes.array
};

export default FighterList;
