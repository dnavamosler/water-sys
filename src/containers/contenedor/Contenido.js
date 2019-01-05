import React, { Component } from 'react'

//importar hijos


import Login from '../login/containers/login'


class Contenido extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paginaActual: 'home',
            paginaAnterior: null

            //nota: hacer funcion recursiva para el historial.

        }
    }

    handleLogin = (e) =>{
        e.preventDefault()

    }



    render(){

        const switchContent = (pagActual, pagAnterior) => {

            switch(pagActual){
                case 'home':
                return(<Login currentUser='user' handleLogin={this.handleLogin}/>)

                case 'homeAdmin':
                return(<Login currentUser='admin' handleLogin={this.handleLogin}/>)
            }
        }

        return (
           <div>

               {switchContent(this.state.paginaActual , this.state.pagAnterior)}
               
           </div>
                  
        )



    }
}

export default Contenido