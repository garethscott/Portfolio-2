import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectBox = (props) => {
    return (
        <StyledProjectBox to={props.url}>
            <StyledImg src={props.img} alt={props.alt} />
            <StyledFig>
                <StyledImgHeading>{props.heading}</StyledImgHeading>
                <StyledSubHeading>{props.subHeading}</StyledSubHeading>
            </StyledFig>
        </StyledProjectBox>
    )
}
export default ProjectBox;

const StyledProjectBox = styled(Link)`
    width: 87%;
    height: 250px;
    // background: lightblue;
    text-decoration: none;
    margin-bottom: 14px;
`;
const StyledImg = styled.img`
    width: 100%;
    height:
`;
const StyledFig = styled.div`
    width: 100px;
`;
const StyledImgHeading = styled.h3`
    margin-top: 2px;
    color: rgb(0, 50, 57);
    font-family: helvetica;
    font-size: 15px;
    width: 150px;
`;
const StyledSubHeading = styled.h3`
    color: rgb(0, 50, 57);
    font-family: helvetica;
    font-size: 15px;
    font-weight: 200;
    margin-top: -15px;
`;