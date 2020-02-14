const express = require('express');

const controler = require('../controlers/index');
const router = express.Router();


router.use('/',controler.getHome);