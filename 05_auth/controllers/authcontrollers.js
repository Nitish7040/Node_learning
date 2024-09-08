module.exports.get_signup = (req,res) =>{
    res.render('signup')
};

module.exports.get_login = (req,res) =>{
    res.render('login')
};

module.exports.post_signup = (req,res) =>{
    res.send('post signup page')
};

module.exports.post_login = (req,res) =>{
    // const {email,password} = req.body
    console.log(req.body);
    
    res.send('post login page')
};
