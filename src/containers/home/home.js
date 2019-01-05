import React, { Component } from 'react'
import HomeLayout from '../../components/Home-Layout/home-layout'
import Logo from '../../components/Logo/logo'
import Contenido from '../contenedor/Contenido'

class Home extends Component{



    render(){
        return(
            <HomeLayout>
                <Logo />
                <Contenido/>                    
            </HomeLayout>
        )
    }
}

export default Home