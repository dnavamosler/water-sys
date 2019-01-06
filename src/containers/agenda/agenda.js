import React, { Component } from 'react'
import AgendaLayout from './components/agenta-layout'

import Content from './components/Content'
import HeaderAgenda from './components/header-agenda'
import BD from '../../api/BD.json'

class Agenda extends Component {


    constructor(props) {
        super(props)
        console.log(this.props.admin)
        this.state = {
            value: '',
            data: BD,           //base de datos
            keyDetail: null,
            editable: false,
            keyEdit: null,
            position: 'home',
            user: this.props.admin
            
        }
    }

    handleChange = (e) => {

        this.setState({ value: e.target.value })

    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleCardClick = (key) => {
        this.setState({ position: 'detail' })
        this.setState({ keyDetail: key })

    }

    handleBack = (e) => {
        
        
            if(this.state.position == 'home'){
                this.props.handleExitAgenda(this.state.user)
            }
        
        this.setState({ editable: false })
        this.setState({ position: 'home' })
        
    }

    handleEdit = (key) => {

        this.setState({ keyEdit: key })
        setTimeout(() => this.setState({ editable: !this.state.editable }), 1)

    }

    render() {

        const renderHeader = (position) => {

            switch (position) {
                case 'home':
                    return (

                        <HeaderAgenda
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                            handleBack={this.handleBack}
                            position={this.state.position}
                            admin={this.props.admin}
                            
                        />
                    )

                case 'detail':
                    return (
                        <HeaderAgenda
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                            handleBack={this.handleBack}
                            position={this.state.position}
                            data={this.state.data.vendedores[this.state.keyDetail - 1]}
                            

                        />
                    )
            }

        }
        const renderContent = (position) => {

            switch (position) {
                case 'home':
                    return (
                        <Content
                            filter={this.state.value}
                            position={this.state.position}
                            handleCardClick={this.handleCardClick}
                            data={this.state.data}
                            handleDetailClick={this.handleDetailClick}
                        />
                    )

                case 'detail':
                    return (
                        <Content
                            filter={this.state.value}
                            position={this.state.position}
                           
                            handleCardClick={this.handleCardClick}
                            data={this.state.data.vendedores[this.state.keyDetail - 1]}
                            handleEdit={this.handleEdit}
                            editable={this.state.editable}
                            keyEdit={this.state.keyEdit}
                            handleChange={this.handleChange}
                        />
                    )
            }

        }

        return (
            <AgendaLayout>
                {renderHeader(this.state.position)}
                {renderContent(this.state.position)}
            </AgendaLayout>
        )
    }
}

export default Agenda