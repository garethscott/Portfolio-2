import React from 'react';
import styled from 'styled-components';

const ContactHeading = () => {
    return (
        <StyledContactHeadingBox>
            <StyledContactHeading>Would love to hear from you</StyledContactHeading>
            <StyledFullStop />
            <StyledBotLine />
        </StyledContactHeadingBox>
    )
}

export default ContactHeading;

const StyledContactHeadingBox = styled.div`
    width: 230px;
    position: relative;
    height: 130px;
    // background: red;
    margin-top: -27px;

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - MOTO - LANDSCAPE CONTACT
    @media only screen and (min-width: 567px) and (max-width: 668px)
    and (min-height: 319px) and (max-height: 376px) {
      width: 190px;
      height: 100px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
        width: 190px;
        height: 100px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        width: 190px;
        height: 100px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        width: 190px;
        height: 100px;
    }
`;
const StyledContactHeading = styled.h1`
    color: rgb(255, 255, 255);
    font-family: Helvetica;
    font-size: 41px;
    font-weight: 700;
    line-height: 0.97em;
    letter-spacing: -0.01em;

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - MOTO - LANDSCAPE CONTACT
    @media only screen and (min-width: 567px) and (max-width: 668px)
    and (min-height: 319px) and (max-height: 376px) {
      font-size: 35px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
        font-size: 35px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        font-size: 35px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        font-size: 35px;
    }
`;
const StyledFullStop = styled.div`
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    position: absolute;
    left: 175px;
    bottom: 17px;

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - MOTO - LANDSCAPE CONTACT
    @media only screen and (min-width: 567px) and (max-width: 668px)
    and (min-height: 319px) and (max-height: 376px) {
      top: 111px;
      left: 149px;
      height: 7px;
      width: 7px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
        top: 111px;
      left: 149px;
      height: 7px;
      width: 7px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        top: 111px;
      left: 149px;
      height: 7px;
      width: 7px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        top: 111px;
      left: 149px;
      height: 7px;
      width: 7px;
    }
`;
const StyledBotLine = styled.div`
    width: 20px;
    height: 10px;
    border-top: 2px solid rgb(255, 255, 255);
    position: absolute;
    left: 0px;
    top: 135px;

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - MOTO - LANDSCAPE CONTACT
    @media only screen and (min-width: 567px) and (max-width: 668px)
    and (min-height: 319px) and (max-height: 376px) {
      display: none;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
        display: none;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        display: none;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        display: none;
    }
`;