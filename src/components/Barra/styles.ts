import styled from "styled-components";

export const TitleContainer = styled.div<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu? '15rem' :'150rem'};
height: 3rem;
position: fixed;
display: flex;
box-sizing: border-box;
background-color: white;
margin-top: -.5rem;




`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
align-items: center;



span {
    font-weight: ${({ openMenu }) => openMenu? '400' : '400'};
    margin-left: ${({ openMenu }) => openMenu? 'none' : 'none'};
    font-size: ${({ openMenu }) => openMenu? '.8rem' : '.8rem'};
    background-color: #f2f2f2;
    padding: .5rem;
    border-radius: .5rem;

}


:hover {
    cursor: pointer;
    
}
`;

export const ButtonIcon = styled.img`
    width: 2rem;
    
   
`;


