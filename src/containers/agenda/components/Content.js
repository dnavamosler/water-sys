import React from 'react'
import Card from './Card'


import './content.css'

const Content = (props) => {


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
                                        handleCardClick={() =>{
                                            props.handleCardClick(item.id)
                                        }}
                                        type='person-card'                                        
                                        data={item}
                                        key={item.id}
                                         />
                                        
                                })


                        }

                    </ul>
                )

            case 'detail':
                return (
                    <ul>
                        {  
                           props.data.informacion.map((Item) => { 
                                for(let Key in Item){
                                    
                                  return(  
                                    

                                    props.editable

                                        ? (<Card 
                                            type='detail'
                                            tittle={Key}
                                            contenido={Item[Key]}
                                            handleEdit={props.handleEdit}
                                            editable={true}
                                            keyEdit={props.keyEdit}
                                            />
                                            )

                                        : (<Card 
                                            type='detail'
                                            tittle={Key}
                                            contenido={Item[Key]}
                                            handleEdit={props.handleEdit}
                                            editable={false}
                                            keyEdit={props.keyEdit}
    
                                            />)
                                  )
                                        
                                    
                                }
                            })
                        }
                        
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