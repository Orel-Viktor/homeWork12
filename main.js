
function Tasks(input, output) {
  this.input = document.querySelector('.js--input')
  this.output = document.querySelector('.js--myTasks')
  const labelDescription = document.querySelector('.js--label-description')
 
  



  this.addText = (event) => {
    event.preventDefault()
    const value = this.input.value
    this.input.value = ''
    const items = this.createTemplate(value)
    this.output.insertAdjacentHTML('beforeend', items)
    document.querySelector('.js--delete').addEventListener('click', (e)=>{
      this.output.removeChild(labelDescription)
    })
  }

 
  this.createTemplate = (description) => {
    return (
      ` <label class ="js--label-description}" >
        <input type="checkbox" class ='js--complete'>
        <div class="description">${description}</div>
        <button  class ="js--delete">Удалить</button>
        </label>  
  `
    )
  }
  
  

}


const tasks = new Tasks('.js--input', '.js--myTasks')
document.querySelector('.js--form').addEventListener('submit', tasks.addText)











