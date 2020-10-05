import React from 'react';
import styled from 'styled-components';

const GreetingBox = () => {
    return (
        <StyledGreetImg>
            <StyledGreetCopyBox>
                {/* <StyledGreeting>Hello, I'm <br />Gareth Scott <br />and I'm a<br />junior dev</StyledGreeting> */}
                <StyledGreeting>Hello, I'm Gareth Scott and I'm a junior dev</StyledGreeting>
                <StyledFullStop />
                <StyledLineShort />
                <StyledPleaseScroll>Please Scroll</StyledPleaseScroll>
            </StyledGreetCopyBox>
        </StyledGreetImg >
    )
}

export default GreetingBox;

const StyledGreetImg = styled.div`
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-color: rgb(242, 167, 48);
    display: flex;
    align-items: center;
`;
const StyledGreetCopyBox = styled.div`
    width: 87%;
    // background: red;
    position: relative;
`;
const StyledGreeting = styled.h1`
    color: rgb(0, 50, 57);
    font-family: Helvetica;
    font-size: 41px;
    font-weight: 700;
    line-height: 0.97em;
    letter-spacing: -0.01em;
    margin-left: 20px;
    height: 180px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
        font-size: 44px;
        line-height: 0.99em;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        font-size: 50px;
        line-height: 0.99em;
        margin-bottom: 50px;
    }
`;
const StyledFullStop = styled.div`
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    position: absolute;
    left: 211px;
    bottom: 87px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
        left: 225px;
        bottom: 95px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        height: 11px;
        width: 11px;
        left: 252px;
        bottom: 102px;
    }
`;
const StyledLineShort = styled.div`
    width: 20px;
    height: 10px;
    border-top: 2px solid rgb(0, 50, 57);
    margin-left: 20px;
    margin-top: -20px;
    margin-bottom: 12px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
        margin-top: -7px;
        margin-bottom: 12px;
        border-top: 3px solid rgb(0, 50, 57);
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        margin-top: 16px;
        margin-bottom: 11px;
        border-top: 3px solid rgb(0, 50, 57);
    }
`;
const StyledPleaseScroll = styled.h3`
    margin-left: 19px;
    margin-top: 0px;
    font-size: 12px;
    color: rgb(0, 50, 57);
    
    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
        font-size: 16px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        font-size: 17px;
    }
`;
