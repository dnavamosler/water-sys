import React, { Component } from 'react'
import AgendaLayout from './components/agenta-layout'
import Content from './components/Content'
import HeaderAgenda from './components/header-agenda'
import Vendedores from '../../api/vendedores.json'

class Agenda extends Component{
    constructor(props) {
        super(props)
        this.state = {
        value: '',
        data: Vendedores,
        detail : null
        }
        
    }

    handleChange = (e) =>{
        this.setState({value:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleDetailClick = (e) =>{
        // this.setState({detail:})
        console.log(this.state.detail)
    }

    render(){
        return(
            <AgendaLayout>
                <HeaderAgenda 
                handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange} 
                position='home' data={this.state.data}/>

                    <Content 
                    filter={this.state.value} 
                    position='home' 
                    handleCardClick={this.handleCardClick} 
                    data={this.state.data} 
                    handleDetailClick={this.handleDetailClick}
                    />             
                    
            </AgendaLayout>
        )
    }

}

export default Agenda