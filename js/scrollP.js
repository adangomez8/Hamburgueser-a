"use strict";
window.addEventListener('scroll', function(){
    let tamPantalla = window.innerHeight/1.5;
    let producto9 = document.getElementById('item-categ-9');
    let posicion9 = producto9.getBoundingClientRect().top;
    let producto10 = document.getElementById('item-categ-10');
    let posicion10 = producto10.getBoundingClientRect().top;
    let producto11 = document.getElementById('item-categ-11');
    let posicion11 = producto11.getBoundingClientRect().top;

    if(posicion9<tamPantalla){
        producto9.style.animation = 'mover 1s ease-in'
    }

    if(posicion10<tamPantalla){
        producto10.style.animation = 'mover 1s ease-in'
    }

    if(posicion11<tamPantalla){
        producto11.style.animation = 'mover 1s ease-in'
    }
})