
function Tasks(input, output) {
  this.input = document.querySelector('.js--input')
  this.output = document.querySelector('.js--myTasks')
  
 
  



  this.addText = (event) => {
    event.preventDefault()
    const value = this.input.value
    this.input.value = ''
    const label = this.createTemplate(value)
    this.output.appendChild(label)
   
  }

 
  this.createTemplate = (description) => {
    const div = document.createElement('div')
    const input = document.createElement('input')
    input.setAttribute('type','checkbox')
    const text = document.createElement('div')
    const button =  document.createElement('button')
    text.innerText = description
    button.innerText = 'Удалить'
    button.addEventListener('click',function(){
      div.remove()
    })
    input.addEventListener('change',function(){
      /* if(input.checked){
        text.classList.add('done')
      } else {
          text.classList.remove('done')
      } */
      text.style.textDecoration = input.checked ? 'line-through' : 'none'

    })
    div.appendChild(input)
    div.appendChild(text)
    div.appendChild(button)
    return div
    
  }
  
  

}


const tasks = new Tasks('.js--input', '.js--myTasks')
document.querySelector('.js--form').addEventListener('submit', tasks.addText)











