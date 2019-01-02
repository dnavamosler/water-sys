import React, { Component } from 'react'
import AgendaLayout from './components/agenta-layout'
import Content from './components/Content'
import HeaderAgenda from './components/header-agenda'


class Agenda extends Component{
    render(){
        return(
            <AgendaLayout>
                <HeaderAgenda />
                <Content />                
            </AgendaLayout>
        )
    }

}

export default Agenda