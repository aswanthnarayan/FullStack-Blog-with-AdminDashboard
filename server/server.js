const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoDb = require('./config/dataBase');
const AuthRoutes = require('./routes/AuthRoute');

const app = express();

app.use(express.json()); // Ensure you are using this to parse JSON
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Enable CORS for your frontend
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Routes
app.use('/user/', AuthRoutes);
// app.use(express.static('uploads'));
app.use('/uploads', express.static('uploads'));



// MongoDB Connection
mongoDb();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
