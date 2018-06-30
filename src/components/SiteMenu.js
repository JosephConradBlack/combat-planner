import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const SiteMenu = () => {
  return (
    <Menu inverted secondary pointing size="large">
      <Container>
        <Menu.Item>Combat Planner</Menu.Item>
      </Container>
    </Menu>
  );
};

export default SiteMenu;
