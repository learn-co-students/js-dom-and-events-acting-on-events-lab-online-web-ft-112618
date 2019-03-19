function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value
}

function addNewElementAsLi(){
  let employeeName = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}<li>` )
}

function addNewLiOnClick(){
   document.querySelector('.employee-list').addEventListener('click', addNewElementAsLi())
   document.querySelector('input').value = ""
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('.employee-list').addEventListener('click', deleteEmployeeList())
}

function deleteEmployeeList(){
let link = document.querySelector('a')
let ul = document.querySelector('ul')

link.addEventListener('click', function(){
  ul.innerHTML = ''
 })
}
