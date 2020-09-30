import React from 'react';
import styled from 'styled-components';

const AboutCopy = () => {
    return (
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
    )
}

export default AboutCopy

const StyledOverflow = styled.div`
    height: 260px;
    width: 90%;
    margin-top: -26px;
    margin-left: 20px;
    position: relative;
    overflow-y: scroll;
`;
const StyledAboutCopy = styled.p`
    width: 79%;
    font-family: 'Open Sans';
    font-size: 12px;
    color: rgb(0, 50, 57);
 `;
const StyledBottomSpacer = styled.div`
    width: 79%;
    height: 50px;
`;