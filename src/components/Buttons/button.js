import React from 'react'
import './button.css'

const Button = ({...props}) => {

    return(
        <button {...props}>
            {props.contenido}
        </button>
    )
}

export default Button