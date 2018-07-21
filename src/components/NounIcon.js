import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const StyledImage = styled(Image)`
  width: 33.03px;
  height: 28px;
  display: inline-block;
  margin-right: 3.5px;
`;

const NounIcon = props => <StyledImage {...props} />;

NounIcon.propTypes = {
  src: PropTypes.string.isRequired
};
export default NounIcon;
