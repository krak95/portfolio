const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.json());

const user = {
    'name':'jose',
    'pwd':'jose',
}
const user1 = {
    'name':'user1',
    'pwd':'user1',
}



    app.post('/login',  (req,res)=> {
        const runame = req.body.uname;
        const rpwd = req.body.pwd;
        const usertoken = {runame, rpwd}
        const jwt = require('jsonwebtoken')
        require('dotenv').config()
        const accesstoken = jwt.sign(usertoken, process.env.jwToken, {expiresIn: "1000s"})

        if((runame === user.name && rpwd === user.pwd) || (runame === user1.name && rpwd === user1.pwd)){
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




app.listen(5000, ()=>{
    console.log('server is running on PORT 5000')
    })
    