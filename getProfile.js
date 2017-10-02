//require modules
const https = require('https');
const print = require('./printProfile');

function getProfile(name, callback) {


  const request = https.get(`https://teamtreehouse.com/${name}.json`, (response, callback) => {
    let body = "";
    let count = 0;

    response.on('data', (data) => {
      body += data;
      count += 1;
    })

    response.on('end', (callback) => {
      let jsonData = JSON.parse(body);
      //print.get(profileData.name, profileData.badges[0].id)
      callback();
    })
  })
}



module.exports.get = getProfile;

getProfile('cmcgowan', function(){
  return jsonData;
});
