import React from 'react'
import Card from './Card'
import Vendedores from '../../../api/vendedores.json'

import './content.css'

const Content = (props) =>{

const detail = () => {
    let val = true
    if(val) 
        return(
            <ul>
                {Vendedores.vendedores.map((item) =>{
                    return <Card 
                    type='person-card' 
                    name={item.nombre} 
                    apellido={item.apellido}
                    telefono={item.telefono}
                    key={item.key}/>
                })}
               
            </ul>
        )
    else
        return(
            <Card />
        )
    }

    return(
    <div className='contenido'>
        {detail()}
    </div>
    )
}

export default Content