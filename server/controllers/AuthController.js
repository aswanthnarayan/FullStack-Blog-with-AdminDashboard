const bcrypt = require('bcrypt');
const User = require("../models/UserSchema");
const jwt = require('jsonwebtoken');
require('dotenv').config();


const postSignUp= async (req, res) => {
    try {
        const {name, username, email, password, confirmPassword, profilePic} = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }
        if (!name.trim()) {
            return res.status(400).json({ error: 'Name cannot be empty' });
        }
        if (!username.trim()) {
            return res.status(400).json({ error: 'Username cannot be empty' });
        }

        // Check if the email / username already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email is already in use' });
        }
        const existingUserName = await User.findOne({ username });
        if (existingUserName) {
            return res.status(400).json({ error: 'Username is already in use' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword,
            profilePic: profilePic || "" // Optional profilePic handling
        });

        // Save user to the database
        await newUser.save();

        // Return success response
        res.status(201).json({ message: 'User successfully created' });

    } catch (error) {
        console.error('Error in signup:', error);
        res.status(500).json({ error: 'Server error' });        
    }
}



const postSignIn = async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
          return res.status(400).json({ error: 'User does not exist' });
      }

      // Validate password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ error: 'Password does not match' });
      }

      // Generate JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Set the cookie with additional settings
      res.cookie('token', token, {
        httpOnly: true,  // Prevents JavaScript from accessing the cookie
        secure:false,  // Use true only in production (for HTTPS)
        sameSite: 'Lax',  
        maxAge: 24 * 60 * 60 * 1000, // Set cookie expiration (1 hour)
      });

      res.json({
          user: {
              id: user._id,
              name: user.name,
              email: user.email,
          },
      });

  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
};



const getUserProfile = async (req, res) => {
  
  const token = req.cookies.token;

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    // Verify the JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the user from the database
    const user = await User.findById(decoded.id).select('-password'); // Do not send the password
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return user data
    res.status(200).json({ user });
  } catch (error) {
    // If token is invalid, return an error
    res.status(401).json({ message: 'Invalid token' });
  }
};


module.exports = {
    postSignUp,postSignIn,getUserProfile
}