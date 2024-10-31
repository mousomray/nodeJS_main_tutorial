const express = require('express'); // Import express
const app = express(); // Store into app variable 

app.set('view engine','ejs'); // View Engine of ejs 
app.set('views','views'); // Run views file 

// Mother of all route
const allRouter = require('./app/router/allrouter')
app.use(allRouter);

// Port 
const port = 3004
app.listen(port,() =>{
    console.log(`Server is Running on port ${port}`);
    
})