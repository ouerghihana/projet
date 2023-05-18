import React from 'react'
import './UpdateMovie.css'
const UpdateMovie = () => {
  return (
    <div>
    
    <section className="get-in-touch">
      <h1 className="title">Update Movie</h1>
      <form className="contact-form row">
        <div className="form-field col-lg-6">
          <input
            id="name"
            className="input-text js-input"
            type="text"
            required=""
          />
          <label className="label" htmlFor="name">
            Title
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="email"
            className="input-text js-input"
            type="email"
            required=""
          />
          <label className="label" htmlFor="email">
            Description
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="company"
            className="input-text js-input"
            type="text"
            required=""
          />
          <label className="label" htmlFor="company">
           Date
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="phone"
            className="input-text js-input"
            type="text"
            required=""
          />
          <label className="label" htmlFor="phone">
           PosterUrl
          </label>
        </div>
        <div className="form-field col-lg-12">
          <input
            id="message"
            className="input-text js-input"
            type="text"
            required=""
          />
          <label className="label" htmlFor="message">
            Status
          </label>
        </div>
        <div className="form-field col-lg-12">
          <input className="submit-btn" type="submit" defaultValue="Submit" />
        </div>
      </form>
    </section>
  
  </div>
  )
}

export default UpdateMovie