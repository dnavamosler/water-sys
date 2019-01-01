import React from 'react'
import './login.css'
const LoginLayout = (props) => {
    return(
        <div className='login'>
            {props.children}
        </div>
    )
}

export default LoginLayout