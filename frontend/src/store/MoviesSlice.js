import { createSlice } from "@reduxjs/toolkit";
const MoviesSlice = createSlice({
    name:"MoviesElement",

    
    initialState:[ {
       title:"Wonder Woman",
       description:"action",
        image:"https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        Date:"07/04/2023",
        posterUrl:"https://www.youtube.com/watch?v=ECTqqXBceG4",
        status:"disponible"

        }],
   
 reducers:{
    setMovies:(state,action)=>{
        return action.payload
    }
 }




})

export const { setMovies } = MoviesSlice.actions;
export default MoviesSlice.reducer;