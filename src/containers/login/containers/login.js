import React, { Component } from 'react'
import LoginLayout from '../components/login-layout'
import HeaderLogin from '../components/Header-login'
import Input from '../components/input'
import Button from '../../../components/Buttons/button'
import Footer from '../../../components/footer/Footer'


class Login extends Component{    
    constructor(props){
        super(props)
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
                    
                    <Button 
                        className='regular-button'
                        contenido='ingresar'
                        onClick={this.props.handleLogin}
                    />
                   
                </form>
                <Footer user={this.props.currentUser} handleChangeUser={this.props.handleChangeUser} />
            </LoginLayout>
        )
    }
}

export default Login