const express = require("express");

const {postSignUp,postSignIn,getUserProfile} = require('../controllers/AuthController')

const router = express.Router();

router.post("/signup", postSignUp);
router.post("/signin", postSignIn);
router.get("/profile", getUserProfile); // route for verifying user is authenticated with JWT


module.exports = router;