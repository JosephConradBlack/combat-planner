import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import FighterEditableForm from './FighterEditableForm';

describe('FighterEditable', () => {
  it('renders with no props', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <FighterEditableForm />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
