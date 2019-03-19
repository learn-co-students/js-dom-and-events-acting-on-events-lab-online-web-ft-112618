function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');

function retrieveEmployeeInformation() {
 return input.value;
}

function addNewElementAsLi() {
  let newEmployee = retrieveEmployeeInformation();
  return document.querySelector('ul.employee-list').insertAdjacentHTML(
    'beforeend', `<li>${newEmployee}</li>`);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(event){
    addNewElementAsLi();
    input.value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  let clear = document.querySelector("a[href='#']");
  let list = document.querySelector('ul');
  clear.addEventListener('click', function(event){
    list.innerHTML = ''
  });
}
