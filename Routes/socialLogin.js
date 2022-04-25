const express = require("express");

const routes = express.Router()
const { GoogleLogin } = require('../Controller/socialLogin')


routes.post('/googlelogin', GoogleLogin)
routes.get('/googlelogin', async(req,res)=>{
    try{

        res.send({
            data:'h1',
            status:202
        })

     console.log('hi')

    }catch(e){
        console.log('e')

        res.send({
            data:'erro',
            status:202
        })
    }
})  


module.exports = routes