import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import LogoBlack from './components/LandingPage/images/logo-border-black.png';


function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <StyledLogoBlack src={LogoBlack} alt="Gareth's Black Logo" />
        <Route
          exact
          path="/"
          render={LandingPage}
        />
        <Route path="/projects" component={ProjectsPage} />
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;

const StyledApp = styled.div`
   width: 100%;
   height: 100vh;
`;
const StyledLogoBlack = styled.img`
    width: 30px;
    position: fixed;
    right: 15px;
    top: 15px;
`;
