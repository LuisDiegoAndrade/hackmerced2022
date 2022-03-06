var mainset = {}

var totalSites = 0;
var totalExtensions = 0;

var platforms = [{
    domain: "https://squareup.com",
    redirect: "/login?return_to=%2Ffavicon.ico",
    name: "Square"
}, {
    domain: "https://twitter.com",
    redirect: "/login?redirect_after_login=%2f..%2ffavicon.ico",
    name: "Twitter"
}, {
    domain: "https://www.facebook.com",
    redirect: "/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
    name: "Facebook"
}, {
    domain: "https://accounts.google.com",
    redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
    name: "Gmail"
}, {
    domain: "https://accounts.google.com",
    redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube",
    name: "Youtube"
}, {
    domain: "https://plus.google.com",
    redirect: "/up/accounts/upgrade/?continue=https://plus.google.com/favicon.ico",
    name: "Google Plus"
}, {
    domain: "https://login.skype.com",
    redirect: "/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
    name: "Skype"
}, {
    domain: "https://www.spotify.com",
    redirect: "/en/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
    name: "Spotify"
}, {
    domain: "https://www.reddit.com",
    redirect: "/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
    name: "Reddit"
}, {
    domain: "https://www.tumblr.com",
    redirect: "/login?redirect_to=%2Ffavicon.ico",
    name: "Tumblr"
}, {
    domain: "https://www.expedia.de",
    redirect: "/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
    name: "Expedia"
}, {
    domain: "https://www.dropbox.com",
    redirect: "/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg",
    name: "Dropbox"
}, {
    domain: "https://www.amazon.com",
    redirect: "/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
    name: "Amazon.com"
}, {
    domain: "https://www.pinterest.com",
    redirect: "/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
    name: "Pinterest"
}, {
    domain: "https://de.foursquare.com",
    redirect: "/login?continue=%2Ffavicon.ico",
    name: "Foursquare"
}, {
    domain: "https://store.steampowered.com",
    redirect: "/login/?redir=favicon.ico",
    name: "Steam"
}, {
    domain: "https://www.academia.edu",
    redirect: "/login?cp=/favicon.ico&cs=www",
    name: "Academia.edu"
}, {
    domain: "https://accounts.google.com",
    redirect: "/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico",
    name: "Blogger"
}, {
    domain: "https://github.com",
    redirect: "/login?return_to=%2Ffavicon.ico",
    name: "Github"
}, {
    domain: "https://medium.com",
    redirect: "/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default",
    name: "Medium"
}, {
    domain: "https://news.ycombinator.com",
    redirect: "/login?goto=y18.gif%23",
    name: "Hackernews"
}, {
    domain: "https://courses.edx.org",
    redirect: "/login?next=/sites/default/files/theme/favicon.png",
    name: "EdX"
}, {
    domain: "https://slack.com",
    redirect: "/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23",
    name: "Slack"
}, {
    domain: "https://www.khanacademy.org",
    redirect: "/login?continue=https%3A//www.khanacademy.org/favicon.ico",
    name: "Khan Academy"
}, {
    domain: "https://www.paypal.com",
    redirect: "/signin?returnUri=https://t.paypal.com/ts?v=1.0.0",
    name: "Paypal"
}, {
    domain: "https://500px.com",
    redirect: "/login?r=%2Ffavicon.ico",
    name: "500px"
}, {
    domain: "https://www.airbnb.com",
    redirect: "/redirect_params[action]=favicon.ico&redirect_params[controller]=home",
    name: "Airbnb"
}, {
    domain: "https://disqus.com",
    redirect: "/profile/login/?next=https%3A%2F%2Fdisqus.com%2Ffavicon.ico",
    name: "Disqus"
}, {
    domain: "https://secure.meetup.com",
    redirect: "/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif",
    name: "Meetup"
}, {
    domain: "https://bitbucket.org",
    redirect: "/account/signin/?next=/favicon.ico",
    name: "BitBucket"
}, {
    domain: "https://vk.com",
    redirect: "/login?u=2&to=ZmF2aWNvbi5pY28-",
    name: "VK"
}, {
    domain: "https://www.chegg.com",
    redirect: "/auth?type=simplifiedstudy&action=signup&data=sCS_P_mm&redirect=/favicon.ico",
    name: "Chegg"
}, {
    domain: "https://mail.yandex.com",
    redirect: "/?retpath=https://mail.yandex.com/favicon.ico?666",
    name: "Yandex"
}, {
    domain: "https://www.linkedin.com",
    redirect: "/authwall?originalReferer=&sessionRedirect=https%3A%2F%2Fnl.linkedin.com%2Ffavicon.ico?69",
    name: "LinkedIn"
},{
    domain: "https://www.instagram.com",
    redirect: "/accounts/login/?next=/favicon.ico",
    name: "Instagram"
},{
    domain: "https://signin.ebay.com",
    redirect: "/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2Ffavicon.ico",
    name: "Ebay"
},{
    domain: "https://www.namecheap.com",
    redirect: "/myaccount/login-signup/?ReturnUrl=%2ffavicon.ico",
    name: "Namecheap"
}];



var extensions = [{
  id: "nkbihfbeogaeaoehlefnkodbefgpgknn",
  resource: "/phishing.html",
  name: "Metamask"
}, {
  id: "ghbmnnjooekpmoecnnnilnnbdlolhkhi",
  resource: "/page_embed_script.js",
  name: "Google Docs Offline"
}, {
  id: "dmghijelimhndkbmpgbldicpogfkceaj",
  resource: "/data/content_script/general/dark_37.css",
  name: "Dark Mode"
}, {
  id: "aapbdbdomjkkjkaonfhkkikfgjllcleb",
  resource: "/options.html",
  name: "Google Translate"
}, {
  id: "kbfnbcaeplbcioakkpcpgfkobkghlhen",
  resource: "/src/js/Grammarly-check.js",
  name: "Grammarly"
}, {
  id: "bmnlcjabgnpnenekpadlanbbkooimhnj",
  resource: "/checkoutPaypal/honeySPBContent.js",
  name: "Honey"
}, {
  id: "kgjfgplpablkjnlkjmjdecgdpfankdle",
  resource: "/images/icon.svg",
  name: "Zoom Scheduler"
}, {
  id: "liecbddmkiiihnedobmlmillhodjkdmb",
  resource: "/css/content.css",
  name: "Loom"
}, {
  id: "cbhilkcodigmigfbnphipnnmamjfkipp",
  resource: "/iframe_gMenuPopover.html",
  name: "Calendly: Meeting Scheduling Software"
}, {
  id: "ickdpignpmjcahkjfbmfljhiglmcmchn",
  resource: "/interceptor.js",
  name: "CheaperThere | Cheap Flight & Hotel Deals"
}, {
  id: "pfjdepjjfjjahkjfpkcgfmfhmnakjfba",
  resource: "/js/content.js",
  name: "Detailed SEO Extension"
}, {
  id: "mgijmajocgfcbeboacabfgobmjgjcoja",
  resource: "/content.min.css",
  name: "Google Dictionary (by Google)"
}, {
  id: "chhjbpecpncaggjpdakmflnfcopglcmi",
  resource: "/img/chrome.png",
  name: "Rakuten: Get Cash Back For Shopping"
}, {
  id: "niloccemoadcdkdjlinkgdfekeahmflj",
  resource: "/pages/login.js",
  name: "Save to Pocket"
}, {
  id: "gngocbkfmikdgphklgmmehbjjlfgdemm",
  resource: "/assets/images/bonus_tag.png",
  name: "SwagButton"
}, {
  id: "cmclkkofklkfljcocdinagocijmpgbhab",
  resource: "/background.html",
  name: "Google Input Tools"
}, {
  id: "cfidkbgamfhdgmedldkagjopnbobdmdn",
  resource: "/settings/index.html",
  name: "Social Blade"
}, {
  id: "oiekdmlabennjdpgimlcpmphdjphlcha",
  resource: "/newuser-en.html",
  name: "Tripadvisor Browser Button"
}];

let interval = setInterval(function () {

  if(totalSites == platforms.length && totalExtensions == extensions.length) {
    document.getElementById("canvasLoader").style.display = "none";
    document.getElementById("infoButton").style.display = "inline";
    clearInterval(interval);
    // Profile

    // Google Beta
    if(mainset["Gmail"] == 1 || mainset["Youtube"] == 1 || mainset["Blogger"] == 1 || mainset["Google Plus"] == 1){
      document.getElementById("keywords").style.display = "inline";
      document.getElementById("keywords").textContent = "GOOGLER";
    }

    // Student
    if(mainset["Chegg"] == 1 || mainset["LinkedIn"] == 1 || mainset["Khan Academy"] == 1 || mainset["Dropbox"] == 1){
      document.getElementById("keywords").style.display = "inline";
      document.getElementById("keywords").textContent = "STUDENT";
    }

    // Social Media
    if(mainset["Slack"] == 1 || mainset["Pinterest"] == 1 || mainset["Skype"] == 1 || mainset["Tumblr"] == 1){
      document.getElementById("keywords").style.display = "inline";
      document.getElementById("keywords").textContent = "STUDENT";
    }

  }

}, 3000);

function assessmainset(){

  leakInstalledExtensions();
  leakSocialMediaAccounts(displayResult);

  document.getElementById("canvasLoader").style.display = "inline";
  document.getElementById("runButton").style.display = "none";

  /*if(mainset["Loom"] == 1){
    document.getElementById("keywords").style.display = "block";
    document.getElementById("keywords").innerHTML = "wow screen capture";

  }*/
}

function showInfo() {
  if(document.getElementById("info").style.display == "none"){
    document.getElementById("info").style.display = "inline";
  } else {
    document.getElementById("info").style.display = "none";
  }
}
