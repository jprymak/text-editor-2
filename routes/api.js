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

  router.get('/', function(req, res, next) {
    fs.readFile('./public/saved/text.json', 'utf-8', (err,jsonString)=>{
        if(err){
          console.log(err)
        }else{
          try{
            const data = JSON.parse(jsonString)
            res.send(data);
          } catch{
            console.log('Error parsing JSON', err)
          }
        }
      })
  });

  module.exports = router;