


// Задание №1
// 1) Самостоятельно реализовать пример с урока (todo list).
// 2) Добавить метод удаления todo айтема


function Tasks(input, toDoContent) {
  this.input = document.querySelector('.js--form__input')
  this.toDoContent = document.querySelector('.js--toDoContent')

  this.addText = (event) => {
    event.preventDefault()
    const value = this.input.value
    this.input.value = ""
    const items = this.creatTemplate(value)
    this.toDoContent.insertAdjacentHTML ('beforeEnd', items)
  }
  this.creatTemplate = (description) => {
    return ( 
      `<label class="toDoItems">
    <input type="checkbox" class="js--complete" />
    <div class="toDodescr">${description}</div>
    <button class="js--delete">Удалить</button>
  </label>`
    )
  }


}


const tasks = new Tasks('.js--form__input', 'js--toDoContent')
document.querySelector('.js--form').addEventListener('submit', tasks.addText)