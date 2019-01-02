import React from 'react'
import Card from './Card'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

const HeaderAgenda = (props) =>{
    
    const detail = () => {
        let val = true
        if(val) 
            return(
                <form>
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <input placeholder='Buscar...'></input>
            </form>
            )
        else
            return(<Card type='person-card'/>)
    }
    
return(
    <header className='encabezado'>
       <div className='encabezado-categories'>
        <button className='back-button'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h2>VENDEDORES</h2>
       </div>
        {detail()}
        
    </header>
)}

export default HeaderAgenda