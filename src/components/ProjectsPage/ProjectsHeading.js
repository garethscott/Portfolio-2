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

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE PROJECTS
    @media only screen and (min-width: 567px) and (max-width: 824px)
    and (min-height: 319px) and (max-height: 541px) {
        font-size: 44px;
        line-height: 0.90em;
        width: 300px;
        margin-left: 20px;
        margin-top: 0px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
        width: 320px;
        height: 200px;
    }

    // // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    // @media only screen and (min-width: 542px) and (max-width: 1025px)
    // and (min-height: 722px) and (max-height: 1026px) {
    //     width: 320px;
    //     height: 200px;
    // }
    
    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        width: 320px;
        height: 230px;
    }

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     width: 320px;
    //     height: 230px;
    // }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        width: 320px;
        height: 230px;
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
    
    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE PROJECTS
    @media only screen and (min-width: 567px) and (max-width: 824px)
    and (min-height: 319px) and (max-height: 541px) {
        font-size: 44px;
        line-height: 0.90em;
        margin-top: 0px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
        margin-left: 0px;
        margin-top: 0px;
        font-size: 55px;
        line-height: 0.9em;
        width: 400px;
    }

    // // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    // @media only screen and (min-width: 542px) and (max-width: 1025px)
    // and (min-height: 722px) and (max-height: 1026px) {
    //     margin-left: 0px;
    //     margin-top: 0px;
    //     font-size: 55px;
    //     line-height: 0.9em;
    //     width: 400px;
    // }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        margin-left: 0px;
        margin-top: 0px;
        margin-bottom: 100px;
        font-size: 70px;
        line-height: 0.9em;
        width: 600px;
        height: 200px;
    }

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     margin-left: 0px;
    //     margin-top: 0px;
    //     margin-bottom: 100px;
    //     font-size: 70px;
    //     line-height: 0.9em;
    //     width: 600px;
    //     height: 200px;
    // }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        margin-left: 0px;
        margin-top: 0px;
        margin-bottom: 100px;
        font-size: 70px;
        line-height: 0.9em;
        width: 600px;
        height: 200px;
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
    }
    
    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE PROJECTS
    @media only screen and (min-width: 567px) and (max-width: 824px)
    and (min-height: 319px) and (max-height: 541px) {
      top: 104px;
      left: 190px;
    }
    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
        position: absolute;
        top: 133px;
        left: 212px;
    }

    // // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    // @media only screen and (min-width: 542px) and (max-width: 1025px)
    // and (min-height: 722px) and (max-height: 1026px) {
    //     position: absolute;
    //     top: 133px;
    //     left: 212px;
    // }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        position: absolute;
        top: 170px;
        left: 270px;
        width: 12px;
        height: 12px;
    }

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     position: absolute;
    //     top: 170px;
    //     left: 270px;
    //     width: 12px;
    //     height: 12px;
    // }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        position: absolute;
        top: 170px;
        left: 270px;
        width: 12px;
        height: 12px;
    }
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
        border-top: 3px solid rgb(0, 50, 57);
        top: 170px;
    }

   // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE PROJECTS
    @media only screen and (min-width: 567px) and (max-width: 824px)
    and (min-height: 319px) and (max-height: 541px) {
      top: 146px;
      left: 21px;
      border-top: 3px solid rgb(0, 50, 57);
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
        position: absolute;
        left: 0px;
        top: 190px;
        border-top: 3px solid rgb(0, 50, 57);
        width: 20px;
    }
    
    // // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    // @media only screen and (min-width: 542px) and (max-width: 1025px)
    // and (min-height: 722px) and (max-height: 1026px) {
    //     position: absolute;
    //     left: 0px;
    //     top: 190px;
    //     border-top: 3px solid rgb(0, 50, 57);
    //     width: 20px;
    // }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        position: absolute;
        left: 0px;
        top: 225px;
        border-top: 3px solid rgb(0, 50, 57);
        width: 20px;
    }

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     position: absolute;
    //     left: 0px;
    //     top: 225px;
    //     border-top: 3px solid rgb(0, 50, 57);
    //     width: 20px;
    // }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        position: absolute;
        left: 0px;
        top: 225px;
        border-top: 3px solid rgb(0, 50, 57);
        width: 20px;
    }

`;

