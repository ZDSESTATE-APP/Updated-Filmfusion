const mongoose = require("mongoose");
const User = require("./userModel");



const movieSchema = new mongoose.Schema({

    movieTitle: {
        type: String,
        default: '',
      },
      movieYear: {
        type: Number,
        default: 0,
      },
    
      moviePlot: {
        type: String,
      },
    
      owner: { type:mongoose.Schema.Types.ObjectId, ref:"User"
    
      }
}, {
  timestamps: true  
});

const movie = mongoose.model("movie", movieSchema);

module.exports = movie;
