const express = require('express');
const allcontroller = require('../controller/allcontroller');
const router = express.Router();

router.get('/', allcontroller.home)
router.get('/about', allcontroller.about)
router.get('/contact', allcontroller.contact)
router.get('/service', allcontroller.service)
router.get('/portfolio', allcontroller.portfolio)
router.get('/pricing', allcontroller.pricing)
router.get('/blog', allcontroller.blog)
router.get('/team', allcontroller.team)
router.get('/testimonials', allcontroller.testimonials)

module.exports = router;