//1. Create a web server
//2. this is a test for git
//3. this is another try for git to register

const http = require("http");
const port = 3000;
const router = require('./router.js')


const server = http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
})

server.listen(port,(err) => {
  if (err) {
    return console.log('something bad happened'), err;
  }

  console.log(`server is listening on port ${port}`)
})
