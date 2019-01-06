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
        }
    }

    handleContentPage = (pagina) => {
        this.setState({showPage : pagina})
    }

    handleExitHome = () => {
        this.setState({home : false})
    }

    handleBackHome = () => {
        this.setState({ home: true })
    }

    render() {

        const home = () => {
            if (this.state.home)
                return (
                    <HomeLayout className='Home'>
                        <Logo />
                        <Contenido handleExitHome={this.handleExitHome} page={this.state.showPage} handleContentPage={this.handleContentPage} handleBackHome={this.handleBackHome} />
                    </HomeLayout>


                )

            else
                return (
                    <HomeLayout className='in'>
                         <Contenido handleExitHome={this.handleExitHome} page={this.state.showPage} handleContentPage={this.handleContentPage}/>
                    </HomeLayout>
                )
        }

        return (
            home()
        )
    }
}

export default Home