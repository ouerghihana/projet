import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Login = () => {

const navigate= useNavigate()

//formulaire : partie login
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [err, setErr] = useState('');


  // Fonction appelée lorsque l'utilisateur soumet le formulaire de connexion

const handleLogin= async (values) => {

  try {
// Envoi d'une requête POST à l'URL d'authentification avec les valeurs entrées par l'utilisateur

const res = await axios.post ('http://localhost:4000/auth/login', values)
console.log('res',res.data.token)

// Stockage du token dans le stockage local (local storage)

await localStorage.setItem('token',res.data.token)

//  // Redirection vers la page d'accueil
navigate('/app/PrivateRoute');
  }catch (err){
    console.log(err)
    setErr('Invalid email or password'); // Stockage du message d'erreur dans le hook d'état

  }
}




return (
    
  <div className='bodyloginn'>
  <div className="form-box-login">
  <form className="formLogin">
    <span className="titleLogin">Sign In</span>
    <span className="subtitleLogin">Easily book your movie tickets by signing in to your account</span>
    <div className="form-container-login">
      <input type="email" className="inputlogin" placeholder="Email"   value ={email}  onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" className="inputlogin" placeholder="Password" value ={password}  onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <button   type='button'  onClick={()=>handleLogin({email,password})}>SIGN IN</button>
    {err && <p className="error-message">{err}</p>} {/* Affichage du message d'erreur s'il existe */}
  </form>
  <div className="form-section">
    <p>
    Don't have an account?<a href="/register">Sign Up</a>{" "}
    </p>
  </div>
</div>

  </div>
)}

export default Login