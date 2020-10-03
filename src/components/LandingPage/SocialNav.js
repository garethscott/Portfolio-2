import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MessageHov from './images/logo-message-medblue.png';
import GithubHov from './images/logo-github-medblue.png';
import LinkedInHov from './images/logo-linkedin-medblue.png';
import InstaHov from './images/logo-insta-medblue.png';

const SocialNav = (props) => {
    const [message, setMessage] = useState(true);


    return (
        <StyeldSocialNavBox>
            <Link to="/contact">
                <div onMouseEnter={() => setMessage(false)}
                    onMouseLeave={() => setMessage(true)}>
                    {message ? (
                        <StyledMessage
                            src={props.message}
                            alt="Link to message Gareth"
                        />) : (<StyledSocLinkHov
                            src={MessageHov}
                            alt="Link to message Gareth"
                        />)}
                </div>
            </Link>
            <a target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/garethscott">
                <StyledGit
                    src={props.git}
                    alt="Link to Gareth's Github"
                />
            </a>
            <a target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/gareth-scott-70bba354/">
                <StyledLinked
                    src={props.linkedin}
                    alt="Link to Gareth's Linked in"
                />
            </a>
            <a target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/garethscott1986/?hl=en">
                <StyledInsta
                    src={props.insta}
                    alt="Link to Gareth's Instagram"
                />
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
const StyledSocLinkHov = styled.img`
    width: 20px;
`;
const StyledGitLinkHov = styled.img`
    width: 22px;
`;