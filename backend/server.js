const express = require('express');
const { mongoose } = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const shoeRoutes = require('./routes/shoe-routes');
const URL =`mongodb+srv://Konst:${process.env.MONGO_PASSWORD}@node-js-cluster0.mbfup0j.mongodb.net/dbnike?retryWrites=true&w=majority&appName=Node-JS-Cluster0`
const PORT = 5000;

// const URL ='mongodb://127.0.0.1:27017/dbnike';
const app = express();

app.use(shoeRoutes);

mongoose
  .connect(URL)
  .then(() => {
    console.log('Connected to MongoDB!')
  })
  .catch((err) => {
    console.log(`Db connection error: ${err}`);
  })

app.listen(PORT, (err) => err ? console.log(err) : console.log(`Server running on port ${PORT}...`));
