import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

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

const FighterList = ({ items }) => {
  return <StyledSegmentGroup>{items && getItems(items)}</StyledSegmentGroup>;
};

FighterList.propTypes = {
  items: PropTypes.array
};

export default FighterList;
