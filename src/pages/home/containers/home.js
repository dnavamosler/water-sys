import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Logo from '../components/logo'
import Login from './login/containers/login'
import Footer from '../components/Footer'

class Home extends Component{
    render(){
        return(
            <HomeLayout>
                <Logo />
                <Login />
                <Footer />
            </HomeLayout>
        )
    }
}

export default Home