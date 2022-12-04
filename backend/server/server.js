const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.json());


const users = [
    {
        'name':'jose',
        'pwd':'jose',
        'cart':[],
    },
    {
        'name':'user1',
        'pwd':'user1',
        'cart':[],
    }
]


    app.post('/login',  (req,res)=> {
        const runame = req.body.uname;
        const rpwd = req.body.pwd;
        const usertoken = {runame, rpwd}
        const jwt = require('jsonwebtoken')
        require('dotenv').config()
        const accesstoken = jwt.sign(usertoken, process.env.jwToken, {expiresIn: "1120s"})
        console.log('logintry')
        if(users.find(user => user.name === runame)  && users.find(user => user.pwd === rpwd) ){
            console.log('corret')
            res.send(accesstoken)
        }else{
            res.send('')
        }
            console.log(runame,rpwd)
        })

    app.post('/verifyToken', (req,res)=>{
        const jwt = require('jsonwebtoken')
        require('dotenv').config()
        const token = req.body.token
        console.log('verifserver',token)
        jwt.verify(token, process.env.jwToken, (err,user)=>{
            if(err){
                return res.send('nok')
            }
            else
            {
                return res.send('ok')
            }
                
        })
    })

    const items = [
        {
            id:0,
            name:'apple',
            price:'10'
        },
        {
            id:1,
            name:'banana',
            price:'10'
        },
        {
            id:2,
            name:'orange',
            price:'10'
        }
    ]
    app.get('/getShop', (req,res)=>{
        if(req){
            res.send(items)
        }
    })

    app.post('/addCart', (req,res)=>{
        const itemadd = req.body.item       
        const session = req.body.session
        console.log(session)
        if(req){
            console.log(itemadd)
        }
    })



app.listen(5000, ()=>{
    console.log('server is running on PORT 5000')
    })
    