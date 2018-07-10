import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import Banner from './Banner';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Banner', () => {
  it('renders', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Banner />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
