import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ContactHeading from './ContactHeading';
import ContactDetails from './ContactDetails';
import SocialWhiteNav from './SocialWhiteNav';
import MainLogoPink from './Images/main-logo-pink.png';

const ContactBox = () => {
    return (
        <StyledContactBox>
            {/* <Link to="/home">
                <StyledLogoPink src={MainLogoPink} />
            </Link> */}
            <StyledContactContent>
                <ContactHeading />
                <StyledDetailsBox>
                    <ContactDetails />
                    <SocialWhiteNav />
                </StyledDetailsBox>
                <Link to="/home">
                    <StyledLogoPink src={MainLogoPink} />
                </Link>
            </StyledContactContent>
        </StyledContactBox>
    )
}

export default ContactBox;

const StyledContactBox = styled.div`
    width: 100%;
    height: 350px;
    background-color: rgb(0, 50, 57);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT
    @media only screen and (min-width: 567px) and (max-width: 668px)
    and (min-height: 319px) and (max-height: 376px) {
      height: 180px;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
        height: 180px;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        height: 180px;
    }
`;
const StyledContactContent = styled.div`
    width: 86%;
    height: 283px;
    // background: lightblue;

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT
    @media only screen and (min-width: 567px) and (max-width: 668px)
    and (min-height: 319px) and (max-height: 376px) {
      display: flex;
      height: 100px;
      justify-content: space-between;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
        display: flex;
        height: 100px;
        justify-content: space-between;
    }

    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        display: flex;
        height: 100px;
        justify-content: space-between;
    }
`;
const StyledLogoPink = styled.img`
    width: 30px;
    position: absolute;
    bottom: 30px;
    right: 20px;

    // LANDSCAPE SMALL MOBILE SCREENS - IPHONE,6,7,8 - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT
    @media only screen and (min-width: 567px) and (max-width: 668px)
    and (min-height: 319px) and (max-height: 376px) {
      width: 33px;
         position: static;
    }

    // LANDSCAPE BIG MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & PLUS - GALAXY DUO - LANDSCAPE CONTACT BIG PHONES
    @media only screen and (min-width: 719px) and (max-width: 824px)
    and (min-height: 374px) and (max-height: 541px) {
         width: 33px;
         position: static;
    }
    
    // SURFACE DUO TO REGULAR IPAD - LANDSCAPE
    @media only screen and (min-width: 542px) and (max-width: 1025px)
    and (min-height: 722px) and (max-height: 790px) {
        width: 33px;
         position: static;
    }
`;
const StyledDetailsBox = styled.div`
    width: 250px;
    height: 95px;
    // background: red;
`;


