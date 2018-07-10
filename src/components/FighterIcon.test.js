import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import FighterIcon from './FighterIcon';

describe('FighterIcon', () => {
  it('renders with no props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <FighterIcon />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with different icon', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <FighterIcon icon="shield" />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with different number', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <FighterIcon number={4} />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with different color', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <FighterIcon color={'blue'} />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with different position', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <FighterIcon position={1} />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
