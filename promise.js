let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("The thing was successful");
  }, 2000);
});

myFirstPromise.then((ya) => {
 console.log("Yeah " + ya);
             });
