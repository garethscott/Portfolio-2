import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ScrollToTopController from '../ScrollToTopController';
import GreetingBox from './GreetingBox';
import AboutBox from './AboutBox'
import LogoBlack from './images/logo-border-black.png';


const LandingPage = () => {
    return (
        <div>
            <ScrollToTopController />
            <Link to="/home">
                <StyledLogoBlack src={LogoBlack} alt="Gareth's Black Logo" />
            </Link>
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