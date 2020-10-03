import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ScrollToTopController from '../ScrollToTopController';
import GreetingBox from './GreetingBox';
import AboutBox from './AboutBox'
import LogoBlack from './images/logo-border-black.png';
import LogoHover from './images/logo-hover.png';


const LandingPage = () => {
    const [logoHover, setLogoHover] = useState(true);

    return (
        <div>
            <ScrollToTopController />
            <Link to="/home">
                <div
                    onMouseEnter={() => setLogoHover(false)}
                    onMouseLeave={() => setLogoHover(true)}>
                    {logoHover ? (
                        <StyledLogoBlack
                            src={LogoBlack}
                            alt="Gareth's Black Logo"
                        />) : (
                            <StyledLogoPink
                                src={LogoHover}
                                alt="Gareth's Medium Blue Logo"
                            />)}
                </div>
            </Link>
            <GreetingBox />
            <AboutBox />
        </div >
    )
}

export default LandingPage;

const StyledLogoBlack = styled.img`
    width: 30px;
    position: fixed;
    right: 20px;
    top: 20px;
`;
const StyledLogoPink = styled.img`
    width: 30px;
    position: fixed;
    right: 20px;
    top: 20px;
`;