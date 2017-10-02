function homePath(request,response) {
  if(request.url === "/") {
    response.write("<HTML>");
    response.write("<body>");
    response.write("<h1>")
    response.write("This is it baby")
    response.write("</h1>");
    response.write("</body>")
    response.write("</html>")
    response.end('Hello Node.js Server!');
  }
}

function userPath(request, response) {
  let userName = request.url.replace("/","");
  if(userName.length > 0) {
    response.write("<HTML>");
    response.write("<body>");
    response.write("<h1>")
    response.write(`Hello ${userName}`)
    response.write("</h1>");
    response.write("</body>")
    response.write("</html>")
    response.end('Hello Node.js Server!');
  }
}

module.exports.home = homePath;
module.exports.user = userPath;
