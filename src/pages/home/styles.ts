import styled from "styled-components";

export const Container = styled.div`
background-color: white;


`


export const VideoContainer = styled.div<{ openMenu: boolean }>`
width: 100%;
max-width: 160rem;
display: flex;
grid-template-columns:  ${({ openMenu }) => openMenu? 'repeat(4fr, 1)' : 'repeat(5fr, 1)'};
column-gap: 2rem;
row-gap: 5rem;
`