require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;





app.listen(port, function(req, res){
    console.log(`app online in http://localhost:${port}`);
})
