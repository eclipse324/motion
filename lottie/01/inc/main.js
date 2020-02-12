var home = document.getElementById("home"),
    my = document.getElementById("my"),
    chat = document.getElementById("chat"),
    menu = document.getElementById("menu");


var animation01 = bodymovin.loadAnimation({
  container: document.getElementById("home"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "./json/home.json"
});

var animation02 = bodymovin.loadAnimation({
  container: document.getElementById("my"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "./json/my.json"
});


var animation03 = bodymovin.loadAnimation({
  container: document.getElementById("chat"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "./json/chat.json"
});

var animation04 = bodymovin.loadAnimation({
  container: document.getElementById("menu"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "./json/menu.json"
});

home.addEventListener("click", rePlay01);
my.addEventListener("click", rePlay02);
chat.addEventListener("click", rePlay03);
menu.addEventListener("click", rePlay04);

function rePlay01 () {
  animation01.playSegments([40, 60], true)  
}

function rePlay02 () {
  animation02.playSegments([40, 60], true)
}

function rePlay03 () {
  animation03.playSegments([38, 60], true)
}

function rePlay04 () {
  animation04.playSegments([40, 60], true)
}