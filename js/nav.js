const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
const svgMenu = document.querySelector(".svg-btn-menu");

btnMenu.addEventListener('click', function(){
    menu.classList.toggle("mostrar");
    svgMenu.classList.toggle("girarSvgMenuMostrandoMenu");
});

const btnSubenu = document.querySelectorAll(".submenu_btn");

for(let i = 0; i< btnSubenu.length; i++){
    btnSubenu[i].addEventListener("click", function(){

        
        const subMenu = this.nextElementSibling;
        const height = subMenu.scrollHeight;

        if(subMenu.classList.contains("desplegar")){
            subMenu.classList.remove("desplegar");
            subMenu.removeAttribute("style");
        }else{
            subMenu.classList.add("desplegar");
            subMenu.style.height = height + "px";
        }

    });
}