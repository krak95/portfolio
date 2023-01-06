const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');
const PORT = 5500
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.json());
mongoose.connect('mongodb+srv://jpoa95:NCsJ2o43bYOvGiZf@firstmongo.yvxsc65.mongodb.net/firstMongo')

const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('mongoDB ONLINE')
})

app.listen(PORT, ()=>{
 console.log(`RUNNING ON ${PORT}`)
})

const First = require('./../model/first.model')

app.post('/create',(req,res)=>{
    const title = req.body.title;
    const content = req.body.content
    const newFirst = new First({
        title,
        content
    })

    newFirst.save()
})