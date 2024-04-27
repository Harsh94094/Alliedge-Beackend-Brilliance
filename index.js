const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors')
const bodyParser =require('body-parser');
const app = express();
const path = require('path'); 
const env = require("./.env");

const mongoURI = "mongodb+srv://Harsh123:Harsh123@cluster0.so6lfn8.mongodb.net/RealTimeDiomand";
//mongodb+srv://harshgadhiya5949:mhmrleBtF2V8sbI4@cluster0.so6lfn8.mongodb.net/RealTimeDiomand

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Notify when connected to MongoDB
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Routes
const AddProutect = require('./Routes/AddProduct');
const AddCatogary = require('./Routes/catogary')
const User = require('./Routes/user')
const manues = require('./Routes/manues')
const Slider = require('./Routes/Slider')
const createDiomandShape = require("./Routes/DiomandShepa")
app.use('/api/v1', AddProutect);
app.use('/api/v1', AddCatogary);
app.use('/api/v1', User);
app.use('/api/v1',manues );
app.use('/api/v1',Slider );
app.use('/api/v1',createDiomandShape)
// Start server
app.listen(6001, () => {
  console.log('Server running on port 6001');
});
