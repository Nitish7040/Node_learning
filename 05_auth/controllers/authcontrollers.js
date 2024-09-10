const User = require('../models/user')


module.exports.get_signup = (req,res) =>{
    res.render('signup')
};

module.exports.get_login = (req,res) =>{
    res.render('login')
};


module.exports.post_signup = async(req,res) =>{
    const {email,password} = req.body;
    try {
    const user= await User.create({email,password }); 
    res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.send(400).send('error,user not defined')
        
    }
};


module.exports.post_login = async(req,res) =>{
    
    console.log(req.body);
    
    res.send('post login page')
};
