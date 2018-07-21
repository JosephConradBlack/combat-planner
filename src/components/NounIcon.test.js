import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import NounIcon from './NounIcon';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('NounIcon', () => {
  it('renders with src', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <NounIcon src="icon_sword.svg" />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
