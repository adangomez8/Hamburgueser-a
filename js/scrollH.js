"use strict";
window.addEventListener('scroll', function(){
    let tamPantalla = window.innerHeight/1.5;
    let producto1 = document.getElementById('item-categ-1');
    let posicion1 = producto1.getBoundingClientRect().top;
    let producto2 = document.getElementById('item-categ-2');
    let posicion2 = producto2.getBoundingClientRect().top;
    let producto3 = document.getElementById('item-categ-3');
    let posicion3 = producto3.getBoundingClientRect().top;
    let producto4 = document.getElementById('item-categ-4');
    let posicion4 = producto4.getBoundingClientRect().top;
    let producto5 = document.getElementById('item-categ-5');
    let posicion5 = producto5.getBoundingClientRect().top;
    

    if(posicion1<tamPantalla){
        producto1.style.animation = 'mover 1s ease-in'
    }

    if(posicion2<tamPantalla){
        producto2.style.animation = 'mover 1s ease-in'
    }

    if(posicion3<tamPantalla){
        producto3.style.animation = 'mover 1s ease-in'
    }

    if(posicion4<tamPantalla){
        producto4.style.animation = 'mover 1s ease-in'
    }

    if(posicion5<tamPantalla){
        producto5.style.animation = 'mover 1s ease-in'
    }
})