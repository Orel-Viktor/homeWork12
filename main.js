import './styles/main.scss'


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


