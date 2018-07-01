import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import TextIcon from './TextIcon';

describe('TextIcon', () => {
  it('renders with no props', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <TextIcon />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with icon', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <TextIcon icon="shield" />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with number', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <TextIcon number={4} />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <TextIcon color={'blue'} />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
