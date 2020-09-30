import React from 'react';
import styled from 'styled-components';

const AboutHeading = () => {
    return (
        <StyledAboutHeadingBox>
            <StyledAboutHeading>A little<br /> bit about<br /> myself</StyledAboutHeading>
            <StyledFullStop />
            <StyledLineShort />
        </StyledAboutHeadingBox>
    )
}

export default AboutHeading;

const StyledAboutHeadingBox = styled.div`
    height: 167px;
    width: 265px;
    margin-top: 30px;
    margin-bottom: 14px;
    // background: red;
    position: relative;
`;
const StyledAboutHeading = styled.h1`
    color: rgb(0, 50, 57);
    font-family: Helvetica;
    font-size: 41px;
    font-weight: 700;
    line-height: 0.97em;
    letter-spacing: -0.01em;
    margin-left: 20px;
    margin-bottom: -10px;
    height: 150px;
`;
const StyledFullStop = styled.div`
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    position: absolute;
    left: 150px;
    bottom: 55px;
`;
const StyledLineShort = styled.div`
    width: 20px;
    height: 10px;
    border-top: 2px solid rgb(0, 50, 57);
    position: absolute;
    left: 20px;
    bottom: 15px;
`;