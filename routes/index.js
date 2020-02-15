const express = require('express');

const controler = require('../controlers/index');
const router = express.Router();


router.get('/',controler.getHome);

router.get('/%D8%A7%D9%84%D9%87%D9%8A%D9%83%D9%84-%D8%A7%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A',controler.getHierarchy);

module.exports = router;