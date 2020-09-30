import React from 'react';
import styled from 'styled-components';
import SocialNav from './SocialNav'
import GreetImg from './images/landing-image-1.jpg';
import LogoBlack from './images/logo-border-black.png';
import LogoMessage from './images/logo-message.png';
import LogoGithub from './images/logo-github.png';
import LogoLinkedIn from './images/logo-linkedin.png';
import LogoInsta from './images/logo-insta.png';

const GreetingBox = () => {
    return (
        <StyledGreetImg img={GreetImg}>
            <StyledLogoBlack src={LogoBlack} alt="Gareth's Black Logo" />
            <StyledGreetCopyBox>
                <StyledGreeting>Hello, I'm <br />Gareth Scott <br />and I'm a<br /> junior dev</StyledGreeting>
                <StyledFullStop />
                <StyledLineShort />
                <StyledPleaseScroll>Please Scroll</StyledPleaseScroll>
            </StyledGreetCopyBox>
            <SocialNav
                message={LogoMessage}
                git={LogoGithub}
                linkedin={LogoLinkedIn}
                insta={LogoInsta} />
        </StyledGreetImg>
    )
}

export default GreetingBox;

const StyledGreetImg = styled.div`
    height: 100vh;
    width: 100%;
    // background-image: url(${props => props.img});
    background-size: cover;
    background-color: rgb(242, 167, 48);
    display: flex;
    align-items: center;
`;
const StyledLogoBlack = styled.img`
    width: 30px;
    position: fixed;
    right: 15px;
    top: 15px;
`;
const StyledGreetCopyBox = styled.div`
    height: 270px;
    width: 300px;
    // background: red;
    position: relative;
`;
const StyledGreeting = styled.h1`
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
    left: 211px;
    bottom: 92px;
`;
const StyledLineShort = styled.div`
    width: 20px;
    height: 10px;
    border-top: 2px solid rgb(0, 50, 57);
    position: absolute;
    left: 20px;
    bottom: 44px;
`;
const StyledPleaseScroll = styled.h3`
    margin-left: 19px;
    margin-top: 0px;
    font-size: 12px;
    color: rgb(0, 50, 57);
    // background: lightblue;
`;
