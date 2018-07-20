import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Item } from 'semantic-ui-react';

import TextIcon from './TextIcon';

const StyledTextIcon = styled(TextIcon)`
  &&& {
    position: relative;
  }
`;

const IconWrapper = styled(Item.Extra)`
  &&& {
    display: inline-block;
    position: absolute;
    right: ${props => props.position * 33 * 2}px;
    margin-right: 5px;
  }
`;

const FighterIcon = ({ icon, number, color, position }) => {
  return (
    <IconWrapper position={position}>
      <StyledTextIcon icon={icon} number={number} color={color} />
    </IconWrapper>
  );
};

FighterIcon.propTypes = {
  icon: PropTypes.string,
  number: PropTypes.number,
  color: PropTypes.string,
  position: PropTypes.number
};

FighterIcon.defaultProps = {
  position: 0
};

export default FighterIcon;
