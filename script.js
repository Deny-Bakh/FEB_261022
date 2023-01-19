console.log(window.location)

$(document).ready(function() {
    $('.toggle_menu').click(function(event){
        $('body').toggleClass('lock');
    })
})

const contactPage = 'contact.html';
if (window.location.href.includes(contactPage)){
    const nameCheck = document.querySelector("#name");
const messageCheck = document.querySelector("#message_contact");
const phoneCheck = document.querySelector('#phone_answer_contact')
const emailCheck = document.querySelector('#email');

function validateForm(){
  const nameValue = nameCheck.value;
  const messageValue = messageCheck.value;
  const phoneValue = phoneCheck.value;
  const emailValue = emailCheck.value;
  if(nameValue.length<=0){
    nameCheck.classList.add('red');
}
if(messageValue.length<=0){
    messageCheck.classList.add('red');
}
if(phoneValue.length<=0){
    phoneCheck.classList.add('red');
}
if(emailValue.length<=0){
    emailCheck.classList.add('red');
}
}

function validationName(){
    const nameValue = nameCheck.value;
    if(nameValue.length>0){
        const nameValidation = /^[A-Z][a-zA-Z]+$/;
        const result = nameValidation.test(nameValue);
        if (result === false){
            nameCheck.classList.add('red_text');
            nameCheck.classList.add('red');
        }
        else {
            nameCheck.classList.remove('red_text');
            nameCheck.classList.remove('red');
        }
    }
}

function validationMessages(){
    const messageValue = messageCheck.value;
    if(messageValue.length>0){
        messageCheck.classList.remove('red_text');
        messageCheck.classList.remove('red');
    }
}

function validationPhone(){
    const phoneValue = phoneCheck.value;
    if(phoneValue.length>0){
        const phoneValidation = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        const result = phoneValidation.test(phoneValue);
        if (result === false){
            phoneCheck.classList.add('red_text');
            phoneCheck.classList.add('red');
        }
        else {
            phoneCheck.classList.remove('red_text');
            phoneCheck.classList.remove('red');
        }
    }
}

function validationEmail(){
    const emailValue = emailCheck.value;
    if(emailValue.length>0){
        const emailValidation = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const result = emailValidation.test(emailValue);

        if (result === false){
            emailCheck.classList.add('red_text');
            emailCheck.classList.add('red');
        }
        else {
            emailCheck.classList.remove('red_text');
            emailCheck.classList.remove('red');
        }
    }
}


const forname = document.querySelector('#name');

forname.addEventListener('invalid', function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Please tell us your name.');
  }
})

forname.addEventListener('change', function (event) {
  event.target.setCustomValidity('');
})

const formessage = document.querySelector('#message_contact');

formessage.addEventListener('invalid', function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Write more please.');
  }
})

formessage.addEventListener('change', function (event) {
  event.target.setCustomValidity('');
})

const forphone = document.querySelector('#phone_answer_contact');

forphone.addEventListener('invalid', function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Please tell us your phone number.');
  }
})

forphone.addEventListener('change', function (event) {
  event.target.setCustomValidity('');
})

const foremail = document.querySelector('#email');

foremail.addEventListener('invalid', function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Please tell us your email.');
  }
})

foremail.addEventListener('change', function (event) {
  event.target.setCustomValidity('');
})



const btn = document.querySelector('#btn_contact')

$(document).ready(function() {
    $(document).on('submit', '#form_contact', function(e) {
        e.preventDefault;
        console.log('submit')
    const loader = document.createElement("div")
    loader.classList.add('loader')

    btn.textContent=''
    btn.appendChild(loader)
    btn.style.boxShadow = 'none';
    btn.style.backgroundColor = '#EDEDF7'
    btn.style.color = '#323264'

    setTimeout(() => {
        btn.removeChild(loader)
        btn.textContent='Sent'
        let inputs = document.querySelectorAll("input");
        inputs.forEach((input) => (input.value = ""));
        let textareas = document.querySelectorAll("textarea");
        textareas.forEach((textarea) => (textarea.value = ""));
    }, 2000)
    setTimeout(() => {
        window.location.reload();
    }, 4000)
    return false;
    });
});

} else {
    console.log('here than')
}