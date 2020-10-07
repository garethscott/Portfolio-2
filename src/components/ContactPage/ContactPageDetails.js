import React from 'react';
import styled from 'styled-components';

const ContactPageDetails = () => {
    return (
        <StyledContactDeetBox>
            <StyledPhone>+44 0 7947 710 770</StyledPhone>
            <StyledEmail>g.scott1986@gmail.com</StyledEmail>
            <StyledLine />
        </StyledContactDeetBox>

    )
}

export default ContactPageDetails;

const StyledContactDeetBox = styled.div`
     width: 255px;
     height: 90px;
     // background: blue;
     position: relative;
`;
const StyledPhone = styled.h3`
     font-family: helvetica;
     font-size: 20px;
     color: rgb(255, 255, 255);
     margin-top: 22px;
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
`;