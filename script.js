"use: strict";

const feedButtons = document.querySelectorAll(".feedback__btn");
const submitBtn = document.querySelector(".feedback__submit-btn");
const result = document.querySelector(".approval__result");

let selectedBtnId;

function changeStyle() {
  feedButtons.forEach((btn) => {
    
    btn.addEventListener("click", () => {
      for(let i = 0; i < feedButtons.length; i++) {
        if (feedButtons[i].classList.contains("style-with-click")) {
          feedButtons[i].classList.remove("style-with-click");
        }
      }
      btn.classList.add("style-with-click");
      findSelectedBtn();
    });
  });
}

changeStyle();

function findSelectedBtn() {
  for(let i = 0; i < feedButtons.length; i++) {
    if (feedButtons[i].classList.contains("style-with-click")) {
      selectedBtnId = feedButtons[i].id;
    }
  }
  return selectedBtnId;
}



function changeResult(){
  submitBtn.addEventListener("click", () => {
    result.textContent = `You are selected ${findSelectedBtn()} out of 5`;
  });
}

changeResult();