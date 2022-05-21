document.addEventListener('DOMContentLoaded', function() {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction 
  window.addEventListener('DOMContentLoaded', myFunctionForSticky);

  // Get the navbar
  var navbar = document.getElementById("navbar-container");

  // Add the sticky class to the navbar when you reach its scroll position. 
  // Remove "sticky" when you leave the scroll position

  function myFunctionForSticky() {
      navbar.classList.add("sticky");
  }
})