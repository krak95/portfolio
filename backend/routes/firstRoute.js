const router = require('express').Router()
const First = require('../model/first.model')

router.route('/create').post((req,res)=>{
    console.log('MONGO Route')
    const title = req.body.title;
    const content = req.body.content
    const newFirst = new First({
        title,
        content
    })

    newFirst.save()
})

module.exports = router