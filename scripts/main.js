const mainMenu = document.querySelector(".mainMenuBtn");
const blurBackground = document.querySelector(".blurBackground");
const closeMainMenu = document.querySelector(".closeMainMenu");
const members = document.querySelectorAll(".member");
const memberProf = document.querySelectorAll(".memberProf");
const memberInfo = document.querySelectorAll(".memberInfo");

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
// memberInfo.forEach((memberInfo, index) => {
//   console.log(memberInfo);
//   memberInfo.addEventListener("mousemove", (e) => {
//     let x = e.offsetX;
//     let y = e.pageY - memberInfo.clientHeight / 2;

//     if (x >= memberInfo.clientWidth) {
//       x = memberInfo.clientWidth;
//     } else if (x <= 0) x = 0;
//     if (y >= memberInfo.clientHeight) {
//       y = memberInfo.clientHeight;
//     } else if (y <= 0) y = 0;
//     console.log(index);

//     memberProf[index].style = `left:${x}px;top:${y}px`;
//     console.log(memberProf[index]);
//     memberProf[index].classList.add("active");
//   });
// });
// members.forEach((item, index) => {
//   item.addEventListener("mouseleave", () => {
//     console.log(index);
//     memberProf[index].classList.remove("active");
//   });
// });
