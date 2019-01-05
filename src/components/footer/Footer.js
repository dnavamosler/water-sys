import React from 'react'
import './footer.css'


const Footer = (props) => {
    

    //logica para conseguir si el usuario que ingresa es administrador o usuario comun
    const typeUser = (usuario) =>{

       ( usuario == 'user')

        ? ( <h2>  ingresar como usuario </h2>)
        : (<h2>  ingresar como {props.user} </h2>)
    }
    
    
    return(
        <div >
            
                {typeUser(props.user)}                
            
        </div>
    )
}

export default Footer