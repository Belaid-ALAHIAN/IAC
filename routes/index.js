const express = require('express');

const controler = require('../controlers/index');
const router = express.Router();


router.get('/',controler.getHome);

module.exports = router;