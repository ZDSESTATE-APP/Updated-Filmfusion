const express = require("express");

const router = express.Router();

//importing Movie logics

const {getAllMovies, createMovie, updateMovies, deleteMovie} = require("../controller/movieController");

//for Movies

router.get("/", getAllMovies);
router.post("/create", createMovie);
router.put("/update/:id", updateMovies);
router.delete("/delete/:id", deleteMovie);

module.exports = router;