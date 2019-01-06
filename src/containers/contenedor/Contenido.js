import React, { Component } from 'react'

//importar hijos

import Login from '../login/containers/login'
import Menu from '../../components/Menu/Menu'
import Agenda from '../agenda/agenda'

class Contenido extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paginaActual: this.props.page,
            paginaAnterior: null,
            admin: this.props.admin
            //nota: hacer funcion recursiva para el historial.
            
        }        
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
            
            setTimeout(() => {
                this.props.handleUser(this.state.admin)
                this.setState({ paginaActual: 'home'})
            }, 1);
            
        }
        else{
            this.setState({admin : true})
            
           
        }
        setTimeout(() => {
            this.props.handleUser(this.state.admin)
            this.setState({ paginaActual: 'homeAdmin'})
        }, 1);
    }

    handleExit = () => {
        this.setState({admin: false})
        this.setState({paginaActual: 'home'})
    }

    handleShowAgenda = () => {
        this.props.handleExitHome(this.state.paginaActual)
        this.setState({paginaActual: 'agenda'})
        this.props.handleContentPage('agenda')
        
    }

    handleExitAgenda = (usuario) => {
        
       if(usuario)
            this.setState({paginaActual : 'panelAdmin'})
       else
            this.setState({paginaActual : 'panel'})
       
        setTimeout(() => {
            this.props.handleBackHome(this.state.paginaActual)
        }, 1);
    }   


    render(){
            
        
        
        const switchContent = (pagActual) => {
            
            switch(pagActual){
                case 'home':
                return(<Login currentUser='admin' handleLogin={this.handleLogin} handleChangeUser={this.handleChangeUser}/>) //el currentUser se pasa invertido

                case 'homeAdmin':
                return(<Login currentUser='user' handleLogin={this.handleLogin}  handleChangeUser={this.handleChangeUser}/>)//el currentUser se pasa invertido

                    //pues ese valor sera mostrado como contenido

                case 'panel':
                return(<Menu menu='usuario' handleShowAgenda={this.handleShowAgenda}  handleExit={this.handleExit}/>)

                case 'panelAdmin':
                return(<Menu menu='admin' handleShowAgenda={this.handleShowAgenda}  handleExit={this.handleExit}/>)

                case 'agenda':
                return(<Agenda handleExitAgenda={this.handleExitAgenda} admin={this.state.admin}/>)
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