import React from 'react'
import { Link } from 'react-router-dom';

//components
import Button from '../Buttons/button'

// Api Menu

import MenuApi from '../../api/menu.json'

const Menu = (props) =>{
    // la linea de abajo esta harcodeada, falta la logica para hacer que reaccione al tipo de usuario.
    const menu = MenuApi.Menu[0]

    
 

    return(
        
        <ul>
            {menu.options.map( (item) =>{
                return (
                    <li key={item.id}> 
                        <Button clase='regular-button' contenido={item.text} />   
                     </li>
                )
            })}

            <li>
                <Link to='/'>
                <Button clase ='regular-button exit' contenido='salir' />
                </Link>               
            </li>
        </ul>

        
        
    )
}


export default Menu