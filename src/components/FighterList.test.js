import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';

import _ from 'underscore';

import theme from '../theme';
import FighterList from './FighterList';

describe('FighterList', () => {
  it('renders with no props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <FighterList />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with empty items array', () => {
    const items = [];
    const component = shallow(
      <ThemeProvider theme={theme}>
        <FighterList items={items} />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  const createComponentWithNFighters = numFighters => {
    let items = [];

    _.times(numFighters, idx => {
      items.push({
        id: idx,
        name: 'Item: ' + idx
      });
    });

    return shallow(
      <ThemeProvider theme={theme}>
        <FighterList items={items} />
      </ThemeProvider>
    ).dive();
  };

  it('renders with one item', () => {
    const component = createComponentWithNFighters(1);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with two items', () => {
    const component = createComponentWithNFighters(2);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with three items', () => {
    const component = createComponentWithNFighters(3);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with four items', () => {
    const component = createComponentWithNFighters(4);

    expect(toJson(component)).toMatchSnapshot();
  });
});
