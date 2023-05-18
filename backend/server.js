const express = require('express')
const app = express()

const port =4000
// Importation du middleware CORS
const cors =require('cors')

// Importation du module pour charger les variables d'environnement depuis un fichier .env
require('dotenv').config()

// Importation des routes

const userRoute = require('./routes/userRoute')
const movieRouter = require('./routes/MoviesRoutes')
const  bookingsrouter =require ('./routes/BookingRoute')
// Utilisation du middleware CORS
app.use(cors())
// Utilisation du middleware pour parser les requêtes en JSON

app.use(express.json())

//Appel a la connexion db 
const connectdb=require('./config/connectdb')
connectdb()

//Path de lauthentification
app.use('/auth',userRoute)


app.use('/Movies', movieRouter)

app.use('/bookings', bookingsrouter)



app.listen(port, err=>{
    err?console.log (err):console.log ( `go to ${port}`)
})
