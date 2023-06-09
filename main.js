const input = document.querySelector("#input")
const todoBtn = document.querySelector(".todo__button")
const empty = document.querySelector(".empty")
const ul = document.querySelector(".todo")
const todos = document.querySelector('.todos')

//button event
todoBtn.addEventListener("click", (e) =>{
   e.preventDefault()

   const text =  input.value

   if(text !== ''){

      const li = document.createElement('li') 
      const p = document.createElement('p') 
      p.textContent = text

      
      ul.appendChild(li)
      li.appendChild(p)
      li.appendChild(addDeleteBtn())
      empty.style.display = "none"
      input.value = ''
   }
   
})

function addDeleteBtn(){
   const deleteBtn = document.createElement('button')
   deleteBtn.className = "btn-delete"
   deleteBtn.textContent = "X"

   deleteBtn.addEventListener("click", (e) =>{
      const item = e.target.parentElement
      ul.removeChild(item)

      const items = document.querySelectorAll('li')

      if(items.length === 0){
         empty.style.display = "block"
      }
   })
   return deleteBtn
}