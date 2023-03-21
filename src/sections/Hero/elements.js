import styled from "styled-components";

export const StyledSectionContainer = styled.div`
 max-width: 80rem;
 margin: 5rem auto;
`

export const StyledTitle = styled.p`
margin: 0;
font-size: 3.6rem;
font-weight: 600;
text-align: center;
`

export const StyledUnderTitle = styled.p`
margin: 0;
font-size: 1.8rem;
text-align: center;
`

export const StyledImgDescriptCont = styled.div`
margin-top: 6rem;
display: grid;
grid-template-columns: 1fr 1.2fr;
gap: 3.6rem;

@media (max-width: 645px) {   
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 1.2fr 1fr;

    padding: 5rem;
}
`