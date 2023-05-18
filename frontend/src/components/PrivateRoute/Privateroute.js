import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {fetchAuthUser} from '../../Api/AuthApi'
import { setAuth } from '../../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'


import Login from '../Login/Login'
import Users from '../Users/ProfilUser'
import Dashboard from '../Admin/Dashboard'
import Navbar from '../Navbar/Navbar'


const Privateroute = () => {

const dispatch = useDispatch()
const navigate = useNavigate()
const authUser = useSelector(state=>state.auth)
console.log('authUser',authUser)
//local storage pour savoir si user authentifie ou nn, token

const token= localStorage.getItem('token')

//get user deja authentifié

const getAuth = async ()=>{
    const data = await  fetchAuthUser()        //appel de la fonction fetchAuthUser depuis le fichier Api
    console.log('data auth', data)
    dispatch(setAuth(data))        //mise à jour de l'état de l'authentification de l'utilisateur dans le store
  }

  useEffect (()=>{
    getAuth()
  },[])


//fonction logout
const logout=()=>{
  localStorage.removeItem('token')
navigate('/login')
}



  return (                          
    <div>
    {token ? (
      <div>
        <Navbar auth={authUser} logout={logout} />
        {authUser.role === 'admin' ? <Dashboard /> : <Users />}
      </div>
    ) : (
      <Login />
    )}
  </div>
               
  )
}

export default Privateroute