const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const  { mongoConnect} = require('./database/database')
app.use(express.urlencoded({extended:true}));
app.use(express.json());// Other wise axios Request could not be read
app.use(express.static(path.join(__dirname,'public')));
const requestHandler = require('./routes/todo');

app.use('/',requestHandler);// send to routes folder todo.js

mongoConnect()
  .then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localHost:`+PORT);
    })
  })
  .catch((err)=>{
    console.log('Cannot connected to our App, Since DB Not working');
  })


