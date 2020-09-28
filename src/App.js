import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Route
          exact
          path="/"
          render={LandingPage} />
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;

const StyledApp = styled.div`
   width: 100%;
   height: 100vh;
`; 
