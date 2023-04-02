const express = require("express");
const {signupUser, loginUser,getUsers} = require('../controllers/userController');

const router = express.Router();

//login route
router.post('/login',loginUser)

router.get('/',getUsers)

//signup route
router.post('/signup', signupUser)

//redirect

module.exports = router
