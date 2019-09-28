const express = require('express')
const app = express()
const connectDB = require('./config/db')
connectDB()//Call and connect to the db

app.use(express.json({ extended: false })); //Now we can accept body data

//Home page test
app.get('/', (req, res) => {
    res.json({msg: "hello from the backend"})
})
app.post('/', (req, res) => {
    res.json({msg: "you made a user"})
})
app.use('/users', require('./routes/users'))


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



// app.get('/', (req, res) => {
//     res.json({id: req.params.id})
// })



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
