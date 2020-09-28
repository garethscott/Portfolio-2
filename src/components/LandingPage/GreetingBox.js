import React from 'react';
import styled from 'styled-components';
import GreetImg from './images/landing-image-1.jpg';

const GreetingBox = () => {
    return (
        <StyledGreetImg img={GreetImg}>

        </StyledGreetImg>
    )
}

export default GreetingBox;

const StyledGreetImg = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${props => props.img});
    background-size: cover;
`;
