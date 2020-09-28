import React from 'react';
import styled from 'styled-components';
import AboutImg from './images/about-img.jpg'

const AboutBox = () => {
    return (
        <StyledAboutImg img={AboutImg}>

        </StyledAboutImg>
    )
}

export default AboutBox;

const StyledAboutImg = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${props => props.img});
    background-size: cover;
`;