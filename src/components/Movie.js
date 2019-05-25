import React from 'react'

function Movie(props){
    return(
        <div className='movie'>
            <figure>
              <img src={props.cover} alt='Capa do filme'></img>
            </figure>
        </div>
    )
}

export default Movie