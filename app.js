
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const homeRoute = require('./routes/index');
const err = require('./routes/404');


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views','views');


app.use(express.static(path.join(__dirname,'public')));

app.use(homeRoute);



app.use(err);

app.listen(3000);