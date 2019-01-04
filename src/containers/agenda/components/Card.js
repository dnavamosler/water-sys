import React from 'react'
import './card.css'

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {



    const typeOfCard = (tipo) => {
            
        switch (tipo) {
            case 'detail':
                 return(
                     
                    props.editable && (props.tittle === props.keyEdit)
                    ? (                    
                    <div className='card card-detail green'>
                        <div>
                            <h4>{props.tittle}</h4>
                            <FontAwesomeIcon
                                icon={faCheck}
                                onClick={() => {
                                    props.handleEdit(props.tittle)
                                }}
                                />
                        </div>
                        <div className='separador' />

                        <input
                            value={props.contenido}
                            className='edit' />
                    </div>)

                    : (<div className='card card-detail'>
                        <div>
                            <h4>{props.tittle}</h4>
                            <FontAwesomeIcon
                                icon={faEdit}
                                onClick={() => {
                                    props.handleEdit(props.tittle)
                                }} />
                        </div>
                        <div className='separador' />
                        <input
                            disabled
                            value={props.contenido} />
                    </div>)  
                 )


            case 'person-card':
                return (

                    <div className='card'>
                        <FontAwesomeIcon icon={faUserCircle} />
                        <h3>{`${props.data.nombre}  ${props.data.apellido}`}</h3>

                    </div>
                )
            default:
                return (
                    <h1>fallos</h1>
                )
        }


    }

    return (
        <div className='card-container' onClick={props.handleCardClick}>
            {typeOfCard(props.type)}
        </div>
    )
}

export default Card