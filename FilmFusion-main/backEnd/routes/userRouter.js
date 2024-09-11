const express = require("express");

const router = express.Router();

//importing user logics

const {getAllUsers, createUser, loginUser, updateUsers, deleteUser} = require("../controller/userController");


//for users

router.get("/", getAllUsers);
router.post("/create", createUser);
router.post("/login", loginUser);
router.put("/update/:id", updateUsers);
router.delete("/delete/:id", deleteUser);

module.exports = router;