import React, { Component } from 'react'
import AgendaLayout from './components/agenta-layout'
import Content from './components/Content'
import HeaderAgenda from './components/header-agenda'
import Vendedores from '../../api/vendedores.json'

class Agenda extends Component {


    constructor(props) {
        super(props)
        this.setState({editable: false})
        this.state = {
            value: '',
            data: Vendedores,
            vista: true,
            keyDetail: null,
            editable: false,
            keyEdit: null
        }
       

    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleCardClick = (key) => {
        
        this.setState({ keyDetail: key })
        setTimeout(() =>  this.setState({ vista: false }),1)
       
    }

    handleBack = (e) => {
        this.setState({ vista: true })
    }

    handleEdit = (key) => {
        
        this.setState({keyEdit: key})
        setTimeout(() => this.setState({editable: !this.state.editable}) , 1)
        
    }

    render() {
        if (this.state.vista) {
            return (
                <AgendaLayout>
                    <HeaderAgenda
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        handleBack={this.handleBack}
                        position='home' 
                         
                        />

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

        else {
            return (
                <AgendaLayout>
                    <HeaderAgenda
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        handleBack={this.handleBack}
                        position='detail' 
                        data={this.state.data.vendedores[this.state.keyDetail - 1]} 
                        
                        />

                    <Content
                        filter={this.state.value}
                        position='detail'
                        handleCardClick={this.handleCardClick}
                        data={this.state.data.vendedores[this.state.keyDetail - 1]}
                        handleEdit={this.handleEdit}
                        editable={this.state.editable}
                        keyEdit={this.state.keyEdit}
                    />

                </AgendaLayout>
            )
        }

    }

}

export default Agenda