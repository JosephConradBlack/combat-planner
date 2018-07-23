import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const ButtonGroup = ({ items, onClearFighters, onNextFighter }) => (
  <div>
    <Button basic onClick={onClearFighters}>
      Clear Fighters
    </Button>
    <Button
      positive
      icon
      labelPosition="right"
      floated="right"
      disabled={!items || items.length === 0}
      onClick={onNextFighter}
    >
      Next Fighter<Icon name="right arrow" />
    </Button>
  </div>
);

ButtonGroup.propTypes = {
  items: PropTypes.array,
  onClearFighters: PropTypes.func,
  onNextFighter: PropTypes.func
};
export default ButtonGroup;
