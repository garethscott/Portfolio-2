import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ContactPage from './components/ContactPage/ContactPage';
import TravelAppPage from './components/WorkPages/TravelAppPage';
import WeatherAppPage from './components/WorkPages/WeatherAppPage';
import PokePage from './components/WorkPages/PokePage';
import TodoPage from './components/WorkPages/TodoPage';
import AddBookPage from './components/WorkPages/AddBookPage';
import CalcPage from './components/WorkPages/CalcPage';
import DiceGamePage from './components/WorkPages/DiceGamePage';
import DrumKitPage from './components/WorkPages/DrumKitPage';
import KeyCodePage from './components/WorkPages/KeyCodePage';


function App() {
  const [logoHover, setLogoHover] = useState(true);
  const [messageLogo, setMessageLogo] = useState(true);
  const [githubLogo, setGithubLogo] = useState(true);
  const [linkedInLogo, setLinkedInLogo] = useState(true);
  const [instaLogo, setInstaLogo] = useState(true);
  const [seeProjectsColor, setSeeProjectsColor] = useState("rgb(0, 50, 57)");
  const [projectsLogoHov, setProjectsLogoHov] = useState(true);

  return (
    <BrowserRouter>
      <StyledApp>
        <Route
          exact
          path="/"
          render={() => (
            <LandingPage
              onMouseEnter={() => setLogoHover(false)}
              onMouseLeave={() => setLogoHover(true)}
              logoHover={logoHover}
              enterMessage={() => setMessageLogo(false)}
              leaveMessage={() => setMessageLogo(true)}
              messageLogo={messageLogo}
              enterGithub={() => setGithubLogo(false)}
              leaveGithub={() => setGithubLogo(true)}
              githubLogo={githubLogo}
              enterLinkedIn={() => setLinkedInLogo(false)}
              leaveLinkedIn={() => setLinkedInLogo(true)}
              linkedInLogo={linkedInLogo}
              enterInsta={() => setInstaLogo(false)}
              leaveInsta={() => setInstaLogo(true)}
              instaLogo={instaLogo}
              seeprojectscolor={seeProjectsColor}
              seeprojectsenter={() => setSeeProjectsColor("rgb(37, 135, 149)")}
              seeprojectsleave={() => setSeeProjectsColor("rgb(0, 50, 57)")}
            />
          )}
        />
        <Route
          path="/home"
          render={() => (
            <LandingPage
              onMouseEnter={() => setLogoHover(false)}
              onMouseLeave={() => setLogoHover(true)}
              logoHover={logoHover}
              enterMessage={() => setMessageLogo(false)}
              leaveMessage={() => setMessageLogo(true)}
              messageLogo={messageLogo}
              enterGithub={() => setGithubLogo(false)}
              leaveGithub={() => setGithubLogo(true)}
              githubLogo={githubLogo}
              enterLinkedIn={() => setLinkedInLogo(false)}
              leaveLinkedIn={() => setLinkedInLogo(true)}
              linkedInLogo={linkedInLogo}
              enterInsta={() => setInstaLogo(false)}
              leaveInsta={() => setInstaLogo(true)}
              instaLogo={instaLogo}
              seeprojectscolor={seeProjectsColor}
              seeprojectsenter={() => setSeeProjectsColor("rgb(37, 135, 149)")}
              seeprojectsleave={() => setSeeProjectsColor("rgb(0, 50, 57)")}
            />
          )}
        />
        <Route
          path="/projects"
          render={() => (
            <ProjectsPage
              projectsLogoHov={projectsLogoHov}
              projectsLogoEnter={() => setProjectsLogoHov(false)}
              projectsLogoLeave={() => setProjectsLogoHov(true)}
            />
          )}
        />
        <Route
          path="/contact"
          component={ContactPage}
        />
        <Route
          path="/travelapp"
          component={TravelAppPage}
        />
        <Route
          path="/weatherapp"
          component={WeatherAppPage}
        />
        <Route
          path="/pokemonapp"
          component={PokePage}
        />
        <Route
          path="/todoapp"
          component={TodoPage}
        />
        <Route
          path="/addressbook"
          component={AddBookPage}
        />
        <Route
          path="/calculator"
          component={CalcPage}
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
