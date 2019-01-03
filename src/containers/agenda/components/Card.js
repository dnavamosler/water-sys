import React from 'react'
import './card.css'

import { Link } from 'react-router-dom'
// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {

    

    const typeOfCard = (tipo) => {

        switch (tipo) {
            case 'detail':
                return (
                    <h1>hola</h1>
                )
            case 'person-card':
                return (
                    <Link to='/agenda-detail' >
                        <div className='card'>
                            <FontAwesomeIcon icon={faUserCircle} />
                            <h3>{`${props.data.nombre}  ${props.data.apellido}`}</h3>
                        </div>
                    </Link>

                )
            default:
                break
        }


    }

    return (
        <div className='card-container' onClick={props.handleDetailClick}>
            {typeOfCard(props.type)}
        </div>
    )
}

export default Card