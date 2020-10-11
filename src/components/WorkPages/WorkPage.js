import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainBlackLogo from './images/logo-border-black.png'
import XButton from './images/x-button.png';


const WorkPage = (props) => {
    return (
        <StyledBackground backColor={props.backgroundColor}>
            <Link to="/home">
                <StyledBlackLogo src={MainBlackLogo} alt="Gareth's Logo" />
            </Link>
            <Link to="/projects">
                <StyledX src={XButton} alt="Closing Button, back to projects" />
            </Link>
            <StyledContentBox>
                <StyledImgFrame imgBackColor={props.backImg}>
                    <StyledWorkImg src={props.workImg} />
                </StyledImgFrame>
                <StyledCopyFrame>
                    <StyledCopyBox>
                        <StyledHeading>{props.heading}</StyledHeading>
                        <StyledCopy>{props.copy}</StyledCopy>
                        <StyledLineBot />
                        <StyledLineTop />
                        <StyledSeeLink href={props.workUrl} target="_blank" rel="noopener noreferrer">See online</StyledSeeLink>
                    </StyledCopyBox>
                </StyledCopyFrame>
            </StyledContentBox>
            <StyledArrowBox>
                <StyledPrevious to={props.previousUrl}>&lt; previous</StyledPrevious>
                <StyledNext to={props.nextUrl}>next &gt;</StyledNext>
            </StyledArrowBox>
        </StyledBackground>
    )
}

export default WorkPage;

const StyledBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.backColor};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
       align-items: flex-start; 
    }
`;
const StyledBlackLogo = styled.img`
    width: 30px;
    position: absolute;
    top: 20px;
    right: 20px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
       width: 33px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
   @media only screen and (min-width: 374px) and (max-width: 541px)
   and (min-height: 665px) and (max-height: 824px) {
       width: 33px;
   }

   // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - MOTO - LANDSCAPE WORKPAGE
    @media only screen and (min-width: 567px) and (max-width: 668px)
    and (min-height: 319px) and (max-height: 376px) {
       width: 25px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
        width: 25px;
    }
    
    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        top: 30px;
        right: 30px;
        width: 30px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 769px) and (max-height: 1026px) {
        top: 30px;
        right: 30px;
        width: 30px;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        top: 30px;
        right: 30px;
        width: 35px;
    }
    
    // REGULAR IPAD TO IPAD PRO - PORTRAIT
    @media only screen and (min-width: 1023px) and (max-width: 1026px)
    and (min-height: 1365px) and (max-height: 1367px) {
        top: 30px;
        right: 30px;
        width: 35px;
    }

`;
const StyledX = styled.img`
    position: absolute;
    width: 20px;
    left: 17px;
    top: 51px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
       width: 23px;
    }
    
    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        width: 23px;
    }

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - MOTO - LANDSCAPE WORKPAGE
    @media only screen and (min-width: 567px) and (max-width: 668px)
    and (min-height: 319px) and (max-height: 376px) {
      top: 20px;
      left: 20px
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
        top: 20px;
        left: 20px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        top: 30px;
        left: 30px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 769px) and (max-height: 1026px) {
        top: 30px;
        left: 30px;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        top: 30px;
        left: 30px;
        width: 30px;
    }

    // REGULAR IPAD TO IPAD PRO - PORTRAIT
    @media only screen and (min-width: 1023px) and (max-width: 1026px)
    and (min-height: 1365px) and (max-height: 1367px) {
        top: 30px;
        left: 30px;
        width: 30px;
    }
`;
const StyledContentBox = styled.div`
    width: 100%;
    height: 411px;
    // background: lightblue;
    margin-top: 15px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
       height: 480px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        height: 550px;
    }

    // PIXEL 2 - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 410px) and (max-width: 412px)
    and (min-height: 730px) and (max-height: 732px) {
        height: 560px;
    }

    // PIXEL 2 XL - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 410px) and (max-width: 412px)
    and (min-height: 822px) and (max-height: 824px) {
        height: 650px;
    }

    // IPHONE 6 7 8 - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 374px) and (max-width: 376px)
    and (min-height: 665px) and (max-height: 668px) {
        height: 500px;
    }

    // IPHONE 6 7 8 PLUS - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 413px) and (max-width: 415px)
    and (min-height: 735px) and (max-height: 737px) {
        height: 565px;
    }

    // IPHONE X - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 374px) and (max-width: 376px)
    and (min-height: 811px) and (max-height: 813px) {
        height: 645px;
    }

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - MOTO - LANDSCAPE WORKPAGE
    @media only screen and (min-width: 567px) and (max-width: 668px)
    and (min-height: 319px) and (max-height: 376px) {
    //    background: lightblue;
       display: flex;
       flex-direction: row-reverse;
       height: 68%;
       margin-top: 36px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
        //    background: lightblue;
       display: flex;
       flex-direction: row-reverse;
       height: 68%;
       margin-top: 36px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        // background: blue;
        display: flex;
        flex-direction: row-reverse;
        height: 60%;
    }
    
    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 769px) and (max-height: 1026px) {
        // background: lightblue;
        height: 65%;
        width: 92%;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        // background: blue;
        display: flex;
        flex-direction: row-reverse;
        height: 60%;
    }

    // REGULAR IPAD TO IPAD PRO - PORTRAIT
    @media only screen and (min-width: 1023px) and (max-width: 1026px)
    and (min-height: 1365px) and (max-height: 1367px) {
        // background: lightblue;
        height: 65%;
        width: 92%;
    }
    
`;
const StyledImgFrame = styled.div`
    width: 100%;
    height: 200px;
    background-color: ${props => props.imgBackColor};
    display: flex;
    justify-content: center;
    align-items: center;
    
    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
    @media only screen and (min-width: 360px) and (max-width: 361px)
    and (min-height: 569px) and (max-height: 641px) {
        height: 260px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        height: 300px;
    }

    // PIXEL 2 - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 410px) and (max-width: 412px)
    and (min-height: 730px) and (max-height: 732px) {
        height: 330px;
    }

    // PIXEL 2 XL - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 410px) and (max-width: 412px)
    and (min-height: 822px) and (max-height: 824px) {
        height: 340px;
    }

    // IPHONE 6 7 8 - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 374px) and (max-width: 376px)
    and (min-height: 665px) and (max-height: 668px) {
        height: 280px;
    }

    // IPHONE 6 7 8 PLUS - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 413px) and (max-width: 415px)
    and (min-height: 735px) and (max-height: 737px) {
        height: 330px;
    }
    // IPHONE X - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 374px) and (max-width: 376px)
    and (min-height: 811px) and (max-height: 813px) {
        height: 360px;
    }

    // SURFACE PRO - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 539px) and (max-width: 541px)
    and (min-height: 719px) and (max-height: 721px) {
        height: 340px;
    }

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - MOTO - LANDSCAPE WORKPAGE
    @media only screen and (min-width: 567px) and (max-width: 668px)
    and (min-height: 319px) and (max-height: 376px) {
        height: 100%;
        width: 60%;
        margin-right: 20px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
        height: 100%;
        width: 60%;
        margin-right: 20px;
    }

    // SUFACE DUO - LANDSCAPE - WORK IMAGE FRAME - LANDSCAPE
    @media only screen and (min-width: 719px) and (max-width: 721px)
    and (min-height: 539px) and (max-height: 541px) {
        width: 70%;
    }

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE SE MOTO & GALAXY S5  - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 567px) and (max-width: 641px)
    and (min-height: 319px) and (max-height: 361px) {
        width: 50%;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        height: 100%;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        width: 60%;
        margin-right: 30px;
    }

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 769px) and (max-height: 1026px) {
        height: 65%;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        width: 60%;
        margin-right: 30px;
        height: 90%;
    }
    
    // REGULAR IPAD TO IPAD PRO - PORTRAIT
    @media only screen and (min-width: 1023px) and (max-width: 1026px)
    and (min-height: 1365px) and (max-height: 1367px) {
        height: 65%;
    }
`;
const StyledWorkImg = styled.img`
    height: 85%;

    // IPHONE X - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 374px) and (max-width: 376px)
    and (min-height: 811px) and (max-height: 813px) {
        height: 70%;
    }

    // SUFACE DUO - LANDSCAPE - WORK IMAGE FRAME - LANDSCAPE
    @media only screen and (min-width: 719px) and (max-width: 721px)
    and (min-height: 539px) and (max-height: 541px) {
        height: 70%;
    }
    // SUFACE DUO - LANDSCAPE - WORK IMAGE FRAME - LANDSCAPE
    @media only screen and (min-width: 719px) and (max-width: 721px)
    and (min-height: 539px) and (max-height: 541px) {
        height: 80%;
    }
`;
const StyledCopyFrame = styled.div`
    width: 100%;
    height: 210px;
    // background: red;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - MOTO - LANDSCAPE WORKPAGE
    @media only screen and (min-width: 567px) and (max-width: 668px)
    and (min-height: 319px) and (max-height: 376px) {
       margin-top: -10px;
       width: 40%;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
        margin-top: -10px;
        width: 40%;
    }
    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE SE MOTO & GALAXY S5  - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 567px) and (max-width: 641px)
    and (min-height: 319px) and (max-height: 361px) {
        width: 50%;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        width: 37%;
        margin-top: 0px;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        width: 37%;
        margin-top: 0px;
    }
    
    
`;
const StyledCopyBox = styled.div`
    width: 79%;
    height: 210px;
    // background: yellow;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE SE MOTO & GALAXY S5  - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 567px) and (max-width: 641px)
    and (min-height: 319px) and (max-height: 361px) {
        width: 90%;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        margin-top: 0px;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        margin-top: 0px;
    }

    // REGULAR IPAD TO IPAD PRO - PORTRAIT
    @media only screen and (min-width: 1023px) and (max-width: 1026px)
    and (min-height: 1365px) and (max-height: 1367px) {
        margin-top: 20px;
        margin-right: 0px;
        font-size: 25px;
    }
    
`;
const StyledHeading = styled.h1`
    font-family: helvetica;
    font-size: 20px;
    color: rgb(0, 50, 57);
    width: 100%;
    text-align: right;
    margin-right: 20px;
    margin-top: 8px;

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        margin-top: 0px;
    }
    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 769px) and (max-height: 1026px) {
        margin-right: 0px;
        font-size: 23px;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        margin-top: 0px;
        font-size: 25px;
    }

    // REGULAR IPAD TO IPAD PRO - PORTRAIT
    @media only screen and (min-width: 1023px) and (max-width: 1026px)
    and (min-height: 1365px) and (max-height: 1367px) {
        margin-right: 0px;
        font-size: 25px;
    }
`;
const StyledCopy = styled.p`
    font-family: 'Open Sans';
    font-size: 12px;
    width: 90%;
    text-align: right;
    margin-right: 20px;
    // color: rgb(0, 50, 57)
    color: rgba(0, 50, 57, 80%);

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        font-size: 13px;
       line-height: 1.4em; 
    }

    // SURFACE PRO - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 539px) and (max-width: 541px)
    and (min-height: 719px) and (max-height: 721px) {
        max-width: 300px;
    }

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE SE MOTO & GALAXY S5  - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 567px) and (max-width: 641px)
    and (min-height: 319px) and (max-height: 361px) {
        font-size: 12px;
       line-height: 1.4em;
    }
    
    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        font-size: 14px;
       line-height: 1.5em;
    }

    // REGULAR IPAD TO IPAD PRO - PORTRAIT
    @media only screen and (min-width: 1023px) and (max-width: 1026px)
    and (min-height: 1365px) and (max-height: 1367px) {
        font-size: 14px;
       line-height: 1.5em;
       margin-right: 0px;
       width: 350px;
    }
    
`;
const StyledLineTop = styled.div`
    width: 15px;
    height: 10px;
    border-top: 2px solid rgb(0, 50, 57);
    position: absolute;
    right: 20px;
    top: 36px;

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 769px) and (max-height: 1026px) {
        right: 0px;
        top: 46px;
    }
    
    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        top: 44px;
    }

    // REGULAR IPAD TO IPAD PRO - PORTRAIT
    @media only screen and (min-width: 1023px) and (max-width: 1026px)
    and (min-height: 1365px) and (max-height: 1367px) {
        right: 0px;
        top: 46px;
    }
`;
const StyledLineBot = styled.div`
    width: 15px;
    height: 10px;
    border-bottom: 2px solid rgb(0, 50, 57);
    margin-top: 1px;
    margin-right: 20px;

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 769px) and (max-height: 1026px) {
        margin-right: 0px;
    }

    // REGULAR IPAD TO IPAD PRO - PORTRAIT
    @media only screen and (min-width: 1023px) and (max-width: 1026px)
    and (min-height: 1365px) and (max-height: 1367px) {
        margin-right: 0px;
    }
`;
const StyledSeeLink = styled.a`
    font-family: helvetica;
    font-size: 20px;
    font-weight: 400;
    font-style: italic;
    color: rgb(0, 50, 57);
    border-bottom: 1px solid rgb(0, 50, 57);
    text-decoration: none;
    width: 96px;
    text-align: right;
    margin-right: 20px;
    margin-top: 12px;

    // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 769px) and (max-height: 1026px) {
        margin-right: 0px;
        font-size: 23px;
        width: 113px;
    }
    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        font-size: 24px;
        width: 114px;
       
    }

    // REGULAR IPAD TO IPAD PRO - PORTRAIT
    @media only screen and (min-width: 1023px) and (max-width: 1026px)
    and (min-height: 1365px) and (max-height: 1367px) {
        margin-right: 0px;
        font-size: 23px;
        width: 113px;
    }
`;
const StyledArrowBox = styled.div`
    width: 100%;
    height: 30px;
    // background: blue;
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: space-between;

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        margin-bottom: 7px;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        margin-bottom: 7px;
    }

    // REGULAR IPAD TO IPAD PRO - PORTRAIT
    @media only screen and (min-width: 1023px) and (max-width: 1026px)
    and (min-height: 1365px) and (max-height: 1367px) {
        margin-bottom: 20px;
        width: 97%;
    }
`;
const StyledNext = styled(Link)`
    font-family: helvetica;
    font-size: 12px;
    color: rgb(0, 50, 57);
    font-weight: 600;
    margin-top: 17px;
    margin-right: 20px;
    opacity: 80%;
    text-decoration: none;

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        margin-right: 30px;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        margin-right: 30px;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        font-size: 15px;
    }

    // REGULAR IPAD TO IPAD PRO - PORTRAIT
    @media only screen and (min-width: 1023px) and (max-width: 1026px)
    and (min-height: 1365px) and (max-height: 1367px) {
        font-size: 15px;
    }
`;
const StyledPrevious = styled(Link)`
    font-family: helvetica;
    font-size: 12px;
    color: rgb(0, 50, 57);
    font-weight: 600;
    margin-top: 17px;
    margin-left: 20px;
    opacity: 80%;
    text-decoration: none;

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        margin-left: 30px;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        margin-left: 30px;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px)
    and (min-height: 769px) and (max-height: 1024px) {
        font-size: 15px;
    }

    // REGULAR IPAD TO IPAD PRO - PORTRAIT
    @media only screen and (min-width: 1023px) and (max-width: 1026px)
    and (min-height: 1365px) and (max-height: 1367px) {
        font-size: 15px;
    }
`;

