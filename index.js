function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  let ulTarget = document.querySelector('ul.employee-list')
  let liNew = document.createElement('li')
  liNew.innerHTML = retrieveEmployeeInformation();
  ulTarget.appendChild(liNew);
}

function addNewLiOnClick() {
  let button = document.querySelector('body > main > form > input[type="submit"]:nth-child(3)')
  button.addEventListener('click', function(e) {
    addNewElementAsLi();
    document.querySelector('body > main > form > input[type="text"]:nth-child(2)').value = ''
  })
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('body > main > a')
  link.addEventListener('click', function(e) {
    document.querySelector('ul.employee-list').innerHTML = ''
  })
}

preventRefreshOnSubmit()
