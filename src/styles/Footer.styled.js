import styled from "styled-components";

export const ContactForm = styled.form`
    width: 40%;

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}){
        width: 90%;
        margin: auto;
    }
`
export const input= styled.input`
    display:inline-block;
    width: max-content;
    padding: 1rem 2rem;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.primary_light};
    border: 1px solid ${({theme}) => theme.colors.gray};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        color: ${({theme}) => theme.colors.primary_light};
        background-color: ${({theme}) => theme.colors.white};
    }
`

export const FormLabel = styled.p`
    color: ${({theme}) => theme.colors.primary_light};
    padding-bottom: 10px;
`

export const FormInput = styled.input`
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};
    border: 2px solid ${({theme}) => theme.colors.primary_light};
    color: ${({theme}) => theme.colors.black};
    border-radius: 5px;
    padding: 15px;

    &::placeholder{
        color: ${({theme}) => theme.colors.para_text_color};
    }
`
export const FormInput1 = styled.input`
    display:inline-block;
    width: max-content;
    padding: 1rem 2rem;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.primary_light};
    border: 1px solid ${({theme}) => theme.colors.gray};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        color: ${({theme}) => theme.colors.primary_light};
        background-color: ${({theme}) => theme.colors.white};
    }
`