import React from 'react';
import styled from 'styled-components';
import GithubLogo from '../ProjectsPage/Images/social-logo-github-white.png';
import LinkedInLogo from '../ProjectsPage/Images/social-logo-linkedin-white.png';
import InstaLogo from '../ProjectsPage/Images/social-logo-insta-white.png';

const ContactPageNav = () => {
    return (
        <StyledBox>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/garethscott">
                <StyledGithubLink src={GithubLogo} alt="Link to Gareth's Github" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gareth-scott-70bba354/">
                <StyledNavLink src={LinkedInLogo} alt="Link to Gareth's Linked In" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/garethscott1986/?hl=en">
                <StyledNavLink src={InstaLogo} alt="Link to Gareth's Instagram" />
            </a>
        </StyledBox>
    )
}

export default ContactPageNav;

const StyledBox = styled.div`
    width: 95px;
    height: 20px;
    // background: red;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledNavLink = styled.img`
    width: 20px;
`;
const StyledGithubLink = styled.img`
    width: 22px;
    height: 22px;
`;
