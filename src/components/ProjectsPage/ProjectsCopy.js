import React from 'react';
import styled from 'styled-components';

const ProjectsCopy = () => {
    return (
        <StyledProjectsCopyBox>
            <StyledProjectsCopy>
                Here’s a selection of projects that I have completed whilst
                studying at Code Nation. They’re built using a range of different
                technologies, including HTML5 & CSS3, Javascript, React, Node.js,
                Express and MongoDB.
            </StyledProjectsCopy>
        </StyledProjectsCopyBox>
    )
}

export default ProjectsCopy;

const StyledProjectsCopyBox = styled.div`
    width: 93%; 
    height: 130px;
    // background: blue;
    margin-left: 20px;
`;
const StyledProjectsCopy = styled.p`
    width: 79%;
    font-family: 'Open Sans';
    font-size: 12px;
    margin-top: 15px;
    color: rgb(0, 50, 57);
`;