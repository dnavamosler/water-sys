import React from 'react'
import './header-agenda.css'
import './agenda-layout.css'

const AgendaLayout = (props) => 
    (
        <div className='contenido-agenda'>
            {props.children}
        </div>
    )

export default AgendaLayout