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
    height: 120px;
    width: 22px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
`;
const StyledMessage = styled.img`
    width: 20px;
`;
const StyledGit = styled.img`
    width: 22px;
`;
const StyledLinked = styled.img`
    width: 20px;
`;
const StyledInsta = styled.img`
    width: 20px;
`;
// const StyledSocLinkHov = styled.img`
//     width: 20px;
// `;





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import MessageHov from './images/logo-message-medblue.png';
// import GithubHov from './images/logo-github-medblue.png';
// import LinkedInHov from './images/logo-linkedin-medblue.png';
// import InstaHov from './images/logo-insta-medblue.png';

// const SocialNav = (props) => {
//     const [message, setMessage] = useState(true);
//     const [github, setGithub] = useState(true);
//     const [linkedIn, setLinkedIn] = useState(true);
//     const [insta, setInsta] = useState(true);

//     return (
//         <StyeldSocialNavBox>
//             <Link to="/contact">
//                 <div onMouseEnter={() => setMessage(false)}
//                     onMouseLeave={() => setMessage(true)}>
//                     {message ? (
//                         <StyledMessage
//                             src={props.message}
//                             alt="Link to message Gareth"
//                         />) : (<StyledSocLinkHov
//                             src={MessageHov}
//                             alt="Link to message Gareth"
//                         />)}
//                 </div>
//             </Link>
//             <a onMouseEnter={() => setGithub(false)}
//                 onMouseLeave={() => setGithub(true)}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href="https://github.com/garethscott">
//                 {github ? (
//                     <StyledGit
//                         src={props.git}
//                         alt="Link to Gareth's Github"
//                     />) : (
//                         <StyledGit
//                             src={GithubHov}
//                             alt="Link to Gareth's Github"
//                         />)}
//             </a>
//             <a onMouseEnter={() => setLinkedIn(false)}
//                 onMouseLeave={() => setLinkedIn(true)}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href="https://www.linkedin.com/in/gareth-scott-70bba354/">
//                 {linkedIn ? (
//                     <StyledLinked
//                         src={props.linkedin}
//                         alt="Link to Gareth's Linked in"
//                     />) : (
//                         <StyledLinked
//                             src={LinkedInHov}
//                             alt="Link to Gareth's Linked in"
//                         />)}
//             </a>
//             <a onMouseEnter={() => setInsta(false)}
//                 onMouseLeave={() => setInsta(true)}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href="https://www.instagram.com/garethscott1986/?hl=en">
//                 {insta ? (
//                     <StyledInsta
//                         src={props.insta}
//                         alt="Link to Gareth's Instagram"
//                     />) : (
//                         <StyledInsta
//                             src={InstaHov}
//                             alt="Link to Gareth's Instagram"
//                         />)}
//             </a>
//         </StyeldSocialNavBox>
//     )
// }

// export default SocialNav;

// const StyeldSocialNavBox = styled.div`
//     height: 120px;
//     width: 22px;
//     position: fixed;
//     right: 20px;
//     bottom: 20px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//     z-index: 20;
// `;
// const StyledMessage = styled.img`
//     width: 20px;
// `;
// const StyledGit = styled.img`
//     width: 22px;
// `;
// const StyledLinked = styled.img`
//     width: 20px;
// `;
// const StyledInsta = styled.img`
//     width: 20px;
// `;
// const StyledSocLinkHov = styled.img`
//     width: 20px;
// `;