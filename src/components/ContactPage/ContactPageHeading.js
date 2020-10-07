import React from 'react';
import styled from 'styled-components';

const ContactPageHeading = () => {
    return (
        <StyledContactHeadingBox>
            <StyledContactHeading>Would love to hear from you</StyledContactHeading>
            <StyledFullStop />
            <StyledBotLine />
        </StyledContactHeadingBox>
    )
}

export default ContactPageHeading;

const StyledContactHeadingBox = styled.div`
    width: 230px;
    position: relative;
    height: 130px;
    // background: red;
    margin-top: -27px;
`;
const StyledContactHeading = styled.h1`
    color: rgb(255, 255, 255);
    font-family: Helvetica;
    font-size: 41px;
    font-weight: 700;
    line-height: 0.97em;
    letter-spacing: -0.01em;
`;
const StyledFullStop = styled.div`
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    position: absolute;
    left: 175px;
    bottom: 17px;
`;
const StyledBotLine = styled.div`
    width: 20px;
    height: 10px;
    border-top: 2px solid rgb(255, 255, 255);
    position: absolute;
    left: 0px;
    top: 135px;
`;