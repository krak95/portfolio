const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.json());

const user = {
    'name':'jose',
    'pwd':'jose',
}



    app.post('/login',  (req,res)=> {
        const runame = req.body.uname;
        const rpwd = req.body.pwd;

        if(runame === user.name && rpwd === user.pwd){
            console.log('corret')
            res.send('ok')
        }else{
            res.send('nok')
        }
            console.log(runame,rpwd)
        })




app.listen(5000, ()=>{
    console.log('server is running on PORT 5000')
    })
    