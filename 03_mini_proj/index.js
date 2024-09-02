const express = require('express')
const app = express()

const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
// console.log(path.join(__dirname,'public'));

//setup ejs as view engine
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render("index")
})

// make the dynamic routing
app.get('/profile/:username', function (req, res) {
    
    res.send(`Welcome,${req.params.username}`)
})

app.listen(4000 , function(){
    console.log("server is running on port 4000")
})

