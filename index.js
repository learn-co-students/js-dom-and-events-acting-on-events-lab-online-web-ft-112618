function preventRefreshOnSubmit() {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()
  })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value;
}

function addNewElementAsLi(){
  let name = retrieveEmployeeInformation();
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${name}</li>`)
}

function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(event){
    addNewElementAsLi();
    reset();
  });
}

function reset(){
  document.querySelector('input').value='';
}

function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a');
  let ul = document.querySelector('ul');
  link.addEventListener('click', function(event){
    ul.innerHTML='';
  });
}