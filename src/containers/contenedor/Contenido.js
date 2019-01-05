import React, { Component } from 'react'

//importar hijos

import MenuApi from '../../api/menu.json'

import Login from '../login/containers/login'
import Menu from '../../components/Menu/Menu'
import Agenda from '../agenda/agenda'

class Contenido extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paginaActual: 'home',
            paginaAnterior: null,
            admin: false
            //nota: hacer funcion recursiva para el historial.

        }
        const usuario = 'admin'
        window.prueba = MenuApi.Menu[usuario].options
    }


    handleLogin = (e) =>{
        e.preventDefault()

        this.setState({ paginaAnterior: this.state.paginaActual })

        if(this.state.admin){
            this.setState({ paginaActual: 'panelAdmin'})
            
        }
        else{

            this.setState({ paginaActual: 'panel'})
            
        }

    }

    handleChangeUser = () =>{
        this.setState({ paginaAnterior: this.state.paginaActual })
        
        if(this.state.admin){
            this.setState({admin : false})
            this.setState({ paginaActual: 'home'})
            
        }
        else{
            this.setState({admin : true})
            this.setState({ paginaActual: 'homeAdmin'})
            
        }
    }

    handleExit = () => {
        this.setState({paginaActual: 'home'})
    }



    render(){

        const switchContent = (pagActual, pagAnterior) => {

            switch(pagActual){
                case 'home':
                return(<Login currentUser='admin' handleLogin={this.handleLogin} handleChangeUser={this.handleChangeUser}/>) //el currentUser se pasa invertido

                case 'homeAdmin':
                return(<Login currentUser='user' handleLogin={this.handleLogin} handleChangeUser={this.handleChangeUser}/>)//el currentUser se pasa invertido

                    //pues ese valor sera mostrado como contenido

                case 'panel':
                return(<Menu menu='usuario' handleExit={this.handleExit}/>)

                case 'panelAdmin':
                return(<Menu menu='admin' handleExit={this.handleExit}/>)

                case 'agenda':
                return(<Agenda />)
            }
        }

        return (
           <div className='container'>

               {switchContent(this.state.paginaActual , this.state.pagAnterior)}
               
           </div>
                  
        )



    }
}

export default Contenido