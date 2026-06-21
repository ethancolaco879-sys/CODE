const sidebar = document.querySelector(".sidebar");

const sidebarButton = document.querySelector(".sidebar__button");

sidebarButton.addEventListener("click", ()=> {
    sidebar.classList.toggle("sidebar--open")
});