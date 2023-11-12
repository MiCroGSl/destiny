var isSidebarOpen = false;

function toggleMenu() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
  isSidebarOpen = !isSidebarOpen;

  updateButtonStatus();

  var toggleBtn = document.querySelector('.toggle-btn');
  toggleBtn.classList.toggle('active');
}

function toggleSubMenu(subMenuId) {
  var subMenu = document.getElementById(subMenuId + 'SubMenu');
  subMenu.classList.toggle('active');

  var icon = document.getElementById(subMenuId + 'Icon');
  if (subMenu.classList.contains('active')) {
    icon.innerHTML = '▼';
  } else {
    icon.innerHTML = '►';
  }
}

function updateButtonStatus() {
  var buttons = document.querySelectorAll('.menu button');
  buttons.forEach(function (button) {
    button.disabled = !isSidebarOpen;
  });
}

function redirectToURL(url) {
  window.open(url, '_blank');
}