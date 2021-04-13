// var bgImageArray = ["img/bg1.jpg", "img/bg2.jpg", "img/bg3.jpg"],
var bgImageArray = [
    "img/bg1-1920x1080.jpg",
    "img/bg2-1920x1080.jpg",
    "img/bg3-1920x1080.jpg",
    "img/bg4-1920x1080.jpg",
    "img/bg5-1920x1080.jpg",
    "img/bg6-1920x1080.jpg",
    "img/bg7-1920x1080.jpg",
    "img/bg8-1920x1080.jpg",
    "img/bg9-1920x1080.jpg"
  ],
  // base = "../img/bg",
  secs = 4;
// bgImageArray.forEach(function(img){
//     new Image().src = base + img;
//     // caches images, avoiding white flash between background replacements
// });

function backgroundSequence() {
  window.clearTimeout();
  var k = 0;
  for (i = 0; i < bgImageArray.length; i++) {
    setTimeout(function () {
      //   document.getElementById('animated-bg').style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center";
      document.getElementById("animated-bg").style.background =
        "url(" + bgImageArray[k] + ") no-repeat center center";
      document.getElementById("animated-bg").style.backgroundSize = "cover";
      if (k + 1 === bgImageArray.length) {
        setTimeout(function () {
          backgroundSequence();
        }, secs * 1000);
      } else {
        k++;
      }
    }, secs * 1000 * i);
  }
}
backgroundSequence();
