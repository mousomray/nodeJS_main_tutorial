const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

// Make public file static
app.use(express.static(__dirname + '/public'));

// Mother of all route
const allRouter = require('./app/router/allrouter')
app.use(allRouter)

const port = 3004
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});