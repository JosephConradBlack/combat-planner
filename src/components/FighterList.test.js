import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import _ from 'underscore';

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

  const createComponentWithNFighters = numFighters => {
    let items = [];

    _.times(numFighters, idx => {
      items.push({
        id: idx,
        name: 'Item: ' + idx
      });
    });

    return create(
      <ThemeProvider theme={theme}>
        <FighterList items={items} />
      </ThemeProvider>
    );
  };

  it('renders with one item', () => {
    const component = createComponentWithNFighters(1);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with two items', () => {
    const component = createComponentWithNFighters(2);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with three items', () => {
    const component = createComponentWithNFighters(3);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with four items', () => {
    const component = createComponentWithNFighters(4);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
