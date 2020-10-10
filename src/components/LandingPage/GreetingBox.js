import React from 'react';
import styled from 'styled-components';

const GreetingBox = () => {
    return (
        <StyledGreetImg>
            <StyledGreetCopyBox>
                <StyledGreeting>Hello, I'm Gareth and I'm a Web Developer</StyledGreeting>
                <StyledGreetingTwo>Hello, my name is<br /> Gareth Scott and I'm <br />a web developer</StyledGreetingTwo>
                <StyledFullStop />
                <StyledLineShort />
                <StyledPleaseScroll>Please Scroll</StyledPleaseScroll>
                <StyledPleaseScrollTwo>Please scroll</StyledPleaseScrollTwo>
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

    // PORTRAIT MOBILE SCREENS - SURFACE DUO - WIDER WIDTH
    @media only screen and (min-width: 509px) and (max-width: 720px)
    and (min-height: 719px) and (max-height: 721px) {
        width: 300px;
    }

    // LANDSCAPE MOBILE SCREENS - MOTOG4 & GALAXYS5 - IPHONE,6,7,8 & X - LANDSCAPE
    @media only screen and (min-width: 568px) and (max-width: 667px)
    and (min-height: 320px) and (max-height: 375px) {
        width: 400px;
        height: 280px;
        margin-left: 37px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 375px) and (max-height: 540px) {
        width: 500px;
        height: 235px;
        margin: 45px;
        // background: red;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        width: 70%;
        height: 300px;
        // background: lightblue;
        margin-left: 20%;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 769px) and (max-height: 1026px) {
        width: 80%;
        height: 300px;
        // background: lightblue;
        margin-left: 12%;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        width: 70%;
        height: 380px;
        margin-left: 20%;
    }
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
        margin-bottom: 44px;
    }

    // LANDSCAPE MOBILE SCREENS - MOTOG4 & GALAXYS5 - IPHONE,6,7,8 & X - LANDSCAPE
    @media only screen and (min-width: 568px) and (max-width: 667px)
    and (min-height: 320px) and (max-height: 375px) {
        font-size: 47px;
        line-height: 1em;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 375px) and (max-height: 540px) {
        font-size: 55px;
        margin-bottom: 25px;
        margin-top: 0px;
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

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        display: none;
    }
`;
const StyledGreetingTwo = styled.div`
       display: none;

       // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        display: block;
        margin-left: 0px;
        margin-top: 0px;
        margin-bottom: 47px;
        font-size: 64px;
        color: rgb(0, 50, 57);
        font-family: Helvetica;
        font-weight: 600;
        line-height: 1em;
        letter-spacing: -0.03em;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        display: block;
        margin-left: 0px;
        margin-top: 0px;
        margin-bottom: 47px;
        font-size: 64px;
        color: rgb(0, 50, 57);
        font-family: Helvetica;
        font-weight: 600;
        line-height: 1em;
        letter-spacing: -0.03em;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        display: block;
        margin-left: 0px;
        margin-top: 0px;
        margin-bottom: 47px;
        font-size: 90px;
        color: rgb(0, 50, 57);
        font-family: Helvetica;
        font-weight: 600;
        line-height: 1em;
        letter-spacing: -0.03em;
    }
`;
const StyledFullStop = styled.div`
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    position: absolute;
    left: 214px;
    bottom: 87px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
        left: 228px;
        bottom: 95px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        height: 11px;
        width: 11px;
        left: 255px;
        bottom: 96px;
    }
    // LANDSCAPE - MOBILE SCREENS - MOTOG4 & GALAXYS5 - IPHONE,6,7,8 - LANDSCAPE
    @media only screen and (min-width: 568px) and (max-width: 667px)
    and (min-height: 320px) and (max-height: 375px) {
        left: 242px;
        bottom: 116px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 375px) and (max-height: 540px) {
        width: 11px;
        height: 11px;
        left: 280px;
        bottom: 84px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        width: 14px;
        height: 14px;
        left: 465px;
        bottom: 118px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        width: 14px;
        height: 14px;
        left: 465px;
        bottom: 118px;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-width: 1366px)
    and (min-height: 768px) and (max-height: 1024px) {
        width: 14px;
        height: 14px;
        left: 465px;
        bottom: 118px;
    }  
    
    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        width: 17px;
        height: 17px;
        left: 655px;
        bottom: 123px;
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

    // LANDSCAPE MOBILE SCREENS - MOTOG4 & GALAXYS5 - IPHONE,6,7,8 & X - LANDSCAPE
    @media only screen and (min-width: 568px) and (max-width: 667px)
    and (min-height: 320px) and (max-height: 375px) {
        margin-top: -47px;
        margin-bottom: 15px;
        margin-left: 23px;
        border-top: 3px solid rgb(0, 50, 57);
    }
    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 375px) and (max-height: 540px) {
        border-top: 4px solid rgb(0, 50, 57);
        margin-left: 24px;
    }
    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        border-top: 5px solid rgb(0, 50, 57);
        width: 30px;
        margin-left: 3px;
        margin-bottom: 23px;
        display: none;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        border-top: 5px solid rgb(0, 50, 57);
        width: 30px;
        margin-left: 3px;
        margin-bottom: 23px;
        display: none;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        border-top: 5px solid rgb(0, 50, 57);
        width: 30px;
        margin-left: 3px;
        margin-bottom: 23px;
        display: none;
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
    
    // LANDSCAPE MOBILE SCREENS - MOTOG4 & GALAXYS5 - IPHONE,6,7,8 & X - LANDSCAPE
    @media only screen and (min-width: 568px) and (max-width: 667px)
    and (min-height: 320px) and (max-height: 375px) {
        font-size: 17px;
        margin-left: 22px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 375px) and (max-height: 540px) {
        font-size: 22px;
        margin-left: 23px;
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

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        display: none;
    }
`;
const StyledPleaseScrollTwo = styled.h3`
    margin-left: 19px;
    margin-top: 0px;
    font-size: 12px;
    color: rgb(0, 50, 57);
    display: none;
    
    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        display: block;
        font-size: 23px;
        font-weight: 600;
        margin-left: 3px;
        line-height: 1.13em;
        // background: red;
        width: 132px;
        height: 30px;
        border-bottom: 3px solid rgb(0, 50, 57);
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        display: block;
        font-size: 23px;
        font-weight: 600;
        margin-left: 3px;
        line-height: 1.13em;
        // background: red;
        width: 132px;
        height: 30px;
        border-bottom: 3px solid rgb(0, 50, 57);
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        display: block;
        font-size: 35px;
        font-weight: 600;
        margin-left: 3px;
        line-height: 1.13em;
        // background: red;
        width: 199px;
        height: 45px;
        border-bottom: 3px solid rgb(0, 50, 57);
    }
    `;
