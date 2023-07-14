//const divs = document.querySelectorAll(
//  ".st_light, .st_people, .st_clean, .pl_clean, .pl_station, .pl_toilet"
//);
//
//const pinDiv = document.querySelector(".pin");
//pinDiv.style.position = "relative";
//
//let scoreImgs = [];
//
//divs.forEach((div) => {
//  const scoreImg = document.createElement("img");
//  scoreImg.classList.add("score");
//  scoreImgs.push(scoreImg);
//  pinDiv.appendChild(scoreImg);
//});
//
//divs.forEach((div, index) => {
//  div.addEventListener("click", function () {
//    const isActive = this.classList.contains("active");
//
//    divs.forEach((otherDiv) => {
//      otherDiv.style.backgroundColor = "";
//      otherDiv.querySelector("p").style.color = "";
//      otherDiv.classList.remove("active");
//      resetImage(otherDiv.querySelector("img"));
//    });
//
//    if (!isActive) {
//      this.style.backgroundColor = "#8000FF";
//      this.querySelector("p").style.color = "#ffffff";
//      this.classList.add("active");
//      changeImage(this.querySelector("img"));
//
//      const score = parseFloat(this.querySelector("p").textContent);
//
//      //   const score_string = "{{review_list.light}}";
//      //   const score = JSON.parse(score_string);
//
//      //   console.log(score);
//
//      let imagePath = "../images/st_light";
//      if (div.classList.contains("st_people")) {
//        imagePath = "../images/st_people";
//      } else if (div.classList.contains("st_clean")) {
//        imagePath = "../images/st_clean";
//      } else if (div.classList.contains("pl_clean")) {
//        imagePath = "../images/pl_clean";
//      } else if (div.classList.contains("pl_station")) {
//        imagePath = "../images/pl_station";
//      } else if (div.classList.contains("pl_toilet")) {
//        imagePath = "../images/pl_toilet";
//      }
//
//      if (score >= 4.1) {
//        scoreImgs.forEach((scoreImg) => {
//          scoreImg.src = imagePath + " 5.png";
//        });
//      } else if (score >= 3.1) {
//        scoreImgs.forEach((scoreImg) => {
//          scoreImg.src = imagePath + " 4.png";
//        });
//      } else if (score >= 2.1) {
//        scoreImgs.forEach((scoreImg) => {
//          scoreImg.src = imagePath + " 3.png";
//        });
//      } else if (score >= 1.1) {
//        scoreImgs.forEach((scoreImg) => {
//          scoreImg.src = imagePath + " 2.png";
//        });
//      } else if (score >= 0.1) {
//        scoreImgs.forEach((scoreImg) => {
//          scoreImg.src = imagePath + " 1.png";
//        });
//      } else {
//        scoreImgs.forEach((scoreImg) => {
//          scoreImg.src = imagePath + " 1.png";
//        });
//      }
//
//      const coordinate1 = [
//        /*{ x: 63.66, y: 86.21, name: "st A" },*/
//        /*{ x: 96.23, y: 60.53, name: "st B" },*/
//        { x: 128.37, y: 56.36, name: "st C" },
//        { x: 149.25, y: 94.97, name: "st D" },
//        { x: 162.19, y: 43.42, name: "st E" },
//        { x: 164.69, y: 145.28, name: "st F" },
//        { x: 195.58, y: 84.33, name: "st G" },
//        { x: 210.82, y: 122.94, name: "st H" },
//        { x: 209.99, y: 60.12, name: "st I" },
//        { x: 279.5, y: 107.29, name: "st J" },
//      ];
//      const coordinate2 = [
//        /* { x: 81.2, y: 43.63, name: "pl A" },*/
//        /*{ x: 107.08, y: 104.99, name: "pl B" },*/
//        { x: 132.76, y: 27.34, name: "pl C" },
//        { x: 139.85, y: 142.15, name: "pl D" },
//        { x: 179.72, y: 108.96, name: "pl E" },
//        { x: 185.56, y: 30.06, name: "pl F" },
//        { x: 193.29, y: 122.11, name: "pl G" },
//        { x: 204.98, y: 10.02, name: "pl H" },
//        { x: 209.99, y: 60.12, name: "pl I" },
//        { x: 293.27, y: 56.15, name: "pl J" },
//      ];
//      if (
//        div.classList.contains("st_light") ||
//        div.classList.contains("st_people") ||
//        div.classList.contains("st_clean")
//      ) {
//        coordinate1.forEach((position, index) => {
//          const scaledX = position.x * 4.79078366;
//          const scaledY = position.y * 4.79078366;
//          if (index < scoreImgs.length) {
//            setScoreImagePosition({ x: scaledX, y: scaledY }, scoreImgs[index]);
//          }
//        });
//      } else if (
//        div.classList.contains("pl_clean") ||
//        div.classList.contains("pl_station") ||
//        div.classList.contains("pl_toilet")
//      ) {
//        coordinate2.forEach((position, index) => {
//          const scaledX = position.x * 4.79078366;
//          const scaledY = position.y * 4.79078366;
//          if (index < scoreImgs.length) {
//            setScoreImagePosition({ x: scaledX, y: scaledY }, scoreImgs[index]);
//          }
//        });
//      }
//    } else {
//      scoreImgs.forEach((scoreImg) => {
//        scoreImg.src = "";
//      });
//    }
//  });
//
//  // Trigger click event on the first element
//  if (index === 0) {
//    div.click();
//  }
//});
//
//function changeImage(img) {
//  const imgSrc = img.src;
//  const newImgSrc = imgSrc.replace("_black.svg", "_white.svg");
//  img.src = newImgSrc;
//}
//
//function resetImage(img) {
//  const imgSrc = img.src;
//  const newImgSrc = imgSrc.replace("_white.svg", "_black.svg");
//  img.src = newImgSrc;
//}
//
//function setScoreImagePosition(position, scoreImg) {
//  scoreImg.style.position = "absolute";
//  scoreImg.style.left = `${position.x}px`;
//  scoreImg.style.top = `${position.y}px`;
//  scoreImg.style.zIndex = "-3"; // scoreImg가 위로 나타나도록 z-index 설정
//}
//
//const locationDiv = document.querySelector(".location");
//const nowElement = document.getElementById("now");
//
//locationDiv.addEventListener("click", function () {
//  nowElement.scrollIntoView({ behavior: "smooth" });
//});
//
////로그아웃 버튼 누르면 이동
//const logoutBtn = document.querySelector(".logout");
//
//logoutBtn.addEventListener("click", handleLogout);
//
//function handleLogout() {
//  window.location.href = "login.html";
//}
//
////검색창 누르면 검색페이지로 이동
//const searchContainer = document.querySelector(".search-container");
//
//searchContainer.addEventListener("click", handleSearch);
//
//function handleSearch() {
//  window.location.href = "search.html";
//}
//
//const pinBtn = document.querySelector(".pin");
//
//pinBtn.addEventListener("click", handlePin);
//
//function handlePin() {
//  window.location.href = "/select/2";
//}


const divs = document.querySelectorAll(
    ".st_light, .st_people, .st_clean, .pl_clean, .pl_station, .pl_toilet"
);

const stImages = document.querySelectorAll(
    ".pin-st-a, .pin-st-b, .pin-st-c, .pin-st-d, .pin-st-e, .pin-st-f, .pin-st-g, .pin-st-h, .pin-st-i, .pin-st-j"
);

const stPeopleImageSources = [
    "./image/st_people 5.png",
    "./image/st_people 4.png",
    "./image/st_people 3.png",
    "./image/st_people 2.png",
    "./image/st_people 5.png",
    "./image/st_people 5.png",
    "./image/st_people 2.png",
    "./image/st_people 5.png",
    "./image/st_people 3.png",
    "./image/st_people 5.png",
];

const stCleanImageSources = [
    "./image/st_clean 5.png",
    "./image/st_clean 4.png",
    "./image/st_clean 3.png",
    "./image/st_clean 2.png",
    "./image/st_clean 5.png",
    "./image/st_clean 5.png",
    "./image/st_clean 2.png",
    "./image/st_clean 5.png",
    "./image/st_clean 3.png",
    "./image/st_clean 5.png",
];

divs.forEach((div, index) => {
    div.addEventListener("click", function () {
        const isActive = this.classList.contains("active");

        divs.forEach((otherDiv) => {
            otherDiv.style.backgroundColor = "";
            otherDiv.querySelector("p").style.color = "";
            otherDiv.classList.remove("active");
            resetImage(otherDiv.querySelector("img"));
        });

        if (!isActive) {
            this.style.backgroundColor = "#8000FF";
            this.querySelector("p").style.color = "#ffffff";
            this.classList.add("active");

            if (this.classList.contains("st_light")) {
                resetImage(stImages);
            } else if (this.classList.contains("st_people")) {
                changeImage(stImages, stPeopleImageSources);
            } else if (this.classList.contains("st_clean")) {
                changeImage(stImages, stCleanImageSources);
            }
        } else {
            resetImage(stImages);
        }
    });

    if (index === 0) {
        div.click();
    }
});

function changeImage(images, imageSources) {
    images.forEach((image, index) => {
        const imgSrc = image.src;
        const newImgSrc = imgSrc.replace("_black.svg", "_white.svg");
        const newImgSrc2 = imageSources[index];
        if (imgSrc !== newImgSrc && imgSrc !== newImgSrc2) {
            image.src = newImgSrc;
        }
    });
}

function resetImage(images) {
    Array.from(images).forEach((image) => {
        const imgSrc = image.src;
        const newImgSrc = imgSrc.replace("_white.svg", "_black.svg");
        if (imgSrc !== newImgSrc) {
            image.src = newImgSrc;
        }
    });
}