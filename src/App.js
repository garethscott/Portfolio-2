import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import DiceGamePage from './components/WorkPages/DiceGamePage';
import DrumKitPage from './components/WorkPages/DrumKitPage';
import KeyCodePage from './components/WorkPages/KeyCodePage';


function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Route
          exact
          path="/"
          render={LandingPage}
        />
        <Route
          path="/home"
          component={LandingPage}
        />
        <Route
          path="/projects"
          component={ProjectsPage}
        />
        <Route
          path="/dicegame"
          component={DiceGamePage}
        />
        <Route
          path="/drumkit"
          component={DrumKitPage}
        />
        <Route
          path="/keycode"
          component={KeyCodePage}
        />
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;

const StyledApp = styled.div`
   width: 100%;
   height: 100vh;
`;
