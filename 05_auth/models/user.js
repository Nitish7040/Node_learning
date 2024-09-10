const mongoose = require('mongoose')
const {isEmail}= require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'please enter an email'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'pls enter valid email'],
    },
    password:{
          type:String,
          required:[true,'please enter password'],
          minlength:[6,'pass should be grayer than 6 char']
    },
})

// moongoose hoocks

// userSchema.post('save',function(doc,next){

//     console.log('new user was created and saved',doc);
    

//     next();
// })


//before doc saved to db
userSchema.pre('save',async function(next){
    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt)

    
    next();
})


const User = mongoose.model('user',userSchema)

module.exports = User;