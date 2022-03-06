
async function getExt(url, name) {
  try {
    let req = await fetch(url);
    let res = await req.status;
    if (res == 200) {
      mainset[name] = 1;
      document.getElementById("extensionsDiv").innerHTML += name + ", ";
      console.log(res);
      totalExtensions++;
      return;
    }
  } catch (e) {
    console.log(e);
  }
  totalExtensions++;
  document.getElementById("failed").innerHTML += name + ", ";

}

var leakInstalledExtensions = async function() {
    extensions.forEach(function(network) {
        getExt("chrome-extension://"+ network.id + network.resource, network.name);
    });
};
