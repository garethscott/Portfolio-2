import React from 'react';
import styled from 'styled-components';

const AboutHeading = () => {
    return (
        <StyledAboutHeadingBox>
            <StyledAboutHeading>A little<br /> bit about<br /> myself</StyledAboutHeading>
            <StyledFullStop />
            <StyledLineShort />
        </StyledAboutHeadingBox>
    )
}

export default AboutHeading;

const StyledAboutHeadingBox = styled.div`
    height: 167px;
    width: 265px;
    margin-top: 30px;
    margin-bottom: 14px;
    position: relative;
    
    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        margin-bottom: 40px;
    }
`;
const StyledAboutHeading = styled.h1`
    color: rgb(0, 50, 57);
    font-family: Helvetica;
    font-size: 41px;
    font-weight: 700;
    line-height: 0.97em;
    letter-spacing: -0.01em;
    margin-left: 20px;
    margin-bottom: -10px;
    height: 150px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
        font-size: 44px;
        line-height: 0.95em;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        font-size: 50px;
        line-height: 0.99em;
        margin-top: -20px;
    }
`;
const StyledFullStop = styled.div`
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    position: absolute;
    left: 150px;
    bottom: 55px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
        left: 157px;
        bottom: 48px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        height: 11px;
        width: 11px;
        left: 178px;
        bottom: 27px;
    }
`;
const StyledLineShort = styled.div`
    width: 20px;
    height: 10px;
    border-top: 2px solid rgb(0, 50, 57);
    margin-left: 20px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
        margin-top: 5px;
        border-top: 3px solid rgb(0, 50, 57);
    }
    
    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        margin-top: 30px;
        border-top: 3px solid rgb(0, 50, 57);
    }
`;