const mongoose = require('mongoose')


let googleLogin = mongoose.Schema({
    token: {
        type: String,
        require: true
    },
})

let GoogleLogin = mongoose.model('GoogleLogin', googleLogin)

module.exports = GoogleLogin