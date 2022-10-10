"use strict";

import "./styles/main.scss";

function Tasks(input, output) {
  this.input = document.querySelector(".js--input");
  this.output = document.querySelector(".js--myTasks");

  this.addText = (event) => {
    event.preventDefault();
    const value = this.input.value;
    this.input.value = "";
    const myText = this.createTemplate(value);
    this.output.appendChild(myText);
  };

  this.createTemplate = (description) => {
    const div = document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    const text = document.createElement("div");
    const button = document.createElement("button");
    text.innerText = description;
    button.innerText = "Удалить";
    button.addEventListener("click", function () {
      div.remove();
    });
    input.addEventListener("change", function () {
      text.style.textDecoration = input.checked ? "line-through" : "none";
    });
    div.appendChild(input);
    div.appendChild(text);
    div.appendChild(button);
    return div;
  };
}

const tasks = new Tasks(".js--input", ".js--myTasks");
document.querySelector(".js--form").addEventListener("submit", tasks.addText);

/* 2) Блок над формой (карточка) нужно сверстать через HTML. 
При изменении полей формы нужно подставлять значения в нужные поля над формой (в саму карточку).

3) При отправке формы, выводить её данные в консоль
При желании, вы можете сделать форму и карточку проще. Например, опустить часть стилей 
и сделать карточку просто в виде набора span тегов, в которые потом будет вставляться результат ввода в форму. */

const formCard = document.querySelector(".js--card-form");
const inputCardNumber = document.querySelector(".js--input-card-number");
const inputCardName = document.querySelector(".js--input-card-name");
const inputCardMonth = document.querySelector(".js--card-month");
const inputCardYear = document.querySelector(".js--card-year");
const buttonCard = document.querySelector(".js--card-button");
const inputCardCw = document.querySelector(".js--input-card-cw");

formCard.addEventListener("submit", (event) => {
  event.preventDefault();
  getCardData();
});

function getCardData() {
  console.log({
    number: inputCardNumber.value,
    userName: inputCardName.value,
    month: inputCardMonth.value,
    year: inputCardYear.value,
    cw: inputCardCw.value,
  });
}
const cardNumberText = document.querySelector(".js--card-number-text");
const cardNameText = document.querySelector(".js--card-name-text");
const cardMonthText = document.querySelector(".js--card-month-text");
const cardYearText = document.querySelector(".js--card-year-text");

inputCardNumber.addEventListener("input", function () {
  let value = inputCardNumber.value;

  let reg = /[A-Za-zA-яА-ЯЁё]/g;
  inputCardNumber.value = value.replace(reg, "");
  if (value.match(reg)) {
    value = inputCardNumber.value.replace(reg, "");
    inputCardNumber.classList.add("is-invalid");
    inputCardNumber.classList.remove("is-valid");
  } else {
    inputCardNumber.classList.remove("is-invalid");
    inputCardNumber.classList.add("is-valid");
  }
 
});

inputCardNumber.addEventListener("input", function () {
  let value = inputCardNumber.value;
  cardNumberText.innerText = value;
  if (value == 0) {
    cardNumberText.innerText = "#### #### #### ####";
    inputCardNumber.classList.remove("is-valid");
  }
});

inputCardName.addEventListener("input", function () {
  let value = inputCardName.value;
  cardNameText.innerText = value;
  cardNameText.style.textTransform = "uppercase";
  if (value == 0) {
    cardNameText.style.textTransform = "none";
    cardNameText.innerText = "Your Name";
  }
});

inputCardMonth.addEventListener("change", function () {
  let value = inputCardMonth.value;
  cardMonthText.innerText = value;
  if (value == 0) {
    cardMonthText.innerText = "MM";
  }
});

inputCardYear.addEventListener("change", function () {
  let value = inputCardYear.value;
  cardYearText.innerText = value;
  if (value == 0) {
    cardYearText.innerText = "YY";
  }
  console.log(value);
});
