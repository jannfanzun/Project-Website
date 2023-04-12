
// Beispiel von meinem Projekt

const ErrorTextPopupFirstname = document.getElementById('firstname-regexmessage');
const ErrorTextPopupLastname = document.getElementById('lastname-regexmessage');
const ErrorText = document.createTextNode("Only A-Z");


function initValidation() {

  formFirstnameInput.addEventListener('change', inputChangeListener);
  formLastnameInput.addEventListener('change', inputChangeListener);
}

function inputChangeListener(event) {
  const submitButton = document.getElementById('form_save')
  isDisabled = false
  const regex = /^[a-zA-Z]*$/;
  const regexvalidator = regex.exec(event.target.value)
  if( regexvalidator === null){
    event.target.classList.add ('input-field-wrong')
    console.log('1b')
  }else {
    event.target.classList.remove('input-field-wrong')
    console.log('1a')
  }


  const firstNameElementInvalid = formFirstnameInput.classList.value === 'input-field input-field-wrong';
  const lastNameElementInvalid = formLastnameInput.classList.value === 'input-field input-field-wrong';
  if(firstNameElementInvalid || lastNameElementInvalid){
    submitButton.disabled = !isDisabled
    ErrorTextPopupLastname.appendChild(ErrorText);
  }
  else {
    submitButton.disabled = isDisabled
    ErrorTextPopupLastname.removeChild(ErrorText);
  }

  // 1. Check if input field is valid
  // 1.a. If valid remove class "error"
  // 1.b. If invalid add class "error"

  // 2. Check if form is valid (has one of each input fields an "error" class
  // 2.a. If valid remove disabled attribute
  // 2.b. If invalid add disabled attribute
}

initValidation();
