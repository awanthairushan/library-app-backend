const dotenv = require("dotenv")
const express = require("express");
const cors = require('cors');
const connectDB = require("./config/dbConnection");

dotenv.config()
connectDB();
const index = express();

const corsOption = {
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

const port = process.env.PORT || 4000

index.use(express.json());
index.use(cors(corsOption));

index.use('/api/author', require('./routes/authorRoutes'));
index.use('/api/book', require('./routes/bookRoutes'));

index.listen(port)