import React from 'react';
import Movie from './components/Movie'

import './index.css';

class App extends React.Component {
  state = {
    movies: []
  }

  componentDidMount = async() => {
    const response = await fetch('https://www.omdbapi.com/?s=Lone&apikey=1c889ae',
    )
    const data = await response.json()
    this.setState({
      movies: data.Search,
    })
  }

  render() {
    return (
      <div className="container">
        <div className='search'>
          <input type='text' className='input' placeholder='Procurar Filme....' />
          <button>GO</button>
        </div>       
          <div className='results'>
            {this.state.movies.map(movie => {
              return  <Movie cover={movie.Poster} />
            })}
            
          </div>
      </div>
    );
  }

}

export default App;

