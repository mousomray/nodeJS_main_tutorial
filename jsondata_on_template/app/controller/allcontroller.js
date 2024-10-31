const fs = require('fs'); // For File Read
const path = require('path'); // Import path to work with file paths

class allcontroller {
    async home(req, res) {
        res.render('uncommon/home');
    }

    async about(req, res) {
        res.render('uncommon/about');
    }

    async contact(req, res) {
        res.render('uncommon/contact');
    }

    async service(req, res) {
        res.render('uncommon/service');
    }

    async portfolio(req, res) {
        res.render('uncommon/portfolio');
    }

    async pricing(req, res) {
        res.render('uncommon/pricing');
    }

    // Blog page data.json handling area
    async blog(req, res) {
        const jsonFilePath = path.join(__dirname, '../database/data.json');
        const data = await fs.readFileSync(jsonFilePath, 'utf8');
        const blogData = JSON.parse(data); // Convert JSON data to normal object
        res.render('uncommon/blog', { blog: blogData });
    }

    async team(req, res) {
        res.render('uncommon/team');
    }

    async testimonials(req, res) {
        res.render('uncommon/testimonials');
    }
}

module.exports = new allcontroller();
