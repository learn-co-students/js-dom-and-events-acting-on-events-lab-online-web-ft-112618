function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  let input = retrieveEmployeeInformation()
  let li = document.createElement('li')
  li.innerHTML = input
  return document.querySelector(".employee-list").appendChild(li)
}

// function addNewElementAsLi(){
//   let employeeName = retrieveEmployeeInformation()
//   document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
// }



function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', function(event){
    addNewElementAsLi()
    document.querySelector('input').value = ""
  })
}


function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', (e) => {
    document.querySelector(".employee-list").innerHTML = ''
  })
}
