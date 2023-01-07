const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.json());




    app.post('/login',  (req,res)=> {
        const runame = req.body.uname;
        const rpwd = req.body.pwd;
        const usertoken = {runame, rpwd}
        const jwt = require('jsonwebtoken')
        require('dotenv').config()
        const accesstoken = jwt.sign(usertoken, process.env.jwToken, {expiresIn: "1120s"})
        res.send(accesstoken)
        console.log('logintry')
        console.log('corret')
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
            name:'rtx1',
            price:'100',
            img:'0'
        },
        {
            id:1,
            name:'rtx2',
            price:'30',
            img:'0'
        },
        {
            id:2,
            name:'rtx2',
            price:'30',
            img:'0'
        },
        {
            id:3,
            name:'rtx2',
            price:'30',
            img:'0'
        },
        {
            id:4,
            name:'rtx2',
            price:'30',
            img:'0'
        },
        {
            id:5,
            name:'rtx2',
            price:'30',
            img:'0'
        },
        {
            id:6,
            name:'rtx2',
            price:'30',
            img:'0'
        },
        {
            id:7,
            name:'rtx2',
            price:'30',
            img:'0'
        },
        {
            id:8,
            name:'rtx2',
            price:'30',
            img:'0'
        },        {
            id:9,
            name:'rtx2',
            price:'30',
            img:'0'
        },        {
            id:10,
            name:'rtx2',
            price:'30',
            img:'0'
        },        {
            id:11,
            name:'rtx2',
            price:'30',
            img:'0'
        },        {
            id:12,
            name:'rtx2',
            price:'30',
            img:'0'
        },        {
            id:13,
            name:'rtx2',
            price:'30',
            img:'0'
        },        {
            id:14,
            name:'rtx2',
            price:'30',
            img:'0'
        },        {
            id:15,
            name:'rtx2',
            price:'30',
            img:'0'
        },        {
            id:16,
            name:'rtx2',
            price:'30',
            img:'0'
        },        {
            id:17,
            name:'rtx2',
            price:'30',
            img:'0'
        },        {
            id:18,
            name:'rtx2',
            price:'30',
            img:'0'
        },        {
            id:19,
            name:'rtx2',
            price:'30',
            img:'0'
        },        {
            id:20,
            name:'rtx2',
            price:'30',
            img:'0'
        },
    ]
    app.get('/getShop', (req,res)=>{
        if(req){
            res.send(items)
        }
    })

    app.post('/addCart', (req,res)=>{
        const itemadd = req.body.item       
        if(req){
            console.log(itemadd)
            res.send(itemadd)
        }
    })



app.listen(5000, ()=>{
    console.log('server is running on PORT 5000')
    })
    