import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import mongoose from 'mongoose';
import { createMed } from './controllers/medication';

const app = express();
app.use(bodyParser.json());
app.use(express.static('./public'))

//const server = http.createServer(app);

app.post('/create-med' , createMed)

app.listen(5000, ()=> {
    console.log("Server listening on port 5000")
})



// mongodb connection
const MONGO_URL = 'mongodb+srv://admin:admin@cluster0.6liv3rn.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URL, {retryWrites:true , w:'majority'})
.then(()=> {
  console.log('Connected to mongo db');
})
.catch((error) => {
  console.log(error);
});
