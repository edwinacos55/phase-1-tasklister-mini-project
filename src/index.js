document.addEventListener("DOMContentLoaded", () => {
 let form= document.querySelector("form")
 form.addEventListener("submit", (e) => {
  e.preventDefault() 
  addTodo(e.target.new_task_description.value)

  form.reset();

 })


 function addTodo (todo) {
  let li= document.createElement('li')
  let btn= document.createElement('button')
  btn.addEventListener("click", handleDelete)
  btn.textContent= 'X';
  li.textContent= todo + " ";
  li.appendChild(btn);
 document.querySelector('#tasks').appendChild(li)

 }

function handleDelete(e) {
e.target.parentNode.remove();
}
 
});
