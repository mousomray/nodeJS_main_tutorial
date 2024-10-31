const express = require('express');
const mycontroller = require('../controller/mycontroller');
const router = express.Router();

router.get('/', mycontroller.home)
router.get('/about', mycontroller.about)
router.get('/contact', mycontroller.contact)

module.exports = router;