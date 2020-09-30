import React from 'react';
import styled from 'styled-components';


const ProjectsHeading = () => {
    return (
        <StyledProjectsHeadingBox>
            <StyledProjectsHeading>A selection <br />of my recent<br /> projects
            <StyledFullStop />
                <StyledTopLine />
            </StyledProjectsHeading>
        </StyledProjectsHeadingBox>
    )
}

export default ProjectsHeading;

const StyledProjectsHeadingBox = styled.div`
   height: 150px;
   width: 265px;
//    background-color: red;
   position: relative;
`;
const StyledProjectsHeading = styled.h1`
   color: rgb(0, 50, 57);
   font-family: Helvetica;
   font-size: 41px;
   font-weight: 700;
   line-height: 0.97em;
   letter-spacing: -0.01em;
   margin-left: 20px;
//    background: lightBlue;
   height: 150px;
   margin-top: 0;
`;
const StyledFullStop = styled.div`
   height: 9px;
   width: 9px;
   border-radius: 50%;
   background-color: rgb(255, 255, 255);
   position: absolute;
   left: 180px;
   top: 103px;
`;
const StyledTopLine = styled.div`
   width: 20px;
   height: 10px;
   border-top: 2px solid rgb(0, 50, 57);
   position: absolute;
   top: 142px;
`;

