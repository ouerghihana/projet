import React from 'react'
import './MoviesCard.css'
// import {useNavigate} from 'react-router-dom'

const MoviesCard = ({mini,getAllMovies}) => {


console.log('mini',mini)



  return (
    <div className='bodyCardMovie'>
  <div className="background" />
  <div className="background-texture" />
  <section className="carousel">
    <h2 className="categories__title">All Movies</h2>
    
    <div className="carousel__container">
      <div className="carousel-item">
      <span>Title:{mini.title}</span>
        <img
          className="carousel-item__img"
          src={mini.image}
          alt="people"
        />
        
        <div className="carousel-item__details">
          <div className="controls">
            <span className="fas fa-play-circle" />
            <span className="fas fa-plus-circle" />
          </div>
          <h5 className="carousel-item__details--title">{mini.description}</h5>
          <h6 className="carousel-item__details--subtitle">
            {mini.Date}
          </h6>
        </div>

        <button className="bn30"  onClick={async()=>{ await getAllMovies() }} > </button>
      </div>
      <div className="carousel-item">
        <img
          className="carousel-item__img"
          src="https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="people"
        />
        <div className="carousel-item__details">
          <div className="controls">
            <span className="fas fa-play-circle" />
            <span className="fas fa-plus-circle" />
          </div>
          <h5 className="carousel-item__details--title">Descriptive Title</h5>
          <h6 className="carousel-item__details--subtitle">
            Date and Duration
          </h6>
        </div>
      </div>
      
      
      
    </div>
  </section>
  </div>

    
  
    
  )
}

export default MoviesCard
