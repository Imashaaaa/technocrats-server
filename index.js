const express = require('express');
const mongoose = require('mongoose');

const dbURI = "mongodb://127.0.0.1:27017/microjobDB";

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: true
}));

mongoose.connect(dbURI, 
  { useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true })
    .then((result) => {
      console.log("connected to the server");
      app.listen(3001, () => console.log("server started"));
    })
    .catch((err) => console.log(`${err.message} ${err.code}`));



const app = express();