import { ButtonIcon, Container, MenuIten} from "./styles"
import NotificationIcon from '../../assets/sino.png'
import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import MicIcon from '../../assets/microfone-gravador.png'



const items = [
  {
    icon: MicIcon,
    label: "Inicio",
    link: '/',
  },

  {
    label: "Shorts",
    link: '/history',
    icon: MicIcon
  },

  {
      label: "Inscriçôes",
      link: '/inscritions'
    },
    
    {
      label: "Biblioteca",
      link: '/library'
    },
    {
      icon: MicIcon,
      label: "Inicio",
      link: '/',
    },
  
    {
      label: "Shorts",
      link: '/history',
      icon: MicIcon
    },
  
    {
        label: "Inscriçôes",
        link: '/inscritions'
      },
      
      {
        label: "Biblioteca",
        link: '/library'
      }
      ,
  
    {
      label: "Shorts",
      link: '/history',
      icon: MicIcon
    },
  
    {
        label: "Inscriçôes",
        link: '/inscritions'
      },
      
      {
        label: "Biblioteca",
        link: '/library'
      }
      ,
  
      {
        label: "Shorts",
        link: '/history',
        icon: MicIcon
      },
    
      {
          label: "Inscriçôes",
          link: '/inscritions'
        },
        
        {
          label: "Biblioteca",
          link: '/library'
        }
      
]

interface IProps {
  openMenu: boolean,
}
function Menu({openMenu }: IProps){

return (

  <Container openMenu={openMenu}>
    
  {items.map((item) => (
      <MenuIten openMenu= {openMenu}onClick={() => (item.link)}>
       
          <ButtonIcon alt="" src={item.icon} />
          <span>{item.label}</span>
         
      </MenuIten>
  
   
  ))}
  </Container>
)
}



export default Menu;