var express = require('express');
var router = express.Router();


router.get('/:id', async function(req, res, next) {

    const id = req.params.id;
    console.log(id);
    const db = require('../db');
    const funcionario = await db.findOne(id);
        
    res.send(funcionario);


  });
  

module.exports = router;