const express = require('express');
const app3 = express();

app3.listen(3000, function() { 
    console.log('Server is live')});

app3.use(express.urlencoded({
    extended: true
      }));
    
