import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import SiteMenu from './SiteMenu';

describe('SiteMenu', () => {
  it('renders', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <SiteMenu />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
