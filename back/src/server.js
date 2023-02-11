const http = require("http");
const searchId = require("./controller/getCharById");
const searchDetail = require("./controller/getCharDetail");
const PORT = 3001;


http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    const id = req.url.split("/").pop();
    if (req.url.includes("onsearch")) searchId.getCharById(res, id);
    if(req.url.includes("detail")) searchDetail.getCharDetail(res, id);
    
}).listen(PORT, "localhost");
