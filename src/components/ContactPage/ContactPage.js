import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainPinkLogo from '../ProjectsPage/Images/main-logo-pink.png';
import ContactHeading from '../ProjectsPage/ContactHeading';
import ContactDetails from '../ProjectsPage/ContactDetails';
import SocialWhiteNav from '../ProjectsPage/SocialWhiteNav';

const ContactPage = () => {
    return (
        <StyledBackground>
            <Link to="/home">
                <StyledLogo src={MainPinkLogo} />
            </Link>
            <StyledContentBox>
                <ContactHeading />
                <ContactDetails />
                <SocialWhiteNav />
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
    position: relative;
`;
const StyledLogo = styled.img`
    width: 30px;
    position: absolute;
    top: 20px;
    right: 20px;
`;
const StyledContentBox = styled.div`
    width: 83%;
    height: 285px;
    // background: lightblue;
    margin-left: 20px;
    padding: 15px 0;
    border-top: 2px solid rgb(255, 255, 255);
    border-bottom: 2px solid rgb(255, 255, 255);
`;