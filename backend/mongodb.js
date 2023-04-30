const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LoginSignUpPage')
.then(() =>
{
    console.log('mongodb connected');
})
.catch(() =>
{
    console.log('failed to mongodb')
})

const loginschema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        }
    }
)

const collection =new mongoose.model('LoginInCollection',loginschema);
module.exports = collection