import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import SiteMenu from './SiteMenu';

describe('SiteMenu', () => {
  it('renders', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <SiteMenu />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
