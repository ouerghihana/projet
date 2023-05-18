
import React ,{useEffect} from 'react'
import MoviesCard from './MoviesCard'
import { useSelector, useDispatch } from 'react-redux'           // Importation des hooks
import {setMovies} from '../../store/MoviesSlice'
import { fetchAllMovies } from '../../Api/AuthMovies'
//partie redux
const MovieList = () => {

    const movies=useSelector(state=>state.MoviesElement)
    console.log ('MoviesElement',movies)
  
  
    const dispatch= useDispatch()
  
  
   //partie : jiben data mel bd  :// Appel de la fonction fetchAllmovies pour récupérer les données 
 const getAllMovies =  async() => {
    const data=  await fetchAllMovies()           // Appel de la fonction fetchAllMovies pour récupérer les données 
    console.log('Movies:',data.movies)
    dispatch(setMovies(data.movies))
    
    }
    useEffect(()=>{getAllMovies()},[])
    

  
  
    return (


    //* Boucle pour afficher chaque cart Movie *//
    <div>{movies.map((e) =><MoviesCard   mini={e}       getAllMovies={getAllMovies}     />)}
    <MoviesCard/>
    </div>
  )
}

export default MovieList