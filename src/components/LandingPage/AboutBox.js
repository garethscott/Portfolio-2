import React from 'react';
import styled from 'styled-components';
import AboutImg from './images/about-img.jpg'

const AboutBox = () => {
    return (
        <StyledAboutImg img={AboutImg}>
            <StyledAboutHeadingBox>
                <StyledAboutHeading>A little<br /> bit about<br /> myself</StyledAboutHeading>
                <StyledFullStop />
                <StyledLineShort />
            </StyledAboutHeadingBox>
            <StyledOverflow>
                <StyledTextFade />
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
            </StyledOverflow>
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
    flex-direction: column;
`;
const StyledAboutHeadingBox = styled.div`
    height: 167px;
    width: 265px;
    margin-top: 30px;
    margin-bottom: 14px;
    // background: red;
    position: relative;
`;
const StyledAboutHeading = styled.h1`
    color: rgb(0, 50, 57);
    font-family: Helvetica;
    font-size: 41px;
    font-weight: 700;
    line-height: 0.97em;
    letter-spacing: -0.01em;
    margin-left: 20px;
    height: 180px;
`;
const StyledFullStop = styled.div`
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    position: absolute;
    left: 150px;
    bottom: 28px;
`;
const StyledLineShort = styled.div`
    width: 20px;
    height: 10px;
    border-top: 2px solid rgb(0, 50, 57);
    position: absolute;
    left: 20px;
    bottom: -12px;
`;
const StyledOverflow = styled.div`
    height: 260px;
    width: 90%;
    margin-left: 20px;
    position: relative;
    overflow-y: scroll;
`;
const StyledTextFade = styled.div`
    content: "";
    width: 90%;
    height: 150px;
    background-image: linear-gradient(to bottom, 
        rgba(5, 205, 229, 0),
        rgba(5, 205, 229, 1) 90%);
    position: absolute;    
    bottom: 0px;
    z-index: 5;
`;
const StyledAboutCopy = styled.p`
    width: 79%;
    font-family: 'Open Sans';
    font-size: 12px;
 `;