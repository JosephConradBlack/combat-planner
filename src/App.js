import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import CombatPlannerContainer from './containers/CombatPlannerContainer';

import theme from './theme';

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <CombatPlannerContainer />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
