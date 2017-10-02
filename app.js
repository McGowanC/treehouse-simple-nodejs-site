//1. Create a web server

const http = require("http");
const port = 3000;
const router = require('./router.js')
const display = require('./display.js');

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

display.get()



//Handle HTTP route GET / and POST /
  //if url == "/" && get
      //show search

    //if url == "/" && POST
      //redirect to /:username


//3. Handle HTTP route GET /:username i.e. /chalkers
  //if url == "/....."
    //get json from teamtreehouse
      //on "end"
        //show profile
      //on "error"
        //show error
