
// dropdown menu
const dropdown_button = document.getElementById("dropdown_toggle");
const dropdown_menu = document.getElementById("dropdown_menu");

let toggled = 0
dropdown_button.addEventListener("click", function(){
    dropdown_menu.classList.toggle('hidden');

    if (toggled % 2 == 0){
        dropdown_button.style.backgroundImage = 'url(images/menu_open_FILL0_wght400_GRAD0_opsz24.svg)';
    }   else {        
        dropdown_button.style.backgroundImage = 'url(images/menu_FILL0_wght400_GRAD0_opsz24.svg)';
    }
    toggled++;
});
