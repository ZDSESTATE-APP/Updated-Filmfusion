const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

//for users

const getAllUsers = async (req, res) => {
    try {
      // Retrieve all users from the database
  
      const allUsers = await User.find();
  
      // Return the list of users as JSON data to the client
  
      res.json(allUsers); 
  
    } catch (error) {
  
      // Handle any errors that may occur during the retrieval process
  
      res.status(500).json({ error:  "Failed to retrieve users" });
  
    }
  }
  
  const createUser = async (req, res) => {
    try {
      const { email, username, password, address } = req.body;
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create a new user instance
      const newUser = new User({ email, username, password, address });
  
      // Save the new user to the database
      await newUser.save();
  
      // Generate a JWT token
      const token = jwt.sign({ id: newUser._id }, 'secretkey', { expiresIn: '1h' });
  
      // Send the token as a response
      res.status(201).json({
        message: 'User was successfully created',
        user: newUser,
        token
      });
  
    } catch (error) {
      console.error('Error creating user:', error); // Log the error for debugging
      res.status(500).json({ error: 'Failed to create a new user' });
    }
  };

  const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Check if the password matches
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
  
      // Send the token and user details as a response
      res.status(200).json({
        message: 'Login successful',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        token
      });
  
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Failed to log in" });
    }
  };
  
  
  const updateUsers = async (req, res) => {
      
    try{
  
      let id = req.params.id;
      updatedUser = req.body;
      await User.findByIdAndUpdate(id, updatedUser);
      res.send(`User with following ID : ${req.params.id} was successfully updated.`)
  
    }catch{
  
      console.error("Error updating user:", error);
      res.status(500).send(`User with following ID : ${req.params.id} was not updated.`)
  
    }
  
  }
  
  const deleteUser = async (req, res) => {
  
    try{
      await User.findByIdAndDelete(req.params.id);
      res.send(`User with following ID : ${req.params.id} was successfully deleted.`)
    }catch{
      console.error("Error deleting user:", error);
      res.status(500).send(`User with following ID : ${req.params.id} was not deleted.`)
    }
  
  } 

  module.exports = {getAllUsers, createUser, loginUser, updateUsers, deleteUser}