
const express= require('express')

const UserRoute= express.Router()
const {register,login,deleteUser,getAllUser}=require('../controllers/userControl')
const {IsAuth}= require('../middlewares/IsAuth')
const{registerValidation,loginValidation,validation}= require('../middlewares/RegisterValidation')

//http://localhost:4000/auth/register
UserRoute.post('/register',registerValidation,validation, register)


//http://localhost:4000/auth/login
UserRoute.post('/login',loginValidation,validation, login)


//http://localhost:4000/auth/deleteUser
UserRoute.delete('/deleteUser/:id', IsAuth, deleteUser);
//http://localhost:4000/auth//users
UserRoute.get('/users', getAllUser)




// Route pour récupérer les informations de l'utilisateur connecté
UserRoute.get('/moncompte', IsAuth, (req, res) => {
    res.send(req.user)
    console.log(req.user)
})




module.exports=UserRoute