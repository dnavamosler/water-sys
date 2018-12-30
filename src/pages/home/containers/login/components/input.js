import React from 'react'
import IconsApi from '../../../../../icons/api-icons.json'

const Input = (props) => {
    return(
        <div className='input'>
            <input placeholder={props.placeholder}>
            </input>
        </div>
    )
}

export default Input