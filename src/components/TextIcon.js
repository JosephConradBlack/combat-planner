import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Item, Icon } from 'semantic-ui-react';

const IconContainer = styled(Item.Extra)`
  &&& {
    height: 33px;
    width: 70px;
  }
`;

const StyledIcon = styled(Icon)`
  &&& {
  }
`;

const StyledText = styled.div`
  &&& {
    display: inline-block;
    height: 100%;
    width: 33px;
    color: ${props => props.color};
    font-weight: 600;
  }
`;

const TextIcon = ({ icon, number, color }) => {
  return (
    <div>
      <IconContainer>
        <StyledIcon size="big" name={icon} color={color} />
        {number && <StyledText color={color}>{number}</StyledText>}
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
  number: null,
  color: 'red'
};

export default TextIcon;
