import React from 'react';
import styled from 'styled-components';

const MainNav = () => {
    return (

        <StyledContainer>
            <StyledNavs>Get in touch</StyledNavs>
        </StyledContainer>

    )
}

export default MainNav;

const StyledContainer = styled.div`
    display: none;

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
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

    // // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    // @media only screen and (min-width: 542px) and (max-width: 1025px)
    // and (min-height: 722px) and (max-height: 1026px) {
    //     width: 140px;
    //     height: 35px;
    //     margin: 0;
    //     // background: lightblue;
    //     border: 2px solid rgba(0, 50, 57, 80%);
    //     border-radius: 5px;
    //     position: fixed;
    //     right: 30px;
    //     top: 30px;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    // }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        width: 155px;
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

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     width: 155px;
    //     height: 35px;
    //     margin: 0;
    //     // background: lightblue;
    //     border: 2px solid rgba(0, 50, 57, 80%);
    //     border-radius: 5px;
    //     position: fixed;
    //     right: 30px;
    //     top: 30px;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    // }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        width: 155px;
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

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        font-family: helvetica;
        margin: 0px;
        font-size: 15px;
        font-weight: 600;
        color: rgb(0, 50, 57);
    }

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     font-family: helvetica;
    //     margin: 0px;
    //     font-size: 15px;
    //     font-weight: 600;
    //     color: rgb(0, 50, 57);
    // }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        font-family: helvetica;
        margin: 0px;
        font-size: 15px;
        font-weight: 600;
        color: rgb(0, 50, 57);
    }
`;