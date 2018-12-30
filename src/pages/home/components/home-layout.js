import React from 'react'
import './home-layout.css'

const HomeLayout = (props) =>{
    return(
        <div className='Home'>
            {props.children}
        </div>
    )
}

export default HomeLayout