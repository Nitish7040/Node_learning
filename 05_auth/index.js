const  express = require('express')
const mongoose = require('mongoose')
const cookieparser = require('cookie-parser')

const app = express()
const port = 4000
const authroutes=require('./routes/authroutes')

app.set('view engine','ejs');
app.use(express.json());
app.use(authroutes)
app.use(cookieparser());

app.get('/', (req, res) =>
     res.render('index'))



//database connection

const dbURl='mongodb+srv://6260nitishpandey:6260nitish@cluster0.meodo.mongodb.net/';
mongoose.connect(dbURl)
    .then((result) => app.listen(3000, () => console.log(`database connect on port ${3000}`)))
    .catch((err) => console.log(err));




    // set coockies
app.get('/set-cookies',(req,res)=>{

// res.setHeader('set-cookie','newuser=true')
res.cookie('newuser',false);
res.cookie('Newuser',true,{maxage:1000*60*60*24 , httpOnly:true})

res.send('cookies set')
})


// read cookies
app.get('/read-cookies',(req,res)=>{


})


app.listen(port, () => console.log(`app listening on port ${port}`))
