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
                        <StyledSeeLink href={props.workUrl}>See online</StyledSeeLink>
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
`;
const StyledBlackLogo = styled.img`
    width: 30px;
    position: absolute;
    top: 20px;
    right: 20px;
`;
const StyledX = styled.img`
    position: absolute;
    width: 20px;
    left: 17px;
    top: 51px;
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
    background-color: ${props => props.imgBackColor};
    // background-color: rgb(149, 242, 253);
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
    margin-top: 10px;
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
    border-bottom: 2px solid rgb(0, 50, 57);
    margin-top: 1px;
    margin-right: 20px;
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
const StyledNext = styled(Link)`
    font-family: helvetica;
    font-size: 12px;
    color: rgb(0, 50, 57);
    font-weight: 600;
    margin-top: 17px;
    margin-right: 20px;
    opacity: 80%;
    text-decoration: none;
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
`;

