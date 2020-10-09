import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AboutHeading from './AboutHeading';
import AboutCopy from './AboutCopy';

const AboutBox = (props) => {
    return (
        <StyledAboutImg>
            <StyledAboutContent>
                <AboutHeading />
                <AboutCopy />
                <StyledTextFade />
                <StyledLineBelow />
                <StyledMove>
                    <StyledProjectsLink
                        onMouseEnter={props.seeprojectsenter}
                        onMouseLeave={props.seeprojectsleave}
                        seeprojectscolor={props.seeprojectscolor}
                        to="/projects">See my projects
                    </StyledProjectsLink>
                </StyledMove>
            </StyledAboutContent>
        </StyledAboutImg >
    )
}

export default AboutBox;

const StyledAboutImg = styled.div`
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-color: rgb(5, 205, 229);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-attachment: fixed;
    
`;
const StyledAboutContent = styled.div`
    width: 90%;
    height: 550px;
    position: relative;

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        height: 595px;
    }

    // LANDSCAPE MOBILE SCREENS - MOTOG4 & GALAXYS5 - IPHONE,6,7,8 - LANDSCAPE
    @media only screen and (min-width: 568px) and (max-width: 667px)
    and (min-height: 320px) and (max-height: 375px) {
        //  background: red;
         width: 90%;
         height: 70%;
         display: flex;
        margin-left: 40px;

    }
    
    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 375px) and (max-height: 540px) {
        width: 90%;
         height: 70%;
         display: flex;
        margin-left: 40px;
    }
    
    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        margin-left: 20%;
        // background: red;
        width: 60%;
        height: 570px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 769px) and (max-height: 1026px) {
        margin-left: 10%;
        // background: red;
        width: 60%;
        height: 570px;
    }
`;
const StyledTextFade = styled.div`
    position: absolute;    
    bottom: 100px;
    left: 18px;
    content: "";
    width: 90%;
    height: 150px;
    background-image: linear-gradient(to bottom, 
        rgba(5, 205, 229, 0) 0%,
        rgba(5, 205, 229, 1) 90%);
    z-index: 5;

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        bottom: 68px;
        left: 18px;
    }

    // LANDSCAPE MOBILE SCREENS - MOTOG4 & GALAXYS5 - IPHONE,6,7,8 - LANDSCAPE
    @media only screen and (min-width: 568px) and (max-width: 667px)
    and (min-height: 320px) and (max-height: 375px) {
       width: 55%;
       height: 100px;
       bottom: 0%;
       left: 215px;
    }
    
    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 375px) and (max-height: 540px) {
        width: 55%;
       height: 100px;
       bottom: 0%;
       left: 215px;
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
const StyledLineBelow = styled.div`
    width: 20px;
    height: 10px;
    border-top: 2px solid rgb(0, 50, 57);
    position: absolute;
    left: 20px;
    bottom: 80px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
        border-top: 3px solid rgb(0, 50, 57);
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        border-top: 3px solid rgb(0, 50, 57);
        bottom: 51px;
    }
    
    // LANDSCAPE MOBILE SCREENS - MOTOG4 & GALAXYS5 - IPHONE,6,7,8 & X - LANDSCAPE
    @media only screen and (min-width: 568px) and (max-width: 667px)
    and (min-height: 320px) and (max-height: 375px) {
       display: none;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 375px) and (max-height: 540px) {
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
const StyledProjectsLink = styled(Link)`
    font-family: helvetica;
    font-size: 20px;
    font-weight: 600;
    font-style: italic;
    color: ${props => props.seeprojectscolor};
    text-decoration: none;
    width: 96px;
    text-align: right;
    margin-right: 20px;
    margin-top: 12px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
        font-size: 23px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        bottom: 48px;
        font-size: 26px;
        width: 300px;
    }

    // LANDSCAPE MOBILE SCREENS - MOTOG4 & GALAXYS5 - IPHONE,6,7,8 & X - LANDSCAPE
    @media only screen and (min-width: 568px) and (max-width: 667px)
    and (min-height: 320px) and (max-height: 375px) {
        position: absolute;
        left: 17px;
        top: 147px;
        // background: yellow;
        width: 170px;
        text-align: left;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 375px) and (max-height: 540px) {
        position: absolute;
        left: 17px;
        top: 147px;
        // background: yellow;
        width: 170px;
        text-align: left;
    }
    
    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        display: block;
        font-size: 23px;
        font-weight: 600;
        margin-left: 0px;
        line-height: 1.13em;
        font-style: normal;
        text-align: left:
        background: green;
        height: 30px;
        width: 177px;
        border-bottom: 3px solid rgb(0, 50, 57);
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        display: block;
        font-size: 23px;
        font-weight: 600;
        margin-left: 0px;
        line-height: 1.13em;
        font-style: normal;
        text-align: left:
        background: green;
        height: 30px;
        width: 177px;
        border-bottom: 3px solid rgb(0, 50, 57);
    }
    
`;
const StyledMove = styled.div`
   width: 200px;
   height: 40px;
   margin-top: 35px;
   margin-left: 18px;
   cursor: pointer;

   // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
   @media only screen and (min-width: 374px) and (max-width: 541px)
   and (min-height: 665px) and (max-height: 824px) {
       width: 220px;
   }
   
   // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        margin-left: 0px;
        margin-top: -15px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        margin-left: 0px;
        margin-top: -15px;
    }
`;
