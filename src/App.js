import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import CombatPlannerContainer from './containers/CombatPlannerContainer';

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
