import React from 'react';
import styled from 'styled-components';
import ProjectsHeading from './ProjectsHeading';
import ProjectsCopy from './ProjectsCopy';
import ProjectBox from './ProjectBox';
import KeyCodeImg from './Images/Project-Square-Keycode.jpg';
import DrumKitImg from './Images/Project-Square-DrumKit.jpg';
import DiceGameImg from './Images/Project-Square-DiceGame.jpg';
import CalcImg from './Images/Project-Square-Calc.jpg';
import AddBookImg from './Images/Project-Square-AddressBook.jpg';
import TodoImg from './Images/Project-Square-Todo.jpg';
import PokeImg from './Images/Project-Square-Poke.jpg';
import WeatherImg from './Images/Project-Square-WeatherApp.jpg';
import TravelImg from './Images/Project-Square-TravelApp.jpg';

const ProjectsPage = () => {
    return (
        <>
            <StyledProjectsIntroBox>
                <StyledProjectContent>
                    <ProjectsHeading />
                    <ProjectsCopy />
                </StyledProjectContent>
            </StyledProjectsIntroBox>

            <StyledProjectImageBox>
                <ProjectBox
                    img={KeyCodeImg}
                    heading="Key Code"
                    subHeading="Javascript"
                />
                <ProjectBox
                    img={DrumKitImg}
                    heading="Drum kit"
                    subHeading="Javascript"
                />
                <ProjectBox
                    img={DiceGameImg}
                    heading="Drum kit"
                    subHeading="Javascript"
                />
                <ProjectBox
                    img={CalcImg}
                    heading="Calculator"
                    subHeading="React.js"
                />
                <ProjectBox
                    img={AddBookImg}
                    heading="Address Book"
                    subHeading="React.js"
                />
                <ProjectBox
                    img={TodoImg}
                    heading="Todo App"
                    subHeading="MERN Stack"
                />
                <ProjectBox
                    img={PokeImg}
                    heading="Pokemon App"
                    subHeading="React.js"
                />
                <ProjectBox
                    img={WeatherImg}
                    heading="Weather App"
                    subHeading="Node.js"
                />
                <ProjectBox
                    img={TravelImg}
                    heading="Travel App"
                    subHeading="MERN Stack"
                />
            </StyledProjectImageBox>
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
`;