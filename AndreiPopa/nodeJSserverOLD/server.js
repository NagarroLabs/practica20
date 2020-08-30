//Require Module Http 

const http = require('http');
//Require Module FileSystem
const fs = require('fs');


//Create Server Request on my Computer
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    //Header for Response 
    res.setHeader('Content-Type', 'text/html')

    //URL PATH

    let path = './sites/';
    switch (req.url) {
        case '/':
            path = path + 'home.html';
            res.statusCode = 200;
            break;

        case '/AndreiPopaCV':
            path = path + 'personalcv.html';
            res.statusCode = 200;
            break;

        case '/AndreiPopaProfile':
            path = path + 'profile.html';
            res.statusCode = 200;
            break

        case '/AndreiPopaForm':
            path += 'myform.html';
            res.statusCode = 200;
            break;
        //Redirect

        case '/AndreiPapaForm':
            res.statusCode = 301;
            res.setHeader('location', '/myform');
            res.end();
            break
        //Error
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    // }

    //Send an HTML file 
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });

});

//Create a server that listens on port 8080
server.listen(8080, 'LocalHost', () => {
    console.log("My door is open on 8080")
});



