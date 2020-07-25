const express = require('express');
const formidable = require('formidable');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('API is working properly');
});

router.post('/', (req, res, next) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(fields, files);
    res.json({ fields, files });
  });
});

module.exports = router;
