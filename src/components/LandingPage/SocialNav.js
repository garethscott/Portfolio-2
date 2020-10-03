import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SocialNav = (props) => {
    return (
        <StyeldSocialNavBox>
            <Link to="/contact">
                <StyledMessage src={props.message} alt="Link to message Gareth" />
            </Link>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/garethscott">
                <StyledGit src={props.git} alt="Link to Gareth's Github" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gareth-scott-70bba354/">
                <StyledLinked src={props.linkedin} alt="Link to Gareth's Linked in" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/garethscott1986/?hl=en">
                <StyledInsta src={props.insta} alt="Link to Gareth's Instagram" />
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