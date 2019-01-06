import React from 'react'

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
                                onClick={props.handleShowAgenda}             
                                className='regular-button' 
                                contenido={item.text} 
                            />   
                
                     </li>
                        )
            })}

            <li>
                <Button className='regular-button exit' contenido='Salir' onClick={props.handleExit} />
                          
            </li>
        </ul>

        
        
    )
}


export default Menu