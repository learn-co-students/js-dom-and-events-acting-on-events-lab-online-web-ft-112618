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
  let node = document.createElement('li')
  let textnode = document.createTextNode(retrieveEmployeeInformation())
  node.appendChild(textnode)
  document.querySelector('.employee-list').appendChild(node.appendChild(textnode))
}

function addNewLiOnClick() {
  document.querySelector('form').addEventListener('click', function(event){
    addNewElementAsLi()
    document.querySelector('input').value = ''
  })
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event){
    document.querySelector('.employee-list').textContent = ''
  })
}
