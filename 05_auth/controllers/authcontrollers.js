const User = require('../models/user')
const jwt = require('jsonwebtoken');
const { use } = require('../routes/authroutes');

module.exports.get_signup = (req,res) =>{
    res.render('signup')
};

module.exports.get_login = (req,res) =>{
    res.render('login')
};

// create a jwt token

const maxAge = 3 * 24 * 60 * 60; // 3 days in seconds
const createToken = (id) => {
  return jwt.sign({ id }, 'nitishsecret', {
    expiresIn: maxAge, // Token expiry in seconds
  });
};

// const token = createToken('user123');
// console.log(token);


module.exports.post_signup = async(req,res) =>{
    const {email,password} = req.body;
    try {
    const user= await User.create({email,password });

    //store token with cookie 
const token = createToken(user._id);
console.log(token);
res.cookie('jwt',token,{httpOnly:true, maxAge:maxAge*1000});

    res.status(201).json({user:user._id})
    } catch (error) {
        console.log(error);
        res.send(400).send('error,user not defined')
        
    }
};

// console.log(token);
module.exports.post_login = async(req,res) =>{
    const {email,password} = req.body;

  try {
    const user = await User.login(email,password);
    res.status(200).json({user:user._id})

  } catch (error) {
    res.status(400).json({});
  }
};
