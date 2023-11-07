const hidebutton = document.querySelector(".menu-hide");
const showbutton = document.querySelector(".menu-show");
const navmenu = document.querySelector("#main-nav"); 

hidebutton.addEventListener('click',() => {
    hidebutton.classList.toggle('showing');
    showbutton.classList.toggle('showing');
    navmenu.classList.toggle('showing');
});

showbutton.addEventListener('click',() => {
    hidebutton.classList.toggle('showing');
    showbutton.classList.toggle('showing');
    navmenu.classList.toggle('showing');        
});