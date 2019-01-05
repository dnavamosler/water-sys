import React from 'react'
import { Link } from 'react-router-dom';

//components
import Button from '../Buttons/button'
import './menu.css'
// Api Menu

import MenuApi from '../../api/menu.json'

const Menu = (props) =>{
    // la linea de abajo esta harcodeada, falta la logica para hacer que reaccione al tipo de usuario.

    const menuOpt = MenuApi.Menu[props.menu].options

    
 

    return(
        
        <ul className='menu'>
            {menuOpt.map( (item) =>{
                return (
                    <li key={item.id}> 
                        <Button 
                            className='regular-button' 
                            contenido={item.text} 
                        />   
                     </li>
                        )
            })}

            <li>
                <Link to='/'>
                <Button className='regular-button exit' contenido='Salir' onClick={props.handleExit} />
                </Link>               
            </li>
        </ul>

        
        
    )
}


export default Menu