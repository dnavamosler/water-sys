import React, { Component } from 'react'
import PanelLayout from './components/Panel-layout';


// Components

import Logo from '../Logo/logo'
import Menu from '../Menu/Menu'


class Panel extends Component{
    render(){
        return(
            <PanelLayout>
                <Logo />
                <Menu />
            </PanelLayout>
        )
    }
}

export default Panel