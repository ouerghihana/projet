const movieSchema = require('../model/Movies')


exports.addMovie = async (req, res) => {
    try {
      const { title, description, Date, image ,posterUrl,status} = req.body;
      const newMovie = new movieSchema({
        title,
        description,
        Date,
        image,
        posterUrl,
        status
      });
      await newMovie.save();
      res.status(200).json({ msg: 'Movie successfully added', newMovie });
    } catch (err) {
      console.log(err);
      res.send('Error Adding movie');
    }
  };

  exports.deleteMovie = async (req, res) => {
    try {
      const { id } = req.params;
      await movieSchema.findByIdAndDelete(id);
      res.status(200).json({ msg: 'Movie deleted successfully' });
    } catch (err) {
      console.log(err);
      res.send('Error deleting Movie');
    }
  };

  exports.updateMovie = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, Date, image,posterUrl,status } = req.body;
      const updatedMovie = await movieSchema.findByIdAndUpdate(
        req.params.id,
        {
          title,
          description,image,
          Date,
          
           posterUrl,
           status
        },
        { new: true }
      );
      res.status(200).json({ msg: 'Movie updated successfully', updatedMovie });
    } catch (err) {
      console.log(err);
      res.send('An error occurred while updating the booking');
    }
  };


  exports.getMovieById = async (req, res) => {
    try {
      const { id } = req.params;
      const getUnqMovie = await movieSchema.findById(id);
      res.status(200).json({ msg: 'Your unique Movie', getUnqMovie });
    } catch (err) {
      console.log(err);
      res.send('An error occurred while getting the movies');
    }
  };


  exports.getAllMovies = async (req, res) => {
    try {
      const movies = await movieSchema.find();
      res.status(200).json({ msg: 'You got all the movies', movies });
    } catch (err) {
      console.log(err);
      res.status(500).send('There is a problem');
    }
  };