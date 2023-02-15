console.log(window.location)

$(document).ready(function() {
    $('.toggle_menu').click(function(event){
        $('body').toggleClass('lock');
    })
})

const mainPage = 'index.html';
if (window.location.href.includes(mainPage)){
  function scrollToElem(elem) {
    event.preventDefault()
    const target = document.querySelector(elem.hash)
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    })
  }

  $('#firstSlider').slick({
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    arrows:false,
    pauseOnHover:true,
    pauseOnDotsHover:true,
  });
  

  function setupNavtabs(navtab) {
    var tabs = navtab.querySelectorAll("*[data-target]");
    for (var i=0; i < tabs.length; i++) {
      var tab = tabs[i];
  
      tab.addEventListener("click", function(e) {
        var id = e.target.dataset.target;
        var pane = document.getElementById(id);
        pane.classList.add("active");
  
        // remove .active class of all sibling elements
        var el = pane.nextElementSibling;
        while (el) {
          el.classList.remove("active");
          el = el.nextElementSibling;
        }
        el = pane.previousElementSibling;
        while (el) {
          el.classList.remove("active");
          el = el.previousElementSibling;
        }
      });
    }
  }
  
  var navtabs = document.querySelectorAll(".nav-tabs");
  for (var i=0; i < navtabs.length; i++) {
    setupNavtabs(navtabs[i]);
  }

  const navBar = document.querySelector('.nav-tabs').querySelectorAll("a");
  navBar.forEach(element => {
    element.addEventListener("click", function(){
      navBar.forEach(nav=>nav.classList.remove ("active-bg"))

      this.classList.add("active-bg");
    })
  })

};

const aboutUs = 'about_us.html';
if (window.location.href.includes(aboutUs)){
  function setupNavtabs(navtab) {
    var tabs = navtab.querySelectorAll("*[data-target]");
    for (var i=0; i < tabs.length; i++) {
      var tab = tabs[i];
  
      tab.addEventListener("click", function(e) {
        var id = e.target.dataset.target;
        var pane = document.getElementById(id);
        pane.classList.add("active_list");
  
        // remove .active class of all sibling elements
        var el = pane.nextElementSibling;
        while (el) {
          el.classList.remove("active_list");
          el = el.nextElementSibling;
        }
        el = pane.previousElementSibling;
        while (el) {
          el.classList.remove("active_list");
          el = el.previousElementSibling;
        }
      });
    }
  }
  
  var navtabs = document.querySelectorAll(".nav-tabs");
  for (var i=0; i < navtabs.length; i++) {
    setupNavtabs(navtabs[i]);
  }

  const navBar = document.querySelector('.nav-tabs').querySelectorAll("li");
  navBar.forEach(element => {
    element.addEventListener("click", function(){
      navBar.forEach(nav=>nav.classList.remove ("active_dot"))

      this.classList.add("active_dot");
      
    })
  })

  var navtabsSmall = document.querySelectorAll(".nav-tabs_small");
  for (var i=0; i < navtabsSmall.length; i++) {
    setupNavtabs(navtabsSmall[i]);
  }

  const navBarSmall = document.querySelector('.nav-tabs_small').querySelectorAll("li");
  navBarSmall.forEach(element => {
    element.addEventListener("click", function(){
      navBarSmall.forEach(nav=>nav.classList.remove ("active_dot"))

      this.classList.add("active_dot");
      
    })
  })
};

const services = 'sub_services_';
if (window,location.href.includes(services)){
  const button = document.querySelector('#ecommerceButton')
  const popup = document.querySelector('.popup_wrapper')
  const close = document.querySelector('span.close')

button.addEventListener('click', clickHandler)
popup.addEventListener('click', closeHandler)

function clickHandler() {
  popup.classList.add('active_click')
}

function closeHandler(event) {
  if (event.target === popup || event.target === close ) {
    popup.classList.remove('active_click')
    $('body').removeClass('lock');
  }
}

$(document).ready(function() {
  $('#ecommerceButton').click(function(event){
      $('body').toggleClass('lock');
  })
  $('.close').click(function(event){
    $('body').removeClass('lock');
  })
})

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
}else{
  console.log('other page')
}


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