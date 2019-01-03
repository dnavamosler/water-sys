import React from 'react'
import Card from './Card'


import './content.css'

const Content = (props) => {

    const mostrarInformacion = (datos) => {
            
       datos.vendedores.map((item) => {
            return <Card
                type='person-card'
                data={item}
                key={item.id} 
    
                />
        })
    
    }

    const detail = () => {    

        
        switch (props.position) {
            case 'home':
                return (
                    <ul>
                        {
                           props.data.vendedores.filter((vendedor) => {
                                return (
                                    vendedor.nombre.toLowerCase().includes(props.filter.toLowerCase())
                                )
                            })
                                .map((item) => {
                                    return <Card
                                        handleDetailClick={props.handleDetailClick}
                                        type='person-card'                                        
                                        data={item}
                                        key={item.id}
                                        detail={props.receptData}
                                         />
                                        
                                })


                        }

                    </ul>
                )

            case 'detail':
                return (
                    <ul>
                        {mostrarInformacion(props.data)}
                    </ul>
                )

            default:
            break

        }

    }
        return (
            <div className='contenido'>
                {detail()}
            </div>
        )
    
}

export default Content