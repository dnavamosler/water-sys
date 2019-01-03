import React, { Component } from 'react'
import AgendaLayout from '../agenda/components/agenta-layout'
import Content from '../agenda/components/Content'
import HeaderAgenda from '../agenda/components/header-agenda'
import Vendedores from '../../api/vendedores.json'

class Agenda extends Component{
    constructor(props) {
        super(props)
        this.state = {
        value: '',
        data: Vendedores
        }
    }

    handleChange = (e) =>{
        this.setState({value:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    

    render(){
        return(
            <AgendaLayout>
                <HeaderAgenda handleSubmit={this.handleSubmit} handleChange={this.handleChange} position='detail' data={this.state.data}/>
                <Content filter={this.state.value} position='detail' data={this.state.data}/>                
            </AgendaLayout>
        )
    }

}

export default Agenda