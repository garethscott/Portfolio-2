import React from 'react';
import styled from 'styled-components';
import GithubLogo from './Images/social-logo-github-white.png';
import InstaLogo from './Images/social-logo-insta-white.png';
import LinkedInLogo from './Images/social-logo-linkedin-white.png';

const SocialWhiteNav = () => {
    return (
        <StyledBox>
            <StyledGithubLink src={GithubLogo} alt="Link to Gareth's Github" />
            <StyledNavLink src={LinkedInLogo} alt="Link to Gareth's Linked In" />
            <StyledNavLink src={InstaLogo} alt="Link to Gareth's Instagram" />
        </StyledBox>
    )
}

export default SocialWhiteNav;

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
