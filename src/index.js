document.addEventListener("DOMContentLoaded", () => {
  let listForm =  document.querySelector('form')
   listForm.addEventListener('submit', (e) => {
       e.preventDefault()
       toDo(e.target.new.value)
       listForm.reset()
 })
 
 });
 
 // function creating a do list/ delete in the dom and appending them
 function toDo(toDoList){
   let li = document.createElement('li')
   li.textContent = `${toDoList} `
   document.querySelector('#tasks').appendChild(li)
 
   //create the delete element and append it
   let btn = document.createElement('button')
   btn.textContent = ' X'
   li.appendChild(btn)
 
     //delete event
     btn.addEventListener('click', deleteList)
 
 }
 
 function deleteList (e){
   e.target.parentNode.remove()
 }
 