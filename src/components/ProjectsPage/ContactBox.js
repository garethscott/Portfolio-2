import React from 'react';
import styled from 'styled-components';
import ContactHeading from './ContactHeading';
import ContactDetails from './ContactDetails';
import SocialWhiteNav from './SocialWhiteNav';
import MainLogoPink from './Images/main-logo-pink.png';

const ContactBox = () => {
    return (
        <StyledContactBox>
            <StyledContactContent>
                <ContactHeading />
                <ContactDetails />
                <StyledLogosBox>
                    <SocialWhiteNav />
                    <StyledLogoPink src={MainLogoPink} />
                </StyledLogosBox>
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
`;
const StyledContactContent = styled.div`
    width: 86%;
    height: 283px;
    // background: lightblue;
`;
const StyledLogosBox = styled.div`
    width: 100%;
    height: 35px;
    // background: yellow;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 8px;
`;
const StyledLogoPink = styled.img`
    width: 30px;
`;

