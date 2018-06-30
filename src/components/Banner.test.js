import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import Banner from './Banner';

describe('Banner', () => {
  it('renders', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Banner />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
