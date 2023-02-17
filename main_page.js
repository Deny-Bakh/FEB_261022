$(document).ready(function() {
    $('.toggle_menu').click(function(event){
        $('body').toggleClass('lock');
    })
})

  function scrollToElem(elem) {
    event.preventDefault()
    const target = document.querySelector(elem.hash)
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    })
  };

  $('#firstSlider').slick({
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    arrows:false,
    // pauseOnHover:true,
    // pauseOnDotsHover:true,
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
      })
    }
  };
  
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
  });