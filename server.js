const express = require("express");
const connectDB = require('./config/mongodb');
const bodyParser = require('body-parser')
const morgan = require('morgan');

const searchRoutes = require('./Routes/searchRoutes');
const productRoutes = require('./Routes/productRoutes');

const port = process.env.PORT || 8001;

const app = express();
require("dotenv").config();

connectDB();


// Middleware
app.use(express.json());
app.use(morgan('dev'));

app.get('/a',(req,res) => {
    res.send("Hello World");
    
})

// Routes
app.use('/api/products', productRoutes);
app.use('/api/search', searchRoutes);



//Start the server
app.listen(port,() => {
    console.log(`Server is running on ${port}`)
})