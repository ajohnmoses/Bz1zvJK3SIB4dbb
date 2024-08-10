function dismissNotification() {
  // Hide the banner
  document.getElementById('notification').style.display = 'none';
  
  // Add a class to adjust the menu's position
  document.body.classList.add('banner-dismissed');
}

function onToggleMenu(menuIcon) {
  const navLinks = document.querySelector('.nav-links');
  
  // Toggle menu visibility
  if (navLinks.style.top === '-100%') {
      navLinks.style.top = document.body.classList.contains('banner-dismissed') ? '4px' : '0px';
  } else {
      navLinks.style.top = '-100%';
  }
}

window.onload = function() {
  // Ensure the menu is initially hidden
  document.querySelector('.nav-links').style.top = '-100%';
};

// Get the button
const mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button

const scrollFunction = () => {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);