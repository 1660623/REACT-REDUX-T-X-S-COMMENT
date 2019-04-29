const express = require('express');
// const url = require('url');
var bodyParser = require('body-parser')
const app = express();
const db  = require('./db');
app.set('views','./views');
app.set('view engine','ejs');
var cors = require('cors')
app.use(cors())

// const url = require('url');
const sinhvien = require('./route/router.sinhvien');

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.use('/sinhvien/api',sinhvien);



const  port = process.env.PORT | 7000;
db.sync().then(()=>{
 app.listen(port);
    console.log(`Server is listening on port ${port}`);
}).catch((err)=>{
    console.error(err);
})