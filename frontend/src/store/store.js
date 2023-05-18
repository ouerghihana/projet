import {configureStore} from "@reduxjs/toolkit"
import authSlice from './authSlice'
import MoviesSlice from "./MoviesSlice"
import LisTUserSlice from './ListUserSlice'
export default configureStore({

    reducer:{auth:authSlice ,
        MoviesElement:MoviesSlice,
        UserElement:LisTUserSlice
    
    }
    
})