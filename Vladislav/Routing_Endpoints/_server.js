const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');

    let path = '';

    switch(req.url){
        case '/':
            path+='profile_index.html';
            res.statusCode=200;
            break;
        case '/form':
            path+='form_index.html';
            res.statusCode=200;
            break;
        default:
            path+='404.html';
            res.statusCode=404;
            break;
    }
    fs.readFile(path, (err,data)=>
    {
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    });
});


server.listen(8080,'localhost',()=>{
    console.log('server started at 8080');
});