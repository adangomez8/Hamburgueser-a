"use strict";
window.addEventListener('scroll', function(){
    let tamPantalla = window.innerHeight/1.5;
    let producto6 = document.getElementById('item-categ-6');
    let posicion6 = producto6.getBoundingClientRect().top;
    let producto7 = document.getElementById('item-categ-7');
    let posicion7 = producto7.getBoundingClientRect().top;
    let producto8 = document.getElementById('item-categ-8');
    let posicion8 = producto8.getBoundingClientRect().top;

    if(posicion6<tamPantalla){
        producto6.style.animation = 'mover 1s ease-in'
    }

    if(posicion7<tamPantalla){
        producto7.style.animation = 'mover 1s ease-in'
    }

    if(posicion8<tamPantalla){
        producto8.style.animation = 'mover 1s ease-in'
    }
})