const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Server started on port ' + PORT));



//TODO /profile add switch case end point
//another end point that accepts a post and make it "create profile"
//another get endpoint "create profile" load form html
//when submit call on post endpoint
//create profile class here