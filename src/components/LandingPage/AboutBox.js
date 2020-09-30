import React from 'react';
import styled from 'styled-components';
import AboutImg from './images/about-img.jpg';
import AboutHeading from './AboutHeading';

const AboutBox = () => {
    return (
        <StyledAboutImg img={AboutImg}>
            <StyledAboutContent>
                <AboutHeading />
                <StyledOverflow>
                    <StyledAboutCopy>
                        Hello, I’m Gareth. I am junior web developer
                        based in the North West with a passion for front-end
                        development and design.
                </StyledAboutCopy>
                    <StyledAboutCopy>
                        Having worked as a freelance illustrator for a number of
                        years, I have now transferred my love for drawing to building
                        websites and applications. I’m excited to embark on this new
                        career in coding, and start working with technology whilst
                        maintaining my eye for the creative.
                </StyledAboutCopy>
                    <StyledAboutCopy>
                        I have a degree in Graphic Design as well as other
                        qualifications in Art & Design.
                </StyledAboutCopy>
                    <StyledAboutCopy>
                        I have recently graduated from the Coding school Code Nation and
                        I am now proficient in a number of different tools and technologies.
                        This business led course also developed my skills in communication and
                        collaboration, skills which are vital for a career in coding.
                </StyledAboutCopy>
                    <StyledAboutCopy>
                        Please follow the link below to see a selection of the work I completed
                        at Code Nation.
                </StyledAboutCopy>
                    <StyledBottomSpacer />
                </StyledOverflow>
                <StyledTextFade />
                <StyledLineBelow />
                <StyledProjectsLink>See my projects</StyledProjectsLink>
            </StyledAboutContent>
        </StyledAboutImg >
    )
}

export default AboutBox;

const StyledAboutImg = styled.div`
    height: 100vh;
    width: 100%;
    // background-image: url(${props => props.img});
    background-size: cover;
    background-color: rgb(5, 205, 229);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-attachment: fixed;
`;
const StyledAboutContent = styled.div`
    width: 90%;
    height: 550px;
    position: relative;
    // background: red;
`;
const StyledOverflow = styled.div`
    height: 260px;
    width: 90%;
    margin-top: -26px;
    margin-left: 20px;
    position: relative;
    overflow-y: scroll;
`;
const StyledTextFade = styled.div`
    position: absolute;    
    bottom: 100px;
    left: 20px
    content: "";
    width: 90%;
    height: 150px;
    background-image: linear-gradient(to bottom, 
        rgba(5, 205, 229, 0) 0%,
        rgba(5, 205, 229, 1) 90%);
    z-index: 5;
`;
const StyledAboutCopy = styled.p`
    width: 79%;
    font-family: 'Open Sans';
    font-size: 12px;
 `;
const StyledBottomSpacer = styled.div`
    width: 79%;
    height: 50px;
`;
const StyledLineBelow = styled.div`
    width: 20px;
    height: 10px;
    border-top: 2px solid rgb(0, 50, 57);
    position: absolute;
    left: 20px;
    bottom: 80px;
`;
const StyledProjectsLink = styled.h2`
    color: rgb(0, 50, 57);
    margin-left: 20px;
    margin-top: 37px;
    font-size: 20px;
    height: 25px;
    width: 151px;
    // border-bottom: 2px solid rgb(0, 50, 57);
`;
