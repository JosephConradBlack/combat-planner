import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import FighterList from './FighterList';

describe('FighterList', () => {
  it('renders with no props', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <FighterList />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with empty items array', () => {
    const items = [];
    const component = create(
      <ThemeProvider theme={theme}>
        <FighterList items={items} />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with two items', () => {
    const items = [
      {
        id: 1,
        name: 'Name'
      }
    ];

    const component = create(
      <ThemeProvider theme={theme}>
        <FighterList items={items} />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
