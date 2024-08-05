function dismissNotification() {
    var notification = document.getElementById('notification');
    notification.style.display = 'none';
  }
  const navLinks = document.querySelector('.nav-links')
  function onToggleMenu(e){
      e.name = e.name === 'menu' ? 'close' : 'menu'
      navLinks.classList.toggle('top-[9%]')
  }