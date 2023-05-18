import axios from 'axios'

//===>  //http://localhost:4000/auth//users
export const fetchAllUsers= async()=>
{
    const {data}= await axios.get('http://localhost:4000/auth/users');

return data;

} 
//===> //http://localhost:4000/auth/deleteUser
export const  deleteUser=async(id)=>{
    const deleteuser = await axios.delete(`http://localhost:4000/auth/deleteUser/${id}`);

}


