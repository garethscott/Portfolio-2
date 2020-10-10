import React from 'react';
import styled from 'styled-components';

const ProjectsCopy = () => {
    return (
        <StyledProjectsCopyBox>
            <StyledProjectsCopy>
                Here’s a selection of projects that I have completed whilst
                studying at Code Nation. They’re built using a range of different
                technologies, including HTML5 & CSS3, Javascript, React, Node.js,
                Express and MongoDB.
            </StyledProjectsCopy>
        </StyledProjectsCopyBox>
    )
}

export default ProjectsCopy;

const StyledProjectsCopyBox = styled.div`
    width: 93%; 
    height: 130px;
    // background: blue;
    margin-left: 20px;

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE PROJECTS
    @media only screen and (min-width: 567px) and (max-width: 824px)
    and (min-height: 319px) and (max-height: 541px) {
       margin-left: 40px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE PROJECTS
    @media only screen and (min-width: 567px) and (max-width: 824px)
    and (min-height: 319px) and (max-height: 541px) {
      max-width: 450px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        margin-top: 20px;
        margin-left: 0px;
        width: 500px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        margin-top: 20px;
        margin-left: 0px;
        width: 500px;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        margin-top: 20px;
        margin-left: 0px;
        width: 600px;
    }
`;
const StyledProjectsCopy = styled.p`
    width: 79%;
    font-family: 'Open Sans';
    font-size: 12px;
    margin-top: 15px;
    color: rgba(0, 50, 57, 80%);

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
   @media only screen and (min-width: 360px) and (max-width: 361px)
   and (min-height: 569px) and (max-height: 641px) {
       font-size: 13px;
       line-height: 1.4em;
   }

   // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
   @media only screen and (min-width: 374px) and (max-width: 541px)
   and (min-height: 665px) and (max-height: 824px) {
       font-size: 13px;
      line-height: 1.4em; 
   }
   
   // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        font-size: 13px;
        line-height: 1.4em;
        text-align: justify;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 1026px) {
        font-size: 13px;
        line-height: 1.4em;
        text-align: justify;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        font-size: 14px;
        line-height: 1.5em;
        text-align: justify;
    }
`;