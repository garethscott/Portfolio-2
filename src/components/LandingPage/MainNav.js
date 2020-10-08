import React from 'react';
import styled from 'styled-components';

const MainNav = () => {
    return (
        <StyledContainer>
            <StyledNavs>Get in touch</StyledNavs>
            {/* <StyledNavs>Projects</StyledNavs>
            <StyledNavs>Contact</StyledNavs> */}
        </StyledContainer>
    )
}

export default MainNav;

const StyledContainer = styled.div`
    display: none;

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        width: 140px;
    height: 35px;
    margin: 0;
    // background: lightblue;
    border: 2px solid rgba(0, 50, 57, 80%);
    border-radius: 5px;
    position: fixed;
    right: 30px;
    top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    }
`;
const StyledNavs = styled.h3`
    font-family: helvetica;
    margin: 0px;
    font-size: 12px;
    font-weight: 600;
    color: rgb(0, 50, 57);
`;