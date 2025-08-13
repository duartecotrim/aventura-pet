require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;
const homeRouter = require('./app/router/homeRouter');

app.use(express.static('./app/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use('/', homeRouter);

app.listen(port, function(){
    console.log(`app online in http://${host}:${port}`);
});