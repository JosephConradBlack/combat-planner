import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const ButtonGroup = ({ items, onClear, onNextFighter }) => (
  <div>
    <Button basic>Clear Fighters</Button>
    <Button
      positive
      icon
      labelPosition="right"
      floated="right"
      disabled={!items || items.length === 0}
    >
      Next Fighter<Icon name="right arrow" />
    </Button>
  </div>
);

ButtonGroup.propTypes = {
  onClear: PropTypes.func
};
export default ButtonGroup;
