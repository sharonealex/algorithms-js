var carousalEl = document.querySelector(".carousal");
var prevEl = document.querySelector(".prev");
var nextEl = document.querySelector(".next");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/id/1060/536/354?blur=2",
  "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  "https://picsum.photos/id/0/5616/3744",
  "https://picsum.photos/id/10/2500/1667",
];

carousalEl.style.backgroundImage =
  "url('https://picsum.photos/id/1060/536/354?blur=2')";

function load() {
  console.log("loading");
  carousalEl.setAttribute(
    "style",
    "background-image: url('https://picsum.photos/id/1060/536/354?blur=2'); background-position: center; background-repeat: no-repeat; background-size: cover;"
  );
}

var navigate = function (direction) {
  index += direction;
  if (index > images.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = images.length - 1;
  }
  currentImage = images[index];

  carousalEl.setAttribute(
    "style",
    "background-image: url(" +
      images[index] +
      "); background-position: center; background-repeat: no-repeat; background-size: cover;"
  );
};

nextEl.addEventListener("click", function () {
  navigate("1");
});

prevEl.addEventListener("click", function () {
  navigate("-1");
});

load();
