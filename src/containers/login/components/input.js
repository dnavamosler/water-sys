import React,{ Component } from 'react'


class Input extends Component{
        

     render(){
         return(            
           
               <div className='input'>
                    <input id='search'
                    placeholder={this.props.placeholder}
                    type={this.props.tipo} />                    
                </div>
            
            
         )
     }
}

export default Input