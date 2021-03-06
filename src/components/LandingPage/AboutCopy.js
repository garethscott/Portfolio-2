import React from 'react';
import styled from 'styled-components';

const AboutCopy = () => {
    return (
        <StyledOverflow>
            <StyledTopPara>
                Hello, I’m Gareth. I am junior web developer
                based in the North West with a passion for front-end
                development and design.
            </StyledTopPara>
            <StyledAboutCopy>
                Having worked as a freelance illustrator for a number of
                years, I have now transferred my love for drawing to building
                websites and applications. I’m excited to embark on this new
                career in coding, and start working with technology whilst
                maintaining my eye for the creative.
                </StyledAboutCopy>
            <StyledAboutCopy>
                I have a degree in Graphic Design as well as other
                qualifications in Art & Design.
                </StyledAboutCopy>
            <StyledAboutCopy>
                I have recently graduated from the Coding school Code Nation and
                I am now proficient in a number of different tools and technologies.
                This business led course also developed my skills in communication and
                collaboration, skills which are vital for a career in coding.
                </StyledAboutCopy>
            <StyledAboutCopy>
                Please follow the link below to see a selection of the work I completed
                at Code Nation.
                </StyledAboutCopy>
            <StyledBottomSpacer />
        </StyledOverflow>
    )
}

export default AboutCopy

const StyledOverflow = styled.div`
    height: 260px;
    width: 90%;
    margin-top: -26px;
    margin-left: 20px;
    position: relative;
    overflow-y: scroll;
    

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        height: 330px;
      
    }

    // LANDSCAPE MOBILE SCREENS - MOTOG4 & GALAXYS5 - IPHONE,6,7,8 - LANDSCAPE
    @media only screen and (min-width: 568px) and (max-width: 667px)
    and (min-height: 320px) and (max-height: 375px) {
       height: 97%;
       width: 60%;
       margin-left: 200px;
       margin-top: 0px;
       position: absolute;
       left: 20px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 375px) and (max-height: 540px) {
        height: 97%;
       width: 60%;
       margin-left: 200px;
       margin-top: 0px;
       position: absolute;
       left: 20px;
    }
    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
        margin-left: 0px;
        margin-top: 50px;
        overflow-y: unset;
        // background: yellow;
        height: 280px;
        width: 650px;
        column-count: 2;
        colomn-width: 275px;
        column-gap: 1px;
        text-align: justify;
    }

    // // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    // @media only screen and (min-width: 542px) and (max-width: 1025px)
    // and (min-height: 722px) and (max-height: 1026px) {
    //     margin-left: 0px;
    //     margin-top: 50px;
    //     overflow-y: unset;
    //     // background: yellow;
    //     height: 280px;
    //     width: 650px;
    //     column-count: 2;
    //     colomn-width: 275px;
    //     column-gap: 1px;
    //     text-align: justify;
    // }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        margin-left: 0px;
        margin-top: 50px;
        overflow-y: unset;
        height: 290px;
        width: 800px;
        column-count: 2;
        colomn-width: 275px;
        column-gap: 1px;
        text-align: justify;
    }

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     margin-left: 0px;
    //     margin-top: 50px;
    //     overflow-y: unset;
    //     height: 290px;
    //     width: 800px;
    //     column-count: 2;
    //     colomn-width: 275px;
    //     column-gap: 1px;
    //     text-align: justify;
    // }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        margin-left: 0px;
        margin-top: 50px;
        overflow-y: unset;
        height: 290px;
        width: 800px;
        column-count: 2;
        colomn-width: 275px;
        column-gap: 1px;
        text-align: justify;
    }
`;
const StyledTopPara = styled.p`
width: 85%;
font-family: 'Open Sans';
font-size: 12px;
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

// PORTRAIT MOBILE SCREENS - SURFACE DUO - WIDER WIDTH
@media only screen and (min-width: 509px) and (max-width: 720px)
and (min-height: 719px) and (max-height: 721px) {
    width: 330px;
}

// LANDSCAPE MOBILE SCREENS - MOTOG4 & GALAXYS5 - IPHONE,6,7,8 & X - LANDSCAPE
@media only screen and (min-width: 568px) and (max-width: 667px)
and (min-height: 320px) and (max-height: 375px) {
    margin-top: 0px;
    font-size: 13px;
    line-height: 1.4em;
}

// LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 375px) and (max-height: 540px) {
        margin-top: 0px;
        font-size: 13px;
        line-height: 1.4em;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
       margin-top: 0px;
    }

    // // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    // @media only screen and (min-width: 542px) and (max-width: 1025px)
    // and (min-height: 722px) and (max-height: 1026px) {
    //     margin-top: 0px;
    // }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        margin-top: 0px;
    }

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     margin-top: 0px;
    // }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        margin-top: 0px;
        font-size: 14px;
        line-height: 1.45em;
    }

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     font-size: 14px;
    //     line-height: 1.45em;
    // }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        margin-top: 0px;
        font-size: 14px;
        line-height: 1.45em;
    }
`;
const StyledAboutCopy = styled.p`
    width: 85%;
    font-family: 'Open Sans';
    font-size: 12px;
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

    // PORTRAIT MOBILE SCREENS - SURFACE DUO - WIDER WIDTH
    @media only screen and (min-width: 509px) and (max-width: 720px)
    and (min-height: 719px) and (max-height: 721px) {
        width: 330px;
    }

    // LANDSCAPE MOBILE SCREENS - MOTOG4 & GALAXYS5 - IPHONE,6,7,8 & X - LANDSCAPE
    @media only screen and (min-width: 568px) and (max-width: 667px)
    and (min-height: 320px) and (max-height: 375px) {
        font-size: 13px;
        line-height: 1.4em;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 Plus & X - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 375px) and (max-height: 540px) {
        font-size: 13px;
        line-height: 1.4em;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        font-size: 14px;
        line-height: 1.45em;
    }

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     font-size: 14px;
    //     line-height: 1.45em;
    // }
    
    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        font-size: 14px;
        line-height: 1.45em;
    }
 `;
const StyledBottomSpacer = styled.div`
    width: 79%;
    height: 50px;
`;