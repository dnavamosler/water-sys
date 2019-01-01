// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components

//Header,Content,Footer
import Content from './Global/Content'

//Data

//Data del menu

class App extends Component{
    static propTypes = {
      children: PropTypes.object.isRequired
    }
  
    render() {
      const { children } = this.props;
  
      return (
        <div className='app'>          
          <Content body={children} />
        </div>
      )
    }
  }
  
  export default App;
  