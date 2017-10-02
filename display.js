const print = require('./printProfile.js');
const profile = require('./getProfile.js');

let myPromise = new Promise((resolve, reject) => {
  resolve(profile.get('cmcgowan'));
})

myPromise.then((resolve) => {
  console.log(resolve);
}).catch((error)=> {
  console.error(error);
})
