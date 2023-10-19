const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
//Set the response HTTP header with HTTP status and Content type

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    let realNums = generateNums();
    for (i = 0; i < 6; i ++) {
        res.write(`Thes are your nums ${toString(realNums[i])}`)
    }

    });

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

function generateNums () {
    let nums;

    for (i = 0; i < 6; i++) {
        nums[i] = Math.roof(Math.random() * 69);
    }

    return nums;
}