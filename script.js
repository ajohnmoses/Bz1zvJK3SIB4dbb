function dismissNotification() {
    var notification = document.getElementById('notification');
    notification.style.display = 'none';
  }
  function onToggleMenu(menuIcon) {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('top-[80px]');
    navLinks.classList.toggle('top-[-100%]');
}