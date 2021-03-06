import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectBox = (props) => {
   return (
      <StyledProjectBox to={props.url}>
         <StyledImg src={props.img} alt={props.alt} />
         <StyledFig>
            <StyledImgHeading>{props.heading}</StyledImgHeading>
            <StyledSubHeading>{props.subHeading}</StyledSubHeading>
         </StyledFig>
      </StyledProjectBox>
   )
}
export default ProjectBox;

const StyledProjectBox = styled(Link)`
    width: 89%;
   //  height: 270px;
   //  background: red;
    text-decoration: none;
   //  margin-bottom: 14px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
   @media only screen and (min-width: 360px) and (max-width: 361px)
   and (min-height: 569px) and (max-height: 641px) {
      // margin-bottom: 40px;
      background: red;
   }

   
   
   // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
      //   margin-bottom: 58px;
      //   background: red;
    }

    
    
    
    
    
    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & XL - SURFACE DUO - WIDER WIDTH
    @media only screen and (min-width: 410px) and (max-width: 541px)
    and (min-height: 730px) and (max-height: 824px) {
      //   margin-bottom: 80px;
      background: red;
    }

    // PORTRAIT MOBILE SCREENS - SURFACE DUO - WIDER WIDTH
    @media only screen and (min-width: 509px) and (max-width: 720px)
    and (min-height: 719px) and (max-height: 721px) {
      //   margin-bottom: 184px;
        width: 92%;
    }
    
    
    // LANDSCAPE PROJECT PICTURES

    // LANDSCAPE BIG MOBILE SCREENS - GALAXY S5 & MOTO - LANDSCAPE PROJECTS
    @media only screen and (min-width: 639px) and (max-width: 641px)
    and (min-height: 359px) and (max-height: 361px) {
       margin-top: 0px; 
       margin-left: 20px;
       margin-bottom: 0px;
       width: 288px;
      //  background: red;
       height: 270px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - PIXEL 2 - LANDSCAPE PROJECTS
    @media only screen and (min-width: 730px) and (max-width: 732px)
    and (min-height: 410px) and (max-height: 412px) {
       margin-top: 0px; 
       margin-left: 20px;
       margin-bottom: 0px;
       width: 335px;
    //    background: red;
       height: 307px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - PIXEL XL - LANDSCAPE PROJECTS
    @media only screen and (min-width: 822px) and (max-width: 824px)
    and (min-height: 410px) and (max-height: 412px) {
       margin-top: 0px; 
       margin-left: 20px;
       margin-bottom: 0px;
       width: 247px;
    //    background: red;
       height: 240px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE 5/SE - LANDSCAPE PROJECTS
    @media only screen and (min-width: 567px) and (max-width: 569px)
    and (min-height: 319px) and (max-height: 321px) {
       margin-top: 0px; 
       margin-left: 23px;
       margin-bottom: 0px;
       width: 247px;
    //    background: red;
       height: 200px;
    }
    
    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 - LANDSCAPE PROJECTS
    @media only screen and (min-width: 664px) and (max-width: 668px)
    and (min-height: 374px) and (max-height: 376px) {
       margin-top: 0px; 
       margin-left: 23px;
       margin-bottom: 0px;
       width: 300px;
    //    background: red;
       height: 280px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - LANDSCAPE PROJECTS
    @media only screen and (min-width: 735px) and (max-width: 737px)
    and (min-height: 413px) and (max-height: 415px) {
       margin-top: 0px; 
       margin-left: 23px;
       margin-bottom: 20px;
       width: 333px;
       height: 285px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE X - LANDSCAPE PROJECTS
    @media only screen and (min-width: 811px) and (max-width: 813px)
    and (min-height: 374px) and (max-height: 376px) {
       margin-top: 0px; 
       margin-left: 23px;
       margin-bottom: 15px;
       width: 241px;
       height: 220px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - SURFACE DUO - LANDSCAPE PROJECTS
    @media only screen and (min-width: 719px) and (max-width: 721px)
    and (min-height: 539px) and (max-height: 541px) {
       margin-top: 0px; 
       margin-left: 23px;
       margin-bottom: 0px;
       width: 210px;
       height: 212px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
        width: 31%;
      //   margin-bottom: 4%;
        height: 293px;
    }

   //  // SURFACE DUO TO REGULAR IPAD - PORTRAIT
   //  @media only screen and (min-width: 542px) and (max-width: 1025px)
   //  and (min-height: 769px) and (max-height: 1026px) {
   //    width: 31%;
   //    //   margin-bottom: 4%;
   //      height: 230px;
   //    }

   // REGULAR IPAD TO IPAD PRO - LANDSCAPE
   @media only screen and (min-width: 1025px) and (max-width: 1366px) {
      width: 31%;
      //   margin-bottom: 4%;
        height: 20%;
    }

   //  // REGULAR IPAD TO IPAD PRO - PORTRAIT
   //  @media only screen and (min-width: 1023px) and (max-width: 1026px)
   //  and (min-height: 1365px) and (max-height: 1367px) {
   //    width: 31%;
   //    //   margin-bottom: 4%;
   //      height: 290px;
   //  }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
      width: 31%;
      //   margin-bottom: 4%;
        height: 20%;
    }
`;
const StyledImg = styled.img`
    width: 100%;

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE PROJECTS
    @media only screen and (min-width: 567px) and (max-width: 824px)
    and (min-height: 319px) and (max-height: 541px) {
       margin: 0px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
        width: 100%;
    }

   //  // SURFACE DUO TO REGULAR IPAD - PORTRAIT
   //  @media only screen and (min-width: 542px) and (max-width: 1025px)
   //  and (min-height: 722px) and (max-height: 1026px) {
   //    width: 100%;
   //  }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
      width: 100%;
    }

   //  // REGULAR IPAD TO IPAD PRO - PORTRAIT
   //  @media only screen and (min-width: 1023px) and (max-width: 1026px)
   //  and (min-height: 1365px) and (max-height: 1367px) {
   //    width: 100%;
   //  }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
      width: 100%;
    }
`;
const StyledFig = styled.div`
    width: 100px;
`;
const StyledImgHeading = styled.h3`
    margin-top: 2px;
    color: rgb(0, 50, 57);
    font-family: helvetica;
    font-size: 15px;
    width: 150px;

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & XL - SURFACE DUO - WIDER WIDTH
    @media only screen and (min-width: 410px) and (max-width: 541px)
    and (min-height: 730px) and (max-height: 824px) {
        font-size: 16px;
    }

    // SURFACE PRO - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 539px) and (max-width: 541px)
    and (min-height: 719px) and (max-height: 721px) {
        font-size: 18px;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        font-size: 18px;
    }
    
   //  // REGULAR IPAD TO IPAD PRO - PORTRAIT
   //  @media only screen and (min-width: 1023px) and (max-width: 1026px)
   //  and (min-height: 1365px) and (max-height: 1367px) {
   //    font-size: 18px;
   //  }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
      font-size: 18px;
    }
`;
const StyledSubHeading = styled.h3`
    color: rgb(0, 50, 57);
    font-family: helvetica;
    font-size: 16px;
    font-weight: 200;
    margin-top: -15px;

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        font-size: 16px;
    }

   //  // REGULAR IPAD TO IPAD PRO - PORTRAIT
   //  @media only screen and (min-width: 1023px) and (max-width: 1026px)
   //  and (min-height: 1365px) and (max-height: 1367px) {
   //    font-size: 16px;
   //  }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
      font-size: 16px;
    }
`;