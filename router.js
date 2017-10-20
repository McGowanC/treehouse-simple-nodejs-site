const Profile = require("./profile.js");
const renderer = require("./renderer.js");
const queryString = require("querystring");
const contentType = "text/html"

function homePath(request,response) {
  if(request.url === "/") {
    if(request.method.toLowerCase() === "get"){
    response.writeHead(200, {'Content-Type': contentType})
    renderer.view('header', {}, response);
    renderer.view('search', {}, response);
    renderer.view('footer', {}, response);
    response.end();
  } else {
    //if url =="/" && POST

    //get the post data from body
    request.on('data',(postBody) => {
      let query = queryString.parse(postBody.toString());
      response.writeHead(303,{'Location':"/" + query.username});
      response.end();
    })

    //redirect to user name
  }
  }
}

function userPath(request, response) {
  let userName = request.url.replace("/","");
  if(userName.length > 0) {
    response.writeHead(200, {'Content-Type': contentType});
    renderer.view('header', {}, response);

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
      renderer.view('profile', values, response);
      renderer.view('footer', {}, response);


    })
    //on error
    studentProfile.on("error", function(error){
      //show error
      renderer.view('error', {errorMessage: error.message}, response);
      renderer.view('search', {}, response);
      renderer.view('footer', {}, response);
    })
  }
}

module.exports.home = homePath;
module.exports.user = userPath;
