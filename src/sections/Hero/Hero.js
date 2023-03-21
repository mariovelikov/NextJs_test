import React from 'react'
import { Image } from '../../collections/Image/index'
import { DesciptionContainer } from '../../components/DescriptionContainer'
import { StyledImgDescriptCont, StyledSectionContainer, StyledTitle, StyledUnderTitle } from './elements'

export const Hero = () => {
    return (
        <StyledSectionContainer>
            <StyledTitle> Managed agency selection </StyledTitle>
            <StyledUnderTitle> Stengthen your onboarding process </StyledUnderTitle>

            <StyledImgDescriptCont>
                <Image />
                <DesciptionContainer />
            </StyledImgDescriptCont>

        </StyledSectionContainer>
    )
}