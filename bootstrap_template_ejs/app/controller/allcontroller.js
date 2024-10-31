class allcontroller {

    async home(req, res) {
        // I use 'uncommon/' because home is present in uncommon folder which is present in view 
        res.render('uncommon/home', { title: 'Home Page' } // For to show title in tab
        )
    }

    async about(req, res) {
        res.render('uncommon/about', { title: 'About Page' }
        )
    }

    async contact(req, res) {
        res.render('uncommon/contact', { title: 'Contact Page' }
        )
    }

    async service(req, res) {
        res.render('uncommon/service', { title: 'Service Page' }
        )
    }

    async portfolio(req, res) {
        res.render('uncommon/portfolio', { title: 'Portfolio Page' }
        )
    }

    async pricing(req, res) {
        res.render('uncommon/pricing', { title: 'Pricing Page' }
        )
    }

    async blog(req, res) {
        res.render('uncommon/blog', { title: 'Blog Page' }
        )
    }

    async team(req, res) {
        res.render('uncommon/team', { title: 'Team Page' }
        )
    }

    async testimonials(req, res) {
        res.render('uncommon/testimonials', { title: 'Testimonials Page' }
        )
    }
}


module.exports = new allcontroller();