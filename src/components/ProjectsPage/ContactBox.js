import React from 'react';
import styled from 'styled-components';
import ContactHeading from './ContactHeading';
import ContactDetails from './ContactDetails';

const ContactBox = () => {
    return (
        <StyledContactBox>
            <StyledContactContent>
                <ContactHeading />
                <ContactDetails />
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
    height: 290px;
    background: lightblue;
`;

