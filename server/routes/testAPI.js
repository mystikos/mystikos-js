const express = require('express');
const formidable = require('formidable');
const embedPayload = require('../helpers/EmbedPayload');

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
    const data = {
      encData: JSON.parse(fields.encryptedData),
      iv: fields.iv
    };

    embedPayload(files, data.encData, data.iv).then((result) => res.json({ uri: result }));
  });
});

module.exports = router;
