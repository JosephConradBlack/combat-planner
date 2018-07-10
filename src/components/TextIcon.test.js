import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import TextIcon from './TextIcon';

describe('TextIcon', () => {
  it('renders with no props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <TextIcon />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with different icon', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <TextIcon icon="shield" />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with different number', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <TextIcon number={4} />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with different color', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <TextIcon color={'blue'} />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
