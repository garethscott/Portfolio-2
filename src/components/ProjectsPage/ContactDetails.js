import React from 'react';
import styled from 'styled-components';

const ContactDetails = () => {
     return (
          <StyledContactDeetBox>
               <StyledPhone>+44 0 7947 710 770</StyledPhone>
               <StyledEmail>g.scott1986@gmail.com</StyledEmail>
               <StyledLine />
          </StyledContactDeetBox>

     )
}

export default ContactDetails;

const StyledContactDeetBox = styled.div`
     width: 255px;
     height: 90px;
     // background: blue;
     position: relative;

     // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - MOTO - LANDSCAPE CONTACT
     @media only screen and (min-width: 567px) and (max-width: 668px)
     and (min-height: 319px) and (max-height: 376px) {
          height: 53px;
     }

     // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
         height: 53px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
        height: 53px;
    }

//     // SURFACE DUO TO REGULAR IPAD - PORTRAIT
//     @media only screen and (min-width: 542px) and (max-width: 1025px)
//     and (min-height: 722px) and (max-height: 1026px) {
//      height: 53px;
//     }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
     height: 53px;
    }

//     // REGULAR IPAD TO IPAD PRO - PORTRAIT
//     @media only screen and (min-width: 1023px) and (max-width: 1026px)
//     and (min-height: 1365px) and (max-height: 1367px) {
//      height: 53px;
//     }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
     height: 53px;
    }
`;
const StyledPhone = styled.h3`
     font-family: helvetica;
     font-size: 20px;
     color: rgb(255, 255, 255);
     margin-top: 22px;

     // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - MOTO - LANDSCAPE CONTACT
    @media only screen and (min-width: 567px) and (max-width: 668px)
    and (min-height: 319px) and (max-height: 376px) {
     margin-top: 0px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
     margin-top: 0px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
       margin-top: 0px;
    }

//     // SURFACE DUO TO REGULAR IPAD - PORTRAIT
//     @media only screen and (min-width: 542px) and (max-width: 1025px)
//     and (min-height: 722px) and (max-height: 1026px) {
//        margin-top: 0px;
//     }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
     margin-top: 0px;
    }

//     // REGULAR IPAD TO IPAD PRO - PORTRAIT
//     @media only screen and (min-width: 1023px) and (max-width: 1026px)
//     and (min-height: 1365px) and (max-height: 1367px) {
//      margin-top: 0px;
//     }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
     margin-top: 0px;
    }
`;
const StyledEmail = styled.h3`
     font-family: helvetica;
     font-size: 20px;
     color: rgb(255, 255, 255);
     margin-top: -10px;
`;
const StyledLine = styled.div`
     width: 20px;
     height: 10px;
     border-top: 2px solid rgb(255, 255, 255);
     position: absolute;
     bottom: -3px;

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
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
     display: none;
    }

//     // SURFACE DUO TO REGULAR IPAD - PORTRAIT
//     @media only screen and (min-width: 542px) and (max-width: 1025px)
//     and (min-height: 722px) and (max-height: 1026px) {
//      display: none;
//     }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
     display: none;
    }

//     // REGULAR IPAD TO IPAD PRO - PORTRAIT
//     @media only screen and (min-width: 1023px) and (max-width: 1026px)
//     and (min-height: 1365px) and (max-height: 1367px) {
//      display: none;
//     }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
     display: none;
    }
`;