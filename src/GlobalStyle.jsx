import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Lato', sans-serif;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
}

body{
    overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 1rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

a{
    text-decoration: none;
}

li{
    list-style: none;
}

a,button,img,input,select{
    display: inline-block;
}

img{
    object-fit: cover;
    object-position: center;
}

h1{
    font-size: 5rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
}


.common-heading{
font-weight: 700;
font-size: 3.2rem;
color: ${({ theme }) => theme.colors.primary};
}

h3{
    font-size: 2.3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.orange};
}

h4{
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
}

p{
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.para};
}


.container{
    max-width: 120rem;
    margin: 0rem auto;
}

.section{
    padding: 10rem 0rem;
}

.flex{
    display: flex;
}

.grid{
    display: grid;
    gap: 5rem;
}

.grid-two-column{
    grid-template-columns: repeat(2, 1fr);
}

.grid-three-column{
    grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
    grid-template-columns: repeat(4, 1fr);
}





/*** Media-Queries Start ***/
// 1326px 
@media (max-width: ${({theme}) => theme.media.largeDevice}) {
    .container{
        padding: 0rem 5rem;
    }
    .grid-four-column{
        grid-template-columns: repeat(3,1fr);
    }
}

// 1100px
@media (max-width: ${({theme}) => theme.media.mediumDevice}) {
    html{
        font-size: 56.25%;
    }
}


// 768px 
@media (max-width: ${({theme}) => theme.media.mobile}) {
    .section{
        padding: 7rem 0rem;
    }
    html{
        font-size: 50%;
    }
}

@media (max-width: 400px) {
    .container{
        padding: 0rem 2rem;
    }
}

/*** Media-Queries End   ***/

`;
