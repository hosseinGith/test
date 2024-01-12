const mainMenu = document.querySelector(".mainMenuBtn");
const blurBackground = document.querySelector(".blurBackground");
const closeMainMenu = document.querySelector(".closeMainMenu");
const members = document.querySelectorAll(".member");
const memberProf = document.querySelectorAll(".memberProf");
const membersImg = document.querySelectorAll(".memberImg");

const memberInfoElements = () => {
  let div = document.createElement("div");
};
let isOver = false;
mainMenu.addEventListener("click", () => {
  mainMenu.parentElement.classList.toggle("active");
});

function removeClassWithAnimation([...arr]) {
  arr.forEach((element) => {
    element.addEventListener("click", () => {
      mainMenu.parentElement.classList.remove("active");
    });
  });
}
removeClassWithAnimation([blurBackground, closeMainMenu]);
membersImg.forEach((memberImg, index) => {
  console.log(memberImg);
  memberImg.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.pageY - memberImg.clientHeight / 2;

    if (x >= memberImg.clientWidth) {
      x = memberImg.clientWidth;
    } else if (x <= 0) x = 0;
    if (y >= memberImg.clientHeight) {
      y = memberImg.clientHeight;
    } else if (y <= 0) y = 0;
    console.log(index);

    memberProf[index].style = `left:${x}px;top:${y}px`;
    console.log(memberProf[index]);
    memberProf[index].classList.add("active");
  });
});
members.forEach((item, index) => {
  item.addEventListener("mouseleave", () => {
    console.log(index);
    memberProf[index].classList.remove("active");
  });
});
