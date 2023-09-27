import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
    position: relative;
    padding: 0 5%;

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}){
        display: none;
    }
    @media(max-width: 768px){
        display: none;
    }
`

export const ShowcaseImageCard = styled.div`
    background-color: #DBE9FA;
    border: 2px solid  ${({theme}) => theme.colors.secondary};
    width: max-content;
    height: max-content;
    padding-top: 0rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;

   
`

export const Particle = styled.img`
    position: absolute;
    top: ${({top}) =>top};
    left: ${({left}) =>left};
    right: ${({right}) =>right};
    bottom: ${({bottom}) =>bottom};
    transform: rotate(${({rotate}) => rotate});

    @media(max-width: 1080px){
        display: none;
    }
`