import React from 'react';
import styled from 'styled-components';
import ProjectsHeading from './ProjectsHeading';
import ProjectsCopy from './ProjectsCopy';
import ProjectBox from './ProjectBox';

const ProjectsPage = () => {
    return (
        <>
            <StyledProjectsIntroBox>
                <StyledProjectContent>
                    <ProjectsHeading />
                    <ProjectsCopy />
                </StyledProjectContent>
            </StyledProjectsIntroBox>
            <StyledProjectImageBox>
                <ProjectBox />
            </StyledProjectImageBox>
        </>
    )
}

export default ProjectsPage;

const StyledProjectsIntroBox = styled.div`
    height: 85vh;
    width: 100%;
    background-color: rgb(253, 167, 159);
    margin-top: 0;
    background-size: cover;
    display: flex;
    align-items: center;
`;
const StyledProjectContent = styled.div`
    width: 83%;
    height: 300px;
    margin-top: 25px;
    // background: yellow;
`;
const StyledProjectImageBox = styled.div`
    width: 100%;
    height: 100vh;
    background: red;
    display: flex;
    justify-content: center;
`;