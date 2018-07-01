import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import FighterIcon from './FighterIcon';

describe('FighterIcon', () => {
  it('renders with no props', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <FighterIcon />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with different icon', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <FighterIcon icon="shield" />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with different number', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <FighterIcon number={4} />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with different color', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <FighterIcon color={'blue'} />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with different position', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <FighterIcon position={1} />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
