const express = require('express');
const app = express();
const cors = require('cors');
const { getNodeText } = require('@testing-library/react');
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.json());



const user = {
    'name':'jose',
    'pwd':'jose',
}



    app.post('/login',  (req,res)=> {
        const runame = req.body.uname;
        const rpwd = req.body.pwd;
        const jwt = require('jsonwebtoken')
        require('dotenv').config()
        const accesstoken = jwt.sign(user, process.env.jwToken, {expiresIn: "10s"})

        if(runame === user.name && rpwd === user.pwd){
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

        jwt.verify(token, process.env.jwToken, (err,user)=>{
            if(err){
                return res.sendStatus(403)
            }else{
                return res.send('ok')
            }
                
        })
    })




app.listen(5000, ()=>{
    console.log('server is running on PORT 5000')
    })
    