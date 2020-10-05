import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import ScrollToTopController from '../ScrollToTopController';
import GreetingBox from './GreetingBox';
import AboutBox from './AboutBox'
import LogoBlack from './images/logo-border-black.png';
import LogoHover from './images/logo-hover.png';
import SocialNav from './SocialNav';


const LandingPage = (props) => {
    return (
        <div>
            {/* <ScrollToTopController /> */}
            <Link to="/home">
                <div onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}>
                    {props.logoHover ? (
                        <StyledLogoBlack
                            src={LogoBlack}
                            alt="Gareth's Logo"
                        />) : (
                            <StyledLogoBlack
                                src={LogoHover}
                                alt="Gareth's Logo"
                            />)}
                </div>
            </Link>
            <SocialNav
                enterMessage={props.enterMessage}
                leaveMessage={props.leaveMessage}
                messageLogo={props.messageLogo}
                enterGithub={props.enterGithub}
                leaveGithub={props.leaveGithub}
                githubLogo={props.githubLogo}
                enterLinkedIn={props.enterLinkedIn}
                leaveLinkedIn={props.leaveLinkedIn}
                linkedInLogo={props.linkedInLogo}
                enterInsta={props.enterInsta}
                leaveInsta={props.leaveInsta}
                instaLogo={props.instaLogo}
            />
            <GreetingBox />
            <AboutBox
                seeprojectscolor={props.seeprojectscolor}
                seeprojectsenter={props.seeprojectsenter}
                seeprojectsleave={props.seeprojectsleave}
            />
        </div >
    )
}

export default LandingPage;

const StyledLogoBlack = styled.img`
    width: 30px;
    position: fixed;
    right: 20px;
    top: 20px;
    
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