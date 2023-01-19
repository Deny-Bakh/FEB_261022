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
        const phoneValidation = /\D/;
        const result = !phoneValidation.test(phoneValue);
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



// function submitForm() {
//     // Get the first form with the name
//     // Hopefully there is only one, but there are more, select the correct index
//     const frm = document.getElementsById('#form_contact')[0];
//     console.log('here')
//     frm.submit(); // Submit
//     frm.reset();  // Reset
//     return false; // Prevent page refresh
//  }

// document.addEventListener('DOMContentLoaded', function (){
//     const form = document.getElementById('form_contact');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();
//         let error = formValidate(form);
//     }


//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for(let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input);

//             if (input.classList.contains('_email')) {
//                 if(emailTest(input)){
//                     formAddError(input);
//                     error++;
//                     console.log('here')
//                 }
//             }else if(input.getAttribute("type")=== "checkbox" && input.checked === false){
//                 formAddError(input);
//                 error++;
//             } else {
//                 if (input.value === ''){
//                     formAddError(input);
//                     error++;
//                 }
//             }

//         }
//     }
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//     function emailTest(input) {
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }
// })

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const form = document.querySelector("#form_contact");

// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const phoneInput = document.querySelector("#phone_answer_contact");
// const messageInput = document.querySelector("#message_contact");

// nameInput.isValid = () => !!nameInput.value;
// emailInput.isValid = () => isValidEmail(emailInput.value);
// phoneInput.isValid = () => isValidPhone(phoneInput.value);
// messageInput.isValid = () => !!messageInput.value;

// const inputFields = [nameInput, emailInput, phoneInput, messageInput];

// const isValidEmail = (email) => {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   console.log('email value', email);
//   return re.test(String(email).toLowerCase());
// };

// const isValidPhone = (phone) => {
//   const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//   return re.test(String(phone).toLowerCase());
// };

// let shouldValidate = false;
// let isFormValid = false;

// const validateInputs = () => {
//   console.log("we are here");
//   if (!shouldValidate) return;

//   isFormValid = true;
//   inputFields.forEach((input) => {
//     console.log('input', input)
//     input.classList.remove("invalid");
//     // input.classList.add("red");

//     if (!input.isValid()) {
//       input.classList.add("invalid");
//       isFormValid = false;
//     //   input.classList.remove("red");
//     }
//   });
// };

// form.addEventListener('submit', (e) => {
//     console.log('Enter form')
//   e.preventDefault();
//   shouldValidate = true;
//   validateInputs();
//   if (isFormValid) {

//   }
// });

// inputFields.forEach((input) => input.addEventListener("input", validateInputs));

// function myFunction() {
//     document.getElementById("name").placeholder = "color-red";
//   }

//   $('.btn_contact').on('click', function(e) {
//     e.preventDefault();
//     $(this).parent().closest('form').toggleClass('submit-form');
//   });

// var input = document.getElementById("name");
// function validate(){
//   var value = input.value;
//   if(value.length>0){
//     //Valid
//     input.value="";
//     input.classList.add("green");
//   }else{
//     //Invalid
//     input.placeholder="Name";
//     input.classList.add("red");
//   }
// }

// const nameCheck = document.querySelector("#name");
// function validateName(){
//   const value = nameCheck.value;
//   if(value.length<=0){
//     nameCheck.classList.add('red');
//     // messageCheck.classList.add("red");
// }
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const nameCheck = document.querySelector("#name");
// const messageCheck = document.querySelector("#message_contact");
// const phoneCheck = document.querySelector('#phone_answer_contact')
// const emailCheck = document.querySelector('#email');

// function validateForm(){
//   const nameValue = nameCheck.value;
//   const messageValue = messageCheck.value;
//   const phoneValue = phoneCheck.value;
//   const emailValue = emailCheck.value;
//   if(nameValue.length<=0){
//     nameCheck.classList.add('red');
// }
// if(messageValue.length<=0){
//     messageCheck.classList.add('red');
// }
// if(phoneValue.length<=0){
//     phoneCheck.classList.add('red');
// }
// if(emailValue.length<=0){
//     emailCheck.classList.add('red');
// }
// }


// function validationName(){
//     const nameValue = nameCheck.value;
//     if(nameValue.length>0){
//         const nameValidation = /^\D+$/;
//         const result = nameValidation.test(nameValue);
//         if (result === false){

//             nameCheck.classList.add('red_text');
//             nameCheck.classList.add('red');
//             nameCheck.isValid = false
//         }
//         else {
//             nameCheck.classList.remove('red_text');
//             nameCheck.classList.remove('red');
//         }
//         // emailCheck.classList.add('red');
//     }
// }


// function validationMessages(){
//     const messageValue = messageCheck.value;

//     if(messageValue.length>0){
//         messageCheck.classList.remove('red_text');
//         messageCheck.classList.remove('red');
//     }
// }


// function validationPhone(){
//     // emailCheck.classList.remove('red');
//     const phoneValue = phoneCheck.value;
//     if(phoneValue.length>0){
//         const phoneValidation = /\D/;
//         const result = !phoneValidation.test(phoneValue);
//         if (result === false){
//             phoneCheck.classList.add('red_text');
//             phoneCheck.classList.add('red');
//             phoneCheck.isValid = false;
//         }
//         else {
//             phoneCheck.classList.remove('red_text');
//             phoneCheck.classList.remove('red');
//             phoneCheck.isValid = true;
//         }
//         // emailCheck.classList.add('red');
//     }
// }


// function validationEmail(){

//     const emailValue = emailCheck.value;
//     if(emailValue.length>0){
//         const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         const result = emailValidation.test(emailValue);

//         if (result === false){
//             emailCheck.classList.add('red_text');
//             emailCheck.classList.add('red');
//         }
//         else {
//             emailCheck.classList.remove('red_text');
//             emailCheck.classList.remove('red');
//         }

//     }
// }

// // const onSubmit = (e) => {

// //     e.preventDefault;
// //     setTimeout(() => {
// //         console.log('sdfsd')
// //         return true
// //     }, 2000)
// //     return false
// // }

// const btn = document.querySelector('#btn_contact')

// $(document).ready(function() {

//     $(document).on('submit', '#form_contact', function() {
//         console.log('submit')
//     const loader = document.createElement("div")
//     loader.classList.add('loader')

//     btn.textContent=''
//     btn.appendChild(loader)
//     btn.style.boxShadow = 'none';
//     btn.style.backgroundColor = '#EDEDF7'
//     btn.style.color = '#323264'

//     setTimeout(() => {
//         btn.removeChild(loader)
//         btn.textContent='Sent'
//     }, 2000)

//     return false;
//     });
// });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // const messageCheck = document.getElementById("message_contact");
// // function click(){
// //   const value = messageCheck.value;
// //   messageCheck.value="";
// //   messageCheck.placeholder="Message";
// //   messageCheck.classList.add("red");
// //   }

// // const nameCheck = document.getElementById("name");
// // function click(){
// //   const value = nameCheck.value;
// //   nameCheck.value="";
// //   nameCheck.placeholder="Name";
// //   nameCheck.classList.add("red");
// //   }

// //   var input = document.getElementById("name");
// // function validate(){
// //   var value = input.value;
// //   if(value.length>0){
// //     //Valid
// //     input.value="";
// //     input.placeholder="Got it";
// //     clearOtherClasses(input);
// //     input.classList.add("green");
// //   }else{
// //     //Invalid
// //     input.value="Name";
// //     input.placeholder="Name";
// //     // clearOtherClasses(input);
// //     input.classList.add("red");
// //   }
// // }


// document.addEventListener('DOMContentLoaded', function (){
//     const form = document.getElementById('form_contact');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(form);
//     }

//     function formValidate(form) {
//         let error = 0;
//         let formReq=document.querySelectorAll('._req');

//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input);

//             if (input.classList.contains('_email')) {
//                 if (emailTest(input)){
//                     formAddError(input);
//                     error++;
//                 }
//             } else if(input.value === ''){
//                 formAddError(input);
//                 error++;
//             }
//         }

//     }

//     function formAddError(input) {
//         input.parentElement.classlist.add('_error');
//         input.classlist.add('_error');
//     }

//     function formRemoveError(input) {
//         input.parentElement.classlist.remove('_error');
//         input.classlist.remove('_error');
//     }

//     function emailTest(input) {
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.teest(input.value); 
//     }
// })


// let validation = new JustValidate('#form_contact');

// validation
//   .addField('#name', [
//     {
//       rule: 'minLength',
//       value: 3,
//     },
//     {
//       rule: 'maxLength',
//       value: 30,
//     },
//     {
//         rule: 'customRegexp',
//         value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
//     }
//   ])
//   .addField('#email', [
//     {
//       rule: 'required',
//       errorMessage: 'Email is required',
//     },
//     {
//       rule: 'email',
//       errorMessage: 'Email is invalid!',
//     },
//   ]);

// const onSubmit = (e) => {

//     e.preventDefault;
//     setTimeout(() => {
//         console.log('sdfsd')
//         return true
//     }, 2000)
//     return false
// }

// let allFieldIsValid = false;
// const allFieldsValid = validationName() && validationMessages()  && validationPhone() && validationEmail();