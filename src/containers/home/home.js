import React, { Component } from 'react'
import HomeLayout from '../../components/Home-Layout/home-layout'
import Logo from '../../components/Logo/logo'
import Login from '../login/containers/login'
import Footer from '../../components/footer/Footer'

class Home extends Component{

    render(){
        return(
            <HomeLayout>
                <Logo />
                <Login currentUser='user'/>
                <Footer user='admin' />
            </HomeLayout>
        )
    }
}

export default Home