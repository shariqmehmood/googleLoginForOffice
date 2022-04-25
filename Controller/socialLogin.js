const GoogleLogin = require('../Models/socialLogin')


module.exports={
    GoogleLogin: async (req, res) => {
        try {
            let {body}=req
            console.log(body)
            if(body){
                res.send({
                    status:200,
                    message:'Login',
                    data:body
                })
            }else{
                res.send({
                    status:404,
                    message:'Error',
                    
                })
            }

        } catch (e) {
            console.log(e)
        }
    }
}