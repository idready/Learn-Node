const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // const obj = {top: 0, bottom: 1};
  // res.json(req.query);
  // res.send('Hey! It works!');
  res.render('hi', {
    name: req.query.name || 'Foobar'
  });
});

router.get('/reverse/:name', (req, res) => {
  // res.send('Hey! It works too!');
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
