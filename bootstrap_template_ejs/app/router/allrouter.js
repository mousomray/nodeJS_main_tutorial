const express = require('express');
const allcontroller = require('../controller/allcontroller');
const router = express.Router();


router
    .get('/', allcontroller.home)
    .get('/about', allcontroller.about)
    .get('/contact', allcontroller.contact)
    .get('/service', allcontroller.service)
    .get('/portfolio', allcontroller.portfolio)
    .get('/pricing', allcontroller.pricing)
    .get('/blog', allcontroller.blog)
    .get('/team', allcontroller.team)
    .get('/testimonials', allcontroller.testimonials)

module.exports = router;