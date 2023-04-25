import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu? '15rem' :'8rem'};
height: calc(100vh - 5.5rem);
box-sizing: border-box;
padding: 1rem 1rem 1rem 1rem;
display: flex;
align-items: center;
flex-direction: column;
overflow-y: auto;
position: sticky;
top: 5.5rem;
`;

export const MenuIten = styled.div<{ openMenu: boolean }>`
width: 90%;
min-height: ${({ openMenu }) => openMenu? '4rem' :'5rem'};
border-radius: 1rem;
cursor: pointer;
padding: .2rem 1.5rem;
box-sizing: border-box;
display: flex;
flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
align-items: center;
justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};


span {
    font-weight: ${({ openMenu }) => openMenu? '400' : '400'};
    margin-left: ${({ openMenu }) => openMenu? '2rem' : 'none'};
    font-size: ${({ openMenu }) => openMenu? '1.2rem' : '.8rem'};
    
}

:hover {
    background-color: #f2f2f2;
    
}
`;

export const ButtonIcon = styled.img`
    width: 2rem;

`;





