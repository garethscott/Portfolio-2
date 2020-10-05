import React from 'react';
import styled from 'styled-components';


const ProjectsHeading = () => {
   return (
      <StyledProjectsHeadingBox>
         <StyledProjectsHeading>A selection <br />of my recent<br /> projects
            <StyledFullStop />
            <StyledTopLine />
         </StyledProjectsHeading>
      </StyledProjectsHeadingBox>
   )
}

export default ProjectsHeading;

const StyledProjectsHeadingBox = styled.div`
   height: 150px;
   width: 265px;
//    background-color: red;
   position: relative;

   // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
   @media only screen and (min-width: 360px) and (max-width: 361px)
   and (min-height: 569px) and (max-height: 641px) {
       width: 300px
   }

   // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
       width: 350px;
       margin-bottom: 40px;
    }
`;
const StyledProjectsHeading = styled.h1`
   color: rgb(0, 50, 57);
   font-family: Helvetica;
   font-size: 41px;
   font-weight: 700;
   line-height: 0.97em;
   letter-spacing: -0.01em;
   margin-left: 20px;
//    background: lightBlue;
   height: 150px;
   margin-top: 0;

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
    }
`;
const StyledFullStop = styled.div`
   height: 9px;
   width: 9px;
   border-radius: 50%;
   background-color: rgb(255, 255, 255);
   position: absolute;
   left: 180px;
   top: 103px;

   // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
      left: 191px;
      top: 113px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        top: 132px;
        left: 214px;
`;
const StyledTopLine = styled.div`
   width: 20px;
   height: 10px;
   border-top: 2px solid rgb(0, 50, 57);
   position: absolute;
   top: 142px;

   // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
   @media only screen and (min-width: 360px) and (max-width: 361px)
   and (min-height: 569px) and (max-height: 641px) {
      border-top: 3px solid rgb(0, 50, 57);
      top: 149px;
   }

   // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        top: 170px;
        border-top: 3px solid rgb(0, 50, 57);
    }
`;

