import React from 'react'
import { Link } from 'react-router-dom';

//components
import Button from '../Buttons/button'

// Api Menu

import MenuApi from '../../api/menu.json'

const Menu = (props) =>{
    const menu = MenuApi.Menu[0]
    
 

    return(
        
        <ul>
            {menu.options.map( (item) =>{
                return (
                    <li key={item.id}> 
                        <Button contenido={item.text} />   
                     </li>
                )
            })}

            <li>
                <Link to='/'>
                <Button clase ='exit' contenido='salir' />
                
                </Link>               
            </li>
        </ul>

        
        
    )
}


export default Menu