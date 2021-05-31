const http = require("http");

http.createServer((req, res) => {
    res.end("<h1>SEJA BEM-VINDO!</h1>")
}).listen(8181)