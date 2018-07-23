import React from 'react';
import styled from 'styled-components';
import { Button, Icon, Divider } from 'semantic-ui-react';

const ButtonGroup = () => (
  <div>
    <Button basic>Clear Fighters</Button>
    <Button positive icon labelPosition="right" floated="right">
      Next Fighter<Icon name="right arrow" />
    </Button>
  </div>
);

export default ButtonGroup;
