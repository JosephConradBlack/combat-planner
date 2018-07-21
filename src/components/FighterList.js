import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import posed, { PoseGroup } from 'react-pose';

import _ from 'underscore';

import Fighter from './Fighter';

const MAX_INT = -9007199254740991;

const StyledSegmentGroup = styled(Segment.Group)`
  &&& {
    margin-bottom: 30px;
  }
`;

// Override Segment styling to re-implement Segment.Group>Segment styling after it is interrupted
//  by the intervening posed Item
const StyledFighter = styled(Fighter)`
  &&&& {
    border-top: none;
    margin-top: 0;
    bottom: 0;
    margin-bottom: 0;
    top: 0;
    border: none;
    
    border-radius: ${props =>
      props.index !== 0 ? '0' : '.28571429rem .28571429rem 0 0'}
    border-top:  ${props =>
      props.index === 0 ? '0' : '1px solid rgba(34, 36, 38, 0.15)'};
    border-radius: ${props =>
      props.index !== props.lastIndex ? '0' : '0 0 0.28571429rem 0.28571429rem'}
  }
`;

const prefilItemsWithPlaceholders = items => {
  if (items.length > 3) return items;

  return _
    .range(0, 3 - items.length)
    .map(num => ({ id: num, placeholder: true }))
    .concat(items);
};

const orderItems = items => {
  return _.sortBy(
    items,
    item => -1 * (item.initiative ? item.initiative : MAX_INT)
  );
};

const getItems = (items, lastIndex, onFighterUpdate) =>
  items.map((item, index) => (
    <Item key={item.id}>
      {item.placeholder ? (
        <StyledFighter key={item.id} />
      ) : (
        <StyledFighter
          key={item.id}
          index={index}
          lastIndex={lastIndex}
          item={item}
          handleChange={onFighterUpdate}
        />
      )}
    </Item>
  ));

const Item = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const FighterList = ({ items, onFighterUpdate }) => {
  const itemsWithPlaceholders = prefilItemsWithPlaceholders(orderItems(items));
  const lastIndex = itemsWithPlaceholders.length - 1;

  return (
    <StyledSegmentGroup>
      <PoseGroup>
        {getItems(itemsWithPlaceholders, lastIndex, onFighterUpdate)}
      </PoseGroup>
    </StyledSegmentGroup>
  );
};

FighterList.propTypes = {
  items: PropTypes.array,
  onFighterUpdate: PropTypes.func
};

FighterList.defaultProps = {
  items: []
};

export default FighterList;
