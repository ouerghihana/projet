import React from 'react'

const ProfilUser = (auth) => {
  return (
    <div>
    <div>
      <h1>Profile</h1>
      {auth && (
        <div>
          <p>Username: {auth.UserName}</p>
          {/* Affichez d'autres détails du profil */}
        </div>
      )}
    </div>
    
    
    </div>
  )
}

export default ProfilUser