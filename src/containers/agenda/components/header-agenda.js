import React from 'react'
import Card from './Card'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

import Search from './search'

const HeaderAgenda = (props) =>{
    
    const detail = () => {
        let position = props.position

        switch(position) {
            case 'home':
            return(
            <form onSubmit={props.handleSubmit}>
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                
                <Search placeholder='buscar...'  handleChange={props.handleChange}/>
                
            </form>
            )
            
            case 'detail' :

            return(<Card type='person-card' data={props.data}/>)
            
            default:
            break
        }
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