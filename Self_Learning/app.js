const { application } = require('express');
const express = require('express');

const port = 3000;

const app = express();

//Api middlewares
app.use(express.json());   //this is to accept data in json format

app.use(express.urlencoded());  // this is basically to decode the data send through html form

app.use(express.static('public'));  //this to serve our public folder as a static folder


app.get('/form' , (req,res) => {

    res.sendFile(__dirname + '/public/index.html');
})

app.post('/form',(req,res) => {
     console.log(req.body)   //the data we get is in the body of request
})


app.listen(port , () => {
    console.log(`server started at http://localhost:${port}`);
})