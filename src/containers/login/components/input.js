import React from 'react'


const Input = (props) => {

    const tipo = props.type

    return(
        <div className='input'>
            <input 
            placeholder={props.placeholder}
            type={tipo}
            >
            </input>
        </div>
    )
}

export default Input