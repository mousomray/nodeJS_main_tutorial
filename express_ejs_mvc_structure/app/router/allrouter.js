const express = require('express');
const mycontroller = require('../controller/mycontroller');
const router = express.Router();

router
    .get('/', mycontroller.home)
    .get('/about', mycontroller.about)
    .get('/contact', mycontroller.contact)
module.exports = router;