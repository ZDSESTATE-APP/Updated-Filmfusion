const Movie = require("../models/MovieModel");

const getAllMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.json(allMovies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Movies" });
  }
}

const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).json({ message: "Movie successfully created", Movie: newMovie });
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new Movie" });
  }
}

const updateMovies = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json({ message: "Movie successfully updated", Movie: updatedMovie });
  } catch (error) {
    console.error("Error updating Movie:", error);
    res.status(500).json({ error: "Failed to update Movie" });
  }
}

const deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json({ message: "Movie successfully deleted", todo: deletedMovie });
  } catch (error) {
    console.error("Error deleting Movie:", error);
    res.status(500).json({ error: "Failed to delete Movie" });
  }
}

module.exports = { getAllMovies, createMovie, updateMovies, deleteMovie }
