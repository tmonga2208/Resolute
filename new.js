window.onload = function() {
    var navbar = document.getElementById("navbar");
    navbar.style.padding = "20px 10px"; // Big padding
  };
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      navbar.style.padding = "5px 10px"; // Small padding
      navbar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)"; // box shadow
      navbar.style.transition = "0.5s"; // Smooth transition
    } else {
      navbar.style.padding = "20px 10px"; // Big padding
      navbar.style.boxShadow = "none"; // No box shadow
    }
  }
  var menuIcon = document.querySelector('.navbar .menu-icon');
  var navbarPages = document.querySelector('.navbar .pages');
  
  menuIcon.addEventListener('click', function() {
      navbarPages.classList.toggle('show');
  });