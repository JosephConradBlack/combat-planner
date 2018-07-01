import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Item, Icon } from 'semantic-ui-react';

const IconContainer = styled(Item.Extra)`
  &&& {
    position: relative;
    height: 33px;
    width: 33px;
  }
`;

const StyledIcon = styled(Icon)`
  &&& {
    position: absolute;
    left: 0;
  }
`;

const StyledText = styled.div`
  &&& {
    position: absolute;
    top: 3px;
    left: 40%;
    color: ${props => props.color};
  }
`;

const TextIcon = ({ icon, number, color }) => {
  return (
    <div>
      <IconContainer>
        <StyledIcon size="big" name={icon} color={color} />
        <StyledText color={color}>{number}</StyledText>
      </IconContainer>
    </div>
  );
};

TextIcon.propTypes = {
  icon: PropTypes.string,
  number: PropTypes.number,
  color: PropTypes.string
};

TextIcon.defaultProps = {
  icon: 'heart outline',
  number: 0,
  color: 'red'
};

export default TextIcon;
