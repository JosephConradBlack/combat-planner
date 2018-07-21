import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Item, Icon, Input } from 'semantic-ui-react';

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

const StyledInput = styled(Input)`
  &&& {
    display: inline-block;
    height: 100%;
    width: 33px;

    input {
      color: ${props => props.color};
      font-weight: 600;
    }
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

const TextIcon = ({ icon, number, color, readonly, handleChange }) => (
  <div>
    <IconContainer>
      <StyledIcon size="big" name={icon} color={color} />
      {number !== null &&
        !readonly && (
          <StyledInput
            transparent
            placeholder="0"
            type="number"
            color={color}
            value={number}
            readonly={readonly}
            onChange={handleChange}
          />
        )}
      {number != null && readonly && <StyledText>{number}</StyledText>}
    </IconContainer>
  </div>
);

TextIcon.propTypes = {
  icon: PropTypes.string,
  number: PropTypes.number,
  color: PropTypes.string,
  readonly: PropTypes.bool,
  handleChange: PropTypes.func
};

TextIcon.defaultProps = {
  icon: 'heart outline',
  number: null,
  color: 'red',
  readonly: false
};

export default TextIcon;
