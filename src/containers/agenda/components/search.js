import React from 'react'

const Search = (props) => {

    return(
        
            <input placeholder={props.placeholder} onChange={props.handleChange} />
            
    )

}

export default Search