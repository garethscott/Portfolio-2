import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoMessage from './images/logo-message.png';
import LogoGithub from './images/logo-github.png';
import LogoLinkedIn from './images/logo-linkedin.png';
import LogoInsta from './images/logo-insta.png';
import MessageHov from './images/logo-message-medblue.png';
import GithubHov from './images/logo-github-medblue.png';
import LinkedInHov from './images/logo-linkedin-medblue.png';
import InstaHov from './images/logo-insta-medblue.png';

const SocialNav = (props) => {
    return (
        <StyeldSocialNavBox>
            <Link to="/contact">
                <div
                    onMouseEnter={props.enterMessage}
                    onMouseLeave={props.leaveMessage}
                >{props.messageLogo ? (
                    <StyledMessage
                        src={LogoMessage}
                        alt="Link to message Gareth"
                    />) : (
                        <StyledMessage
                            src={MessageHov}
                            alt="Link to message Gareth"
                        />)}
                </div>
            </Link>
            <a
                onMouseEnter={props.enterGithub}
                onMouseLeave={props.leaveGithub}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/garethscott"
            >{props.githubLogo ? (
                <StyledGit
                    src={LogoGithub}
                    alt="Link to Gareth's Github"
                />) : (
                    <StyledGit
                        src={GithubHov}
                        alt="Link to Gareth's Github"
                    />)}
            </a>
            <a
                onMouseEnter={props.enterLinkedIn}
                onMouseLeave={props.leaveLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/gareth-scott-70bba354/"
            >{props.linkedInLogo ? (
                <StyledLinked
                    src={LogoLinkedIn}
                    alt="Link to Gareth's Linked in"
                />) : (
                    <StyledLinked
                        src={LinkedInHov}
                        alt="Link to Gareth's Linked in"
                    />)}
            </a>
            <a
                onMouseEnter={props.enterInsta}
                onMouseLeave={props.leaveInsta}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/garethscott1986/?hl=en"
            >{props.instaLogo ? (
                <StyledInsta
                    src={LogoInsta}
                    alt="Link to Gareth's Instagram"
                />) : (
                    <StyledInsta
                        src={InstaHov}
                        alt="Link to Gareth's Instagram"
                    />)}
            </a>
        </StyeldSocialNavBox>
    )
}

export default SocialNav;

const StyeldSocialNavBox = styled.div`
    height: 125px;
    width: 22px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
    
    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
       width: 25px;
       height: 165px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        width: 25px;
        height: 150px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        left: 30px;
        bottom: 30px;
        height: 140px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        left: 30px;
        bottom: 30px;
        height: 140px;
    }

`;
const StyledMessage = styled.img`
    width: 20px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
       width: 23px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        width: 21px;
    }
    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        width: 18px;
        display: none;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        width: 18px;
        display: none;
    }
`;
const StyledGit = styled.img`
    width: 23px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
       width: 26px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        width: 23px;
    }
    
    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        width: 21px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        width: 21px;
    }
`;
const StyledLinked = styled.img`
    width: 20px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
       width: 23px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        width: 21px;
    }
    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        width: 18px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        width: 18px;
    }
`;
const StyledInsta = styled.img`
    width: 20px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
       width: 21px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        width: 21px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        width: 18px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        width: 18px;
    }
`;
