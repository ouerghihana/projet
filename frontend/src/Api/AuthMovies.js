import axios from 'axios'

export const fetchAllMovies = async()=>{
    const {data} = await axios.get('http://localhost:4000/Movies/getAll')
    return data 

}

export const PostMovies =async (values)=>{
    const addingMovie = await axios.post('http://localhost:4000/Movies/',{...values})
    return addingMovie.data;
}
