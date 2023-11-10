import styled from "styled-components";

export const Button = styled.button`
background: ${({theme}) => theme.colors.primary};
font-size: 1.5rem;
font-weight: 500;
color: ${({theme}) => theme.colors.black};
border: none;
outline: none;
cursor: pointer;
padding: 1rem;
`;