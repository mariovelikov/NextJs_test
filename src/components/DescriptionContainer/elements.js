import styled from "styled-components";

export const Container = styled.div`
margin-top: 1rem;
display: flex;
gap: 3.6rem;
flex-direction: column;

`

export const DescriptionBox = styled.div`
height: 15rem;
width: ${(props) => props.size}%;
padding: 2rem;
background-color: #f1f3f5;
border: ${(props) => props.border ? `solid 2px ${props.border}` : null};
border-radius: 2rem;

display: flex;
gap: 2rem;
justify-content: center;
align-items: center;
`

export const Content = styled.div`
display: flex;
flex-direction: column;
gap: 0.8rem;
`

export const ContentTitle = styled.div`
font-size: 1.8rem;
font-weight: 800;
color: ${props => props.color ? props.color : null};
text-decoration: ${(props) => props.color ? 'underline' : null};
`

export const Text = styled.div`
font-size: 1.4rem;
font-weight: 400;

p{
    display: inline;
    font-weight: 700;
}
`