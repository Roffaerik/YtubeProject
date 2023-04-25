import {  TitleContainer,MenuItem, ButtonIcon} from "./styles"
import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";




const items = [
  {
    
    label: "Inicio",
    link: '/',
  },

  {
    label: "Shorts",
    link: '/history',
   
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
   
      label: "Inicio",
      link: '/',
    },
  
    {
      label: "Shorts",
      link: '/history',
      
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

function Barra(){
  const {openMenu, setOpenMenu} = useContext(UserContext);
  const navigate = useNavigate();

return (

  <TitleContainer openMenu={openMenu}>
    
  {items.map((item) => (
      <MenuItem openMenu= {openMenu}onClick={() => navigate(item.link)}>
       
          <ButtonIcon />
          <span>{item.label}</span>
         
      </MenuItem>
  
   
  ))}
  </TitleContainer>
)
}


export default Barra;