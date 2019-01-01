import React from 'react'
import './panel.css'

const PanelLayout = (props) =>
(
    <div className='panel'>
        {props.children}
    </div>
)

export default PanelLayout