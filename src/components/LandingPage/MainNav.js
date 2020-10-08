import React from 'react';
import styled from 'styled-components';

const MainNav = () => {
    return (
        <StyledContainer>
            <StyledNavs>About</StyledNavs>
            <StyledNavs>Projects</StyledNavs>
            <StyledNavs>Contact</StyledNavs>
        </StyledContainer>
    )
}

export default MainNav;

const StyledContainer = styled.div`
    width: 200px;
    height: 20px;
    margin: 0;
    // background: lightblue;
    position: absolute;
    right: 30px;
    top: 30px;
    display: flex;
    justify-content: space-between;
`;
const StyledNavs = styled.h3`
    font-family: helvetica;
    margin: 0px;
    font-size: 15px;
    font-weight: 600;
    color: rgba(0, 50, 57, 50%);
`;