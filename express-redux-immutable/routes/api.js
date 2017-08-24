var express = require('express');
var router = express.Router();

import { datasets } from './data';

let Initdata = datasets;
/* GET home page. */
router.get('/tableData', function(req, res) {
  console.log(Initdata)
  res.json({
    code: 0,
    data: Initdata
  });
});

router.post('/add', function(req, res) {
  console.log(req)
  datasets.push(req.body);
  res.json({
    code: 0,
    data: true
  });
});

router.get('/delete', function(req, res) {
  const name = req.query.name;
  // Initdata = Initdata.filter(i => 
  //   i.name !== name
  // );
  res.json({
    code: 0,
    data: true
  });
});

router.post('/update', function(req, res) {
  Initdata = Initdata.map(i => {
    if(i.name === req.body.name) {
      return req.body;
    }
    return i;
  })
  res.json({
    code: 0,
    data: true
  });
});

router.get('/detail', function(req, res) {
  console.log(req.query.name)
  const data = Initdata.filter(i => 
    i.name === req.query.name
  );
  res.json({
    code: 0,
    data: data[0]
  });
});
module.exports = router;
