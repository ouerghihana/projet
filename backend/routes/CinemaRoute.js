// cinemaRoutes.js
const express = require('express');
const router = express.Router();
const Cinema = require('../models/Cinema');

// Récupérer tous les cinémas
router.get('/', async (req, res) => {
  const cinemas = await Cinema
})