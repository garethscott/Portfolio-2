import React from 'react';
import styled from 'styled-components';
import GreetingBox from './GreetingBox';
import AboutBox from './AboutBox'
import LogoBlack from './images/logo-border-black.png';


const LandingPage = () => {
    return (
        <div>
            <StyledLogoBlack src={LogoBlack} alt="Gareth's Black Logo" />
            <GreetingBox />
            <AboutBox />
        </div>
    )
}

export default LandingPage;

const StyledLogoBlack = styled.img`
    width: 30px;
    position: fixed;
    right: 20px;
    top: 20px;
`;