import React from 'react'
import './card.css'
// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    

    const typeOfCard = (tipo) => {

        switch(tipo){
            case 'detail':
                return(
                    <h1>hola</h1>
                )
            case 'person-card':
                return(
                    <div  className='card'>
                        <FontAwesomeIcon icon={faUserCircle}/>
                        <h3>{`${props.name}  ${props.apellido}`}</h3>
                    </div>
                    
                )
            default:
            break
        }

        
    }
    
    return(
        <div className='card-container'>
            { typeOfCard(props.type)}
        </div>
    )
}

export default Card