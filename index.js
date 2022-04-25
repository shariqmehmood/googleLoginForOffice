const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.Port || 3000
const SocialRoutes = require('./Routes/socialLogin')

mongoose.connect('mongodb+srv://zeeshan:12345@cluster0.ic2wx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('===================  Database Connected ===================');
});
mongoose.connection.on('error', () => {
    console.log('=================== Database Not Connected ===================');
});

app.use(express.json())

app.use('/', SocialRoutes)

app.listen(port, () => {
    console.log('Port Start 3000')
})




// keytool -list -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android 
