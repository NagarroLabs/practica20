//Require module express
const express = require('express')

//Express app

app = express();

//register view engine

//middleware & static files (public your assests)
app.use(express.static('public'));

//Listen for request 

app.listen(8080, function () {
    console.log("My door is open 8080");
});

app.get('/', (req, res) => {
    //Express make the Header for us 
    res.sendFile('./sites/index.html', { root: __dirname });
});

app.get('/AndreiPopaCV', (req, res) => {
    res.sendFile('./sites/personalcv.html', { root: __dirname });
});

app.get('/AndreiPopaProfile', (req, res) => {
    res.sendFile('./sites/profile.html', { root: __dirname });
});

app.get('/AndreiPopaForm', (req, res) => {
    res.sendFile('./sites/myform.html', { root: __dirname });
});


//Middleware Function 404 because is work to top to bottom
app.use((req, res) => {
    res.status(404).sendFile('./sites/404.html', { root: __dirname });
})


