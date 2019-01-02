import React,{ Component } from 'react'


class Input extends Component{
    constructor(props) {
        super(props)
        this.state = {
        value: '',
        placeholder: this.props.placeholder
        }}

    handleChange = (e) => {
        this.setState({value: e.target.value})
        console.log(this.state.value)
      }

     render(){
         return(            
            <div className='input'>
                <input id='search'
                placeholder={this.state.placeholder}
                type={this.props.tipo} 
                value={this.state.value} 
                onChange={this.handleChange}
                />                    
                    
            </div>
            
         )
     }
}

export default Input