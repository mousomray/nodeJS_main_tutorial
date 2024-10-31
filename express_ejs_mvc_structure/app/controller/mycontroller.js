class mycontroller {
    async home (req, res){
        //res.send('<h1>Home Page')
        res.render('home')
    }
    async about (req, res){
        //res.send('<h1>About Page')
        res.render('about')
    }
    async contact(req, res){
       // res.send('<h1>Contact Page')
       res.render('contact')
    }
}
module.exports = new mycontroller();