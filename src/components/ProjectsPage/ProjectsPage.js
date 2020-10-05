import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ScrollToTopContoller from '../ScrollToTopController';
import ProjectsHeading from './ProjectsHeading';
import ProjectsCopy from './ProjectsCopy';
import ProjectBox from './ProjectBox';
import ContactBox from './ContactBox';
import MainLogoBlack from './Images/logo-border-black.png';
import LogoMediumBlue from '../LandingPage/images/logo-hover.png';
import KeyCodeImg from './Images/Project-Square-Keycode.jpg';
import DrumKitImg from './Images/Project-Square-DrumKit.jpg';
import DiceGameImg from './Images/Project-Square-DiceGame.jpg';
import CalcImg from './Images/Project-Square-Calc.jpg';
import AddBookImg from './Images/Project-Square-AddressBook.jpg';
import TodoImg from './Images/Project-Square-Todo.jpg';
import PokeImg from './Images/Project-Square-Poke.jpg';
import WeatherImg from './Images/Project-Square-WeatherApp.jpg';
import TravelImg from './Images/Project-Square-TravelApp.jpg';

const ProjectsPage = (props) => {
    return (
        <>
            <ScrollToTopContoller />
            <StyledProjectsIntroBox>
                <Link to="/home">
                    <div
                        onMouseEnter={props.projectsLogoEnter}
                        onMouseLeave={props.projectsLogoLeave}
                    >{props.projectsLogoHov ? (
                        <StyledBlackLogo
                            src={MainLogoBlack}
                            alt="Gareth's logo"
                        />) : (
                            <StyledBlackLogo
                                src={LogoMediumBlue}
                                alt="Gareth's logo"
                            />)}
                    </div>
                </Link>
                <StyledProjectContent>
                    <ProjectsHeading />
                    <ProjectsCopy />
                </StyledProjectContent>
            </StyledProjectsIntroBox>
            <StyledProjectImageBox>
                <ProjectBox
                    img={TravelImg}
                    alt=""
                    heading="Travel App"
                    subHeading="MERN Stack"
                    url="/travelapp"
                />
                <ProjectBox
                    img={WeatherImg}
                    alt=""
                    heading="Weather App"
                    subHeading="Node.js"
                    url="/weatherapp"
                />
                <ProjectBox
                    img={PokeImg}
                    alt=""
                    heading="Pokemon App"
                    subHeading="React.js"
                    url="/pokemonapp"
                />
                <ProjectBox
                    img={TodoImg}
                    alt=""
                    heading="Todo App"
                    subHeading="MERN Stack"
                    url="/todoapp"
                />
                <ProjectBox
                    img={AddBookImg}
                    alt=""
                    heading="Address Book"
                    subHeading="React.js"
                    url="/addressbook"
                />
                <ProjectBox
                    img={CalcImg}
                    alt=""
                    heading="Calculator"
                    subHeading="React.js"
                    url="/calculator"
                />
                <ProjectBox
                    img={DiceGameImg}
                    alt=""
                    heading="Dice Game"
                    subHeading="Javascript"
                    url="/dicegame"
                />
                <ProjectBox
                    img={DrumKitImg}
                    alt=""
                    heading="Drum kit"
                    subHeading="Javascript"
                    url="/drumkit"
                />
                <ProjectBox
                    img={KeyCodeImg}
                    alt=""
                    heading="Key Code"
                    subHeading="Javascript"
                    url="/keycode"
                />
            </StyledProjectImageBox>
            <ContactBox />
        </>
    )
}

export default ProjectsPage;

const StyledProjectsIntroBox = styled.div`
    height: 85vh;
    width: 100%;
    background-color: rgb(253, 167, 159);
    margin-top: 0;
    background-size: cover;
    display: flex;
    align-items: center;
    position: relative;
`;
const StyledBlackLogo = styled.img`
    width: 30px;
    position: absolute;
    top: 20px;
    right: 20px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
       width: 33px;
    }
    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        width: 33px; 
    }
`;
const StyledProjectContent = styled.div`
    width: 83%;
    height: 300px;
    margin-top: 25px;
    // background: yellow;
`;
const StyledProjectImageBox = styled.div`
    width: 100%;
    height: 2385px;
    background: rgb(253, 167, 159);
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
        height: 2612px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        height: 2775px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & XL - SURFACE DUO - WIDER WIDTH
    @media only screen and (min-width: 410px) and (max-width: 541px)
    and (min-height: 730px) and (max-height: 824px) {
        height: 2975px;
    }

    // PORTRAIT MOBILE SCREENS - SURFACE DUO - WIDER WIDTH
    @media only screen and (min-width: 509px) and (max-width: 720px)
    and (min-height: 719px) and (max-height: 721px) {
        height: 3880px;
    }
`;