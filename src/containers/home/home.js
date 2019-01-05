import React, { Component } from 'react'
import HomeLayout from '../../components/Home-Layout/home-layout'
import Logo from '../../components/Logo/logo'
import Contenido from '../contenedor/Contenido'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            home: true
        }
    }

    handleBackHome = () => {
        this.setState({home: !this.state.home})
    }

    render() {

        const home = () => {
           if( this.state.home)
           return (
                    <HomeLayout>
                        <Logo />
                        <Contenido handleBackHome={this.handleBackHome} />
                     </HomeLayout>
                        
                    
            )

             else return(
                    <Contenido/>                 
                  )
        }

        return (
            home()
        )
    }
}

export default Home