const Profile = require("./profile.js");


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

    //get json from teamtreehouse

    let studentProfile = new Profile(userName);
    //on "end"
    studentProfile.on("end", function(profileJSON){
      //show proifle

      //store the values which we need
      let values = {
        avatarURL: profileJSON.gravatar_url,
        name1: profileJSON.name,
        badges: profileJSON.badges.length,
        jsPoints: profileJSON.points.JavaScript
      }

      //simple response
      response.write("The user " + values.name1 + " has " + values.badges + " badges, as well as " + values.jsPoints + " JavaScript points.\n")
      response.end("this is the end")


    })
    //on error
    studentProfile.on("error", function(error){
      //show error
      response.write(error.message + "\n");
      response.end("footer\n")
    })

    response.write("</body>")
    response.write("</html>")
  }
}

module.exports.home = homePath;
module.exports.user = userPath;
