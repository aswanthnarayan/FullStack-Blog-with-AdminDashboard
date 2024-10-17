const express = require("express");
const upload = require('../middlewares/upload');

const {postSignUp,postSignIn,getUserProfile,logoutUser,verifyPassword,updateUser,uploadProPic} = require('../controllers/AuthController')

const router = express.Router();

router.post("/signup", postSignUp);
router.post("/signin", postSignIn);
router.post('/logout',logoutUser)
router.get("/profile",getUserProfile); // route for verifying user is authenticated with JWT

router.post('/verify-password',verifyPassword)
router.patch('/update',upload.single('profilePic'), updateUser);


module.exports = router;