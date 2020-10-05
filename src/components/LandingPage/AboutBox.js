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
`;
