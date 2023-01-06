const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { MongoClient } = require("mongodb");
const cors = require('cors');
const PORT = 5500
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.json());
const connectDB = async () => {
    const conn = await mongoose
      .connect('mongodb+srv://jpoa95:NCsJ2o43bYOvGiZf@firstmongo.yvxsc65.mongodb.net/firstMongo', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .catch((err) => {
        console.log("error: ", err);
      });
    }

const client = new MongoClient('mongodb+srv://jpoa95:NCsJ2o43bYOvGiZf@firstmongo.yvxsc65.mongodb.net/firstMongo');

const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('mongoDB ONLINE')
})

app.listen(PORT, ()=>{
 console.log(`RUNNING ON ${PORT}`)
})

const First = require('../model/login.Model')

app.post('/create',(req,res)=>{
    const fname = req.body.fname;
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    const newFirst = new First({
        fname,
        email,
        username,
        password,
    })

    newFirst.save()
})

app.post('/login', async (req,res)=>{
    const db = client.db('firstMongo')
    const username = req.body.username
    const password = req.body.password
    const logValues = await db.collection('users').findOne({username:username,password:password})
    console.log(logValues)
    if(logValues !== null){
      res.send('Success')
    }

})