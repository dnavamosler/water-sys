import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = (props) => {

    const user = props.user

    const typeUser = (usuario) =>{

        switch(usuario){
            case 'user':
                return(
                    <Link className='footer' to='/'>
                       <h2>  ingresar como usuario </h2>
                    </Link>  
                )

            case 'admin':
                return(
                    <Link className='footer' to='/admin'>
                      <h2>  ingresar como {user} </h2>
                    </Link>  
                )

            default:
            break;
        }
    }
    
    
    return(
        <div >
            
                {typeUser(user)}                
            
        </div>
    )
}

export default Footer