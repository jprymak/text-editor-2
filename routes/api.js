var express = require('express');
var router = express.Router();

const fs = require('fs');

router.post('/', function(req, res, next) {
      
    fs.writeFile('./public/saved/text.json', JSON.stringify(req.body, null, 2), err=>{
        if(err){
          console.log(err);
        }
        else{
            res.send('File successfully saved!');
          console.log('File successfully written!')
        }
      })
    
  });

  module.exports = router;