import React from 'react'
import './button.css'

const Button = (props) => {
    const clase = props.clase

    return(
        <button className={clase}>
            {props.contenido}
        </button>
    )
}

export default Button