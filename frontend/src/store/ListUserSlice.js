import { createSlice } from "@reduxjs/toolkit";

const LisTUserSlice = createSlice({
    name:"UserElement",
    initialState:[{
       
        UserName:"user1 ",
        email:"user1@gmail.com",
        password:"haa111",
       role:"user"
    },
{
    UserName:"user2  ",
    email:"user2@gmail.com",
    password:"haa111azerty",
   role:"user"

}
],
    reducers:{
        setListUser:(state,action)=>{
            return action.payload
        }
    }
})

export const { setListUser} = LisTUserSlice.actions
export default LisTUserSlice.reducer