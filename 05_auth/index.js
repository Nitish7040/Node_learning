const  express = require('express')
const app = express()
const port = 4000
const authroutes=require('./routes/authroutes')

app.set('view engine','ejs');
app.use(express.json());


app.get('/', (req, res) =>
     res.render('index'))


app.use(authroutes)


app.listen(port, () => console.log(`app listening on port ${port}`))