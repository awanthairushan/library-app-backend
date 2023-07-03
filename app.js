const dotenv = require("dotenv")
const express = require("express");
const connectDB = require("./config/dbConnection");

dotenv.config()
connectDB();
const app = express();


const port = process.env.PORT || 4000

app.use(express.json());
app.use('/api/author', require('./routes/authorRoutes'));

app.listen(port)