const fs = require("fs");

function mergeValues(content, values){
  //cycle over the keys
  for(var key in values) {
    //Replace all {{key}} with the value from the values object
    content = content.replace("{{" + key + "}}", values[key]);
  }
  //return merged content
  return content;
}

function view(templateName, values, response){
  //Read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
  //Insert values into the content
  fileContents = mergeValues(fileContents, values);
  response.write(fileContents);
  //write out to the response
}

module.exports.view = view;
