const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
    lowercase: true,
  },

  username: {
    type: String,
    required: true,
    trim: true,
  },
  
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
},
{
  timestamps: true
});

// We Hash the password before saving the user model
userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
