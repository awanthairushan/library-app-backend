const dotenv = require("dotenv")
const express = require("express");
const cors = require('cors');
const connectDB = require("./config/dbConnection");

dotenv.config()
connectDB();
const app = express();

const corsOption = {
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

const port = process.env.PORT || 4000

app.use(express.json());
app.use(cors(corsOption));

app.use('/api/author', require('./routes/authorRoutes'));
app.use('/api/book', require('./routes/bookRoutes'));

app.listen(port)