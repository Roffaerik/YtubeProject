import { Container,
        LogoContainer,
        ButtonContainer,
        ButtonIcon,
        SearchContainer,
        SearchInputContainer,
        SearchInput,
        SearchButton,
        HeaderButton,
        
        
} from "./styles";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo_2.png';
import Lupa from '../../assets/search.png'
import MicIcon from '../../assets/microfone-gravador.png'
import VideoIcom from '../../assets/video.png'
import NotificationIcon from '../../assets/sino.png'
import { UserContext } from "../../contexts/userContext";
import React, {useContext} from "react";
import Barra from "../Barra";


interface IProps{
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
}

function Header({ openMenu, setOpenMenu}: IProps){
    

    return (
        <div>
    <Container>
        <LogoContainer>
            <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 1rem 0 0'>
                <ButtonIcon alt="" src={HamburguerIcon} />
            </ButtonContainer>
            <img
            style={{ cursor: 'pointer', width: '100px' }}
            alt=" "
            src={ Logo }
            />
        </LogoContainer>
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={Lupa} />
                </SearchButton>
                <ButtonContainer margin="0 0 0 .5rem">
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>
            <HeaderButton>
                <ButtonContainer margin="0 0 0 .5rem">
                    <ButtonIcon alt="" src={VideoIcom} />
                </ButtonContainer>
                <ButtonContainer margin="0 0 0 .5rem">
                    <ButtonIcon alt="" src={NotificationIcon} />
                </ButtonContainer>
                <ButtonContainer margin="0 0 0 .5rem">
                    p
                </ButtonContainer>
            </HeaderButton>
        </Container> 
        </div>
    )
}

export default Header;