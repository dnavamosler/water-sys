import React, { Component } from 'react'
import HomeLayout from '../../components/Home-Layout/home-layout'
import Logo from '../../components/Logo/logo'
import Contenido from '../contenedor/Contenido'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            home: true,
            showPage : 'home',
            admin : false
        }
    }

    handleContentPage = (pagina) => {
        this.setState({showPage : pagina})
    }

    handleExitHome = (page) => {
        this.setState({showPage : page})
        this.setState({home : false})
        
    }

    handleBackHome = (page) => {
        this.setState({showPage : page})
        this.setState({ home: true })        
    }

    handleUser = (usuario) => {
        this.setState({admin : usuario})
    }

    render() {

        const home = () => {
            if (this.state.home)
                return (
                    <HomeLayout className='Home'>
                        <Logo />
                        <Contenido 
                            handleExitHome={this.handleExitHome} 
                            handleUser={this.handleUser} 
                            page={this.state.showPage} 
                            handleContentPage={this.handleContentPage} 
                            handleBackHome={this.handleBackHome}
                            admin={this.state.admin}/>
                    </HomeLayout>


                )

            else
                return (
                    <HomeLayout className='in'>
                         <Contenido 
                            handleExitHome={this.handleExitHome} 
                            handleUser={this.handleUser} 
                            page={this.state.showPage} 
                            handleBackHome={this.handleBackHome} 
                            handleContentPage={this.handleContentPage}
                            admin={this.state.admin}/>
                    </HomeLayout>
                )
        }

        return (
            home()
        )
    }
}

export default Home