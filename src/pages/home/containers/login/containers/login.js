import React, { Component } from 'react'
import LoginLayout from '../components/login-layout'
import HeaderLogin from '../components/Header-login'
import Input from '../components/input'
import Button from '../../../../../components/button'


class Login extends Component{
    render(){
        return(
            <LoginLayout>
                <HeaderLogin />
                <form>
                    <Input />
                    <Input />
                    <Button />
                </form>
            </LoginLayout>
        )
    }
}

export default Login