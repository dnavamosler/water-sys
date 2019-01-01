import React, { Component } from 'react'
import LoginLayout from '../components/login-layout'
import HeaderLogin from '../components/Header-login'
import Input from '../components/input'
import Button from '../../../components/Buttons/button'
import { Link } from 'react-router-dom'

class Login extends Component{
    state = {
        user: this.props.currentUser
    }
    

    render(){
        return(
            <LoginLayout>
                <HeaderLogin />
                <form>
                    <Input  
                        placeholder='username' />
                    <Input
                        placeholder='password' type='password' />
                    <Link to="/home" >
                    <Button 
                        contenido='ingresar'
                       
                    />
                    </Link>
                </form>
            </LoginLayout>
        )
    }
}

export default Login