import React,  {useState} from 'react'
import './AddMovies.css'
import {useNavigate} from 'react-router-dom';
import {PostMovies} from '../../Api/AuthMovies'



const AddMovie = () => {

  const navigate=useNavigate()
  //fonction ajout
  const [title,settitle]=useState('')
  const [description,setDescription]=useState('')
  const [ Date,setDate]=useState('')
  const [image,setimage]=useState('')
  const [posterUrl,setposterUrl]=useState('')
  const [status,setstatus]=useState('')
  
  
  //fct partie backend
 const handleAdd= async(value)=>{
  await  PostMovies(value)
  navigate('/')
 }
  
  
  
  
  
  return (
    <div>
    
    <section className="get-in-touch">
      <h1 className="title">Add Movies</h1>
      <form className="contact-form row">
        <div className="form-field col-lg-6">
          <input
            id="name"
            className="input-text js-input"
            type="text"
            required=""
            value={title} onChange={(e)=>settitle(e.target.value)}/>
          <label className="label" htmlFor="name"  >
            Title
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="email"
            className="input-text js-input"
            type="email"
            required=""   value={description} onChange={(e)=>setDescription(e.target.value)}/>
          <label className="label" htmlFor="email">
            Description
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="company"
            className="input-text js-input"
            type="text"
            required=""  value={Date} onChange={(e)=>setDate(e.target.value)} />
          <label className="label" htmlFor="company">
           Date
          </label>
        </div>

        <div className="form-field col-lg-6 ">
          <input
            id="email"
            className="input-text js-input"
            type="email"
            required=""   value={image} onChange={(e)=>setimage(e.target.value)}/>
          <label className="label" htmlFor="email">
            Image
          </label>
        </div>

        <div className="form-field col-lg-6 ">
          <input
            id="phone"
            className="input-text js-input"
            type="text"
            required=""   value={posterUrl} onChange={(e)=>setposterUrl(e.target.value)}  />
        
            <label className="label" htmlFor="phone">
           PosterUrl
          </label>
        </div>
        <div className="form-field col-lg-12">
          <input
            id="message"
            className="input-text js-input"
            type="text"
            required=""   value={status} onChange={(e)=>setstatus(e.target.value)}/>
          <label className="label" htmlFor="message">
            Status
          </label>
        </div>
        <div className="form-field col-lg-12">
          <input className="submit-btn" type="button" defaultValue="Add" 
          onClick={()=>handleAdd({title, description,Date,image,posterUrl,status})}/>
        </div>


      </form>
    </section>
  
  </div>
  )
}

export default AddMovie