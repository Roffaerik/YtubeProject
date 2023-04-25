import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    height: 4.5rem;
    background-color: #fff;
    padding: 0 1.6rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;

`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: -1rem;
    margin-left: -1rem;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #f2f2f2;
    }

`;

export const ButtonIcon = styled.img`
    width: 1.5rem;
    
    
`;


export const  SearchContainer= styled.div`
    display: flex;
    
`;

export const  SearchInputContainer= styled.div`
    margin-top: .5rem;
    width: 32rem;
    height: 2.5rem;
    border: 0.1rem solid #d3d3d3;
    border-radius: 4rem 0 0 4rem ;
    display: flex;
    align-items: center;
    padding: 0 1.6rem;
`;

export const  SearchInput= styled.input`
    width: 100%;
    height: 2rem;
    outline: none;
    border: none; 
    
`;

export const  SearchButton= styled.div`
    margin-top: .5rem;
   border-radius: 0 4rem 4rem 0;
   height: 2.5rem;
   width: 5rem;
   background-color: #f8f8f8;
   border: .1rem solid #d3d3d3;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
`;

export const  HeaderButton= styled.div`
  width: 15rem;
  display: flex; 
  

`;

export const  MenuHeader= styled.div`

`;


