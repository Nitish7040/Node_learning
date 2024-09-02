const express = require('express')
const app = express()


//middlewares
app.use(function(req,res,next){
// res.send("middle ware part")
    console.log('middleware');
    next();
    
});
//middleware to read data in json 
app.use(express.json)
app.use(express.urlencoded({extended:true}))



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profile', function (req, res,next) {
return next (new error("something went wrong"))
//   res.send('profile page')
})

// express handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
app.listen(3000);

