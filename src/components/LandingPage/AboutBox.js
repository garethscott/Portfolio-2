import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AboutImg from './images/about-img.jpg';
import AboutHeading from './AboutHeading';
import AboutCopy from './AboutCopy';

const AboutBox = () => {
    return (
        <StyledAboutImg img={AboutImg}>
            <StyledAboutContent>
                <AboutHeading />
                <AboutCopy />
                <StyledTextFade />
                <StyledLineBelow />
                <StyledMove><StyledProjectsLink to="/projects">See my projects</StyledProjectsLink></StyledMove>
            </StyledAboutContent>
        </StyledAboutImg >
    )
}

export default AboutBox;

const StyledAboutImg = styled.div`
    height: 100vh;
    width: 100%;
    // background-image: url(${props => props.img});
    background-size: cover;
    background-color: rgb(5, 205, 229);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-attachment: fixed;
`;
const StyledAboutContent = styled.div`
    width: 90%;
    height: 550px;
    position: relative;
`;
const StyledTextFade = styled.div`
    position: absolute;    
    bottom: 100px;
    left: 20px
    content: "";
    width: 90%;
    height: 150px;
    background-image: linear-gradient(to bottom, 
        rgba(5, 205, 229, 0) 0%,
        rgba(5, 205, 229, 1) 90%);
    z-index: 5;
`;
const StyledLineBelow = styled.div`
    width: 20px;
    height: 10px;
    border-top: 2px solid rgb(0, 50, 57);
    position: absolute;
    left: 20px;
    bottom: 80px;
`;
const StyledProjectsLink = styled(Link)`
    color: rgb(0, 50, 57);
    // margin-left: 20px;
    font-size: 20px;
    height: 40px;
    width: 151px;
    text-decoration: none;
    font-family: helvetica;
    font-weight: 800;
    // color: rgb(255, 255, 255);
`;
const StyledMove = styled.div`
   width: 200px;
   height: 40px;
   margin-top: 35px;
   margin-left: 18px;
   cursor: pointer;
`;
