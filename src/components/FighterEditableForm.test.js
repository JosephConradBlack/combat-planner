import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import FighterEditableForm from './FighterEditableForm';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('FighterEditable', () => {
  it('renders with all required props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <FighterEditableForm onSubmit={() => {}} />
      </ThemeProvider>
    ).dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
