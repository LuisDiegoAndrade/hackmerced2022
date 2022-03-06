function displayResult3(name, loggedIn, timeTaken) {
    console.log(timeTaken);
    if (loggedIn && timeTaken < 0.5) {
        //isFirstLoggedIn = false;
        document.getElementById("timedCache").innerHTML += " " + name + ", time taken: " + timeTaken + " ";
    }else{
      document.getElementById("failed").innerHTML += " " + name + ", time taken: " + timeTaken + " ";
    }
}
function displayResult2(url, name) {
  var timeTaken = window.performance.getEntriesByName(url)[0].transferSize;
  console.log(timeTaken);
  if (timeTaken == 0) {
      //isFirstLoggedIn = false;
      document.getElementById("timedCache").innerHTML += " " + name + ", time taken: " + timeTaken + " ";
  }else{
    document.getElementById("failed").innerHTML += " " + name + ", time taken: " + timeTaken + " ";
  }
}

var getCache = function(callback) {
  var icons = [{
    url: "https://www.dropbox.com/static/images/favicon.ico",
    name: "Drop Box"
  },{
    url:"https://www.youtube.com/favicon.ico",
    name:"Youtube"
  },{
    url: "https://mail.google.com/favicon.ico",
    name: "Gmail"
  }, {
    url: "https://facebook.com/favicon.ico",
    name: "Facebook"
  },{
    url: "https://github.com/login?return_to=%2Ffavicon.ico",
    name: "Github"
  },{
    url: "https://medium.com/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default",
    name: "Github"
  }];


    icons.forEach(function(icon) {
        var img = document.createElement('img');
        img.src = icon.url;
        START = Math.floor(Date.now()/1000);
        img.onload = function() {
            END = Math.floor(Date.now()/1000);
            callback(icon.url, icon.name);
        };
        img.onerror = function() {
            callback(icon.url, icon.name);
        };
    });
};

var START;
var END;
getCache(displayResult2);
