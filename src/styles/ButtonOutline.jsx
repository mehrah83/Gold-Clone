import styled from "styled-components";

export const ButtonOutline = styled.button`
background: transparent;
font-size: 1.5rem;
font-weight: 500;
color: ${({theme}) => theme.colors.primary};
border: 0.1rem solid ${({theme}) => theme.colors.primary};
outline: none;
cursor: pointer;
padding: 1rem;
`;