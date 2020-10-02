import React from 'react';
import styled from 'styled-components';
import MainBlackLogo from './images/logo-border-black.png'
import WorkPicKeyCode from './images/work-picture-keycode.png';


const WorkPage = () => {
    return (
        <StyledBackground>
            <StyledBlackLogo src={MainBlackLogo} alt="Gareth's Logo" />
            {/* <StyledX>X</StyledX> */}
            <StyledContentBox>
                <StyledImgFrame>
                    <StyledWorkImg src={WorkPicKeyCode} />
                </StyledImgFrame>
                <StyledCopyFrame>
                    <StyledCopyBox>
                        <StyledHeading>Key Code</StyledHeading>
                        <StyledCopy>The key code project required me to build an app the would
                        listen for a pressed key on the keyboard, and present the relevant
                        keys and codes of that particular key. This app was built using HTML,
                            CSS and vanilla Javascript.</StyledCopy>
                        <StyledLineTop />
                        <StyledLineBot />
                        <StyledSeeLink>See online</StyledSeeLink>
                    </StyledCopyBox>
                </StyledCopyFrame>
            </StyledContentBox>
            <StyledArrowBox>
                <StyledArrowPre>&lt; previous</StyledArrowPre>
                <StyledArrowNext>next &gt;</StyledArrowNext>
            </StyledArrowBox>
        </StyledBackground>
    )
}

export default WorkPage;

const StyledBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(5, 205, 229);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const StyledBlackLogo = styled.img`
    width: 30px;
    position: absolute;
    top: 20px;
    right: 20px;
`;
const StyledX = styled.h1`
    font-family: helvetica;
    font-size: 20px;
    color: rgb(0, 50, 57);
    position: absolute;
`;
const StyledContentBox = styled.div`
    width: 100%;
    height: 411px;
    // background: lightblue;
    margin-top: 15px
`;
const StyledImgFrame = styled.div`
    width: 100%;
    height: 200px;
    // background-color: rgb(255, 255, 255);
    background-color: rgb(149, 242, 253);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledWorkImg = styled.img`
    height: 85%;
`;
const StyledCopyFrame = styled.div`
    width: 100%;
    height: 210px;
    // background: red;
    display: flex;
    justify-content: flex-end;
`;
const StyledCopyBox = styled.div`
    width: 79%;
    height: 210px;
    // background: yellow;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
`;
const StyledHeading = styled.h1`
    font-family: helvetica;
    font-size: 20px;
    color: rgb(0, 50, 57);
    width: 100%;
    text-align: right;
    margin-right: 20px;
    margin-top: 8px;
`;
const StyledCopy = styled.p`
    font-family: 'Open Sans';
    font-size: 12px;
    width: 90%;
    text-align: right;
    margin-right: 20px;
    // color: rgb(0, 50, 57)
    color: rgb(17, 87, 97)
`;
const StyledLineTop = styled.div`
    width: 15px;
    height: 10px;
    border-top: 2px solid rgb(0, 50, 57);
    position: absolute;
    right: 20px;
    top: 44px;
`;
const StyledLineBot = styled.div`
    width: 15px;
    height: 10px;
    border-top: 2px solid rgb(0, 50, 57);
    position: absolute;
    right: 20px;
    top: 175px;
`;
const StyledSeeLink = styled.h2`
    font-family: helvetica;
    font-size: 20px;
    font-weight: 400;
    font-style: italic;
    color: rgb(0, 50, 57);
    // color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(0, 50, 57);
    // border-bottom: 2px solid rgb(255, 255, 255);
    width: 96px;
    text-align: right;
    margin-right: 20px;
    margin-top: 18px;
`;
const StyledArrowBox = styled.div`
    width: 100%;
    height: 30px;
    // background: blue;
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: space-between;
`;
const StyledArrowNext = styled.h3`
    font-family: helvetica;
    font-size: 12px;
    color: rgb(0, 50, 57);
    font-weight: 600;
    margin-top: 17px;
    margin-right: 20px;
    opacity: 80%;
`;
const StyledArrowPre = styled.h3`
    font-family: helvetica;
    font-size: 12px;
    color: rgb(0, 50, 57);
    font-weight: 600;
    margin-top: 17px;
    margin-left: 20px;
    opacity: 80%;
`;

