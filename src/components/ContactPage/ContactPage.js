import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainPinkLogo from '../ProjectsPage/Images/main-logo-pink.png';
import ContactPageHeading from './ContactPageHeading';
import ContactPageDetails from './ContactPageDetails';
import ContactPageNav from './ContactPageNav';

const ContactPage = () => {
    return (
        <StyledBackground>
            <Link to="/home">
                <StyledLogo src={MainPinkLogo} />
            </Link>
            <StyledContentBox>
                <Link to="/home">
                    <StyledLogoTwo src={MainPinkLogo} />
                </Link>
                <ContactPageHeading />
                <ContactPageDetails />
                <ContactPageNav />
            </StyledContentBox>
        </StyledBackground>
    )
}

export default ContactPage;

const StyledBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 50, 57);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        justify-content: unset;
    }

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     justify-content: unset;
    // }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        justify-content: unset;
    }
`;
const StyledLogo = styled.img`
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

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 567px) and (max-width: 824px)
    and (min-height: 319px) and (max-height: 541px) {
        display: none;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
        // right: 30px;
        // top: 30px;
        display: none;
    }
    
    // // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    // @media only screen and (min-width: 542px) and (max-width: 1025px)
    // and (min-height: 769px) and (max-height: 1026px) {
    //     right: 30px;
    //     top: 30px;
    //     width: 35px;
    // }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        display: none;
    }

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     display: none;
    // }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        display: none;
    }
`;
const StyledLogoTwo = styled.img`
    width: 33px;
    display: none;
   
    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 567px) and (max-width: 824px)
    and (min-height: 319px) and (max-height: 541px) {
        display: inline;
        position: absolute;
        top: 18px;
        right: 0
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
        display: inline;
        position: absolute;
        right: 0;
    }

    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        display: inline;
        position: absolute;
        right: 0;
        width: 40px;
    }

    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     display: inline;
    //     position: absolute;
    //     right: 0;
    //     width: 40px;
    // }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        display: inline;
        position: absolute;
        right: 0;
        width: 40px;
    }
`;
const StyledContentBox = styled.div`
    width: 87%;
    height: 285px;
    // margin-left: 20px;
    padding: 15px 0;
    border-top: 3px solid rgb(255, 255, 255);
    border-bottom: 3px solid rgb(255, 255, 255);
    position: relative;

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        width: 89%;
    }

    // SURFACE PRO - PORTRAIT - WORK IMAGE FRAME
    @media only screen and (min-width: 539px) and (max-width: 541px)
    and (min-height: 719px) and (max-height: 721px) {
        width: 92%;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 721px) and (max-width: 1024px)
    and (min-height: 541px) {
        margin-rigth: 30px;
        width: 80%;
    }
    
    // // SURFACE DUO TO REGULAR IPAD - PORTRAIT
    // @media only screen and (min-width: 542px) and (max-width: 1025px)
    // and (min-height: 769px) and (max-height: 1026px) {
    //     width: 91%;
    // }
    
    // REGULAR IPAD TO IPAD PRO - LANDSCAPE
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
        width: 40%;
        margin-left: 5%;
    }
    
    // // REGULAR IPAD TO IPAD PRO - PORTRAIT
    // @media only screen and (min-width: 1023px) and (max-width: 1026px)
    // and (min-height: 1365px) and (max-height: 1367px) {
    //     width: 40%;
    //     margin-left: 5%;
    // }

    // BREAK POINT AFTER IPAD PRO
    @media only screen and (min-width: 1367px) {
        width: 40%;
        max-width: 600px;
        margin-left: 5%;
    }
`;