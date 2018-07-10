import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import Fighter from './Fighter';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Fighter', () => {
  it('renders with no props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Fighter />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with fighter', () => {
    const item = {
      id: 1,
      name: 'Fighter'
    };

    const component = shallow(
      <ThemeProvider theme={theme}>
        <Fighter item={item} />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
