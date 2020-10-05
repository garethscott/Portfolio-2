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
    width: 89%;
    height: 250px;
    // background: lightblue;
    text-decoration: none;
    margin-bottom: 14px;

    // PORTRAIT MOBILE SCREENS - MOTOG4 & GALAXYS5 - PORTRAIT
   @media only screen and (min-width: 360px) and (max-width: 361px)
   and (min-height: 569px) and (max-height: 641px) {
      margin-bottom: 40px;
   }

   // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 & PLUS & X - PIXEL 2 & XL - SURFACE DUO
    @media only screen and (min-width: 374px) and (max-width: 541px)
    and (min-height: 665px) and (max-height: 824px) {
        margin-bottom: 58px;
    }

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & XL - SURFACE DUO - WIDER WIDTH
    @media only screen and (min-width: 410px) and (max-width: 541px)
    and (min-height: 730px) and (max-height: 824px) {
        margin-bottom: 80px;
    }

    // PORTRAIT MOBILE SCREENS - SURFACE DUO - WIDER WIDTH
    @media only screen and (min-width: 509px) and (max-width: 720px)
    and (min-height: 719px) and (max-height: 721px) {
        margin-bottom: 180px;
        width: 92%;
    }
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

    // PORTRAIT MOBILE SCREENS - IPHONE,6,7,8 PLUS - PIXEL 2 & XL - SURFACE DUO - WIDER WIDTH
    @media only screen and (min-width: 410px) and (max-width: 541px)
    and (min-height: 730px) and (max-height: 824px) {
        font-size: 16px;
    }
`;
const StyledSubHeading = styled.h3`
    color: rgb(0, 50, 57);
    font-family: helvetica;
    font-size: 16px;
    font-weight: 200;
    margin-top: -15px;
`;