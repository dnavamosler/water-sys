import React, { Component } from 'react'
import HomeLayout from '../Home-Layout/home-layout'
import Logo from '../Logo/logo'
import Login from '../../containers/login/containers/login'
import Footer from '../footer/Footer'

class HomeAdmin extends Component{
    render(){
        return(
            <HomeLayout>
                <Logo />
                <Login currentUser='admin'/>
                <Footer user='user' />
            </HomeLayout>
        )
    }
}

export default HomeAdmin