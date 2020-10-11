import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import ScrollToTopController from '../ScrollToTopController';
import MainNav from './MainNav';
import GreetingBox from './GreetingBox';
import AboutBox from './AboutBox'
import LogoBlack from './images/logo-border-black.png';
import LogoHover from './images/logo-hover.png';
import SocialNav from './SocialNav';


const LandingPage = (props) => {
    return (
        <div>
            {/* <ScrollToTopController /> */}
            <MainNav />
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
    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 375px) and (max-height: 540px) {
        width: 33px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
        width: 30px;
        left: 30px;
        top: 30px;
    }

    // // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    // @media only screen and (min-width: 542px) and (max-width: 1025px)
    // and (min-height: 722px) and (max-height: 1026px) {
    //     width: 30px;
    //     left: 30px;
    //     top: 30px;
    // }
    
    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        width: 40px;
        left: 30px;
        top: 30px;
    }

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     width: 40px;
    //     left: 30px;
    //     top: 30px;
    // }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        width: 40px;
        left: 30px;
        top: 30px;
    }
`;