
turno = 0
function battel (){ 
    avatar.salud -= enemigo.ataque
    mensaje.innerHTML += '<br>' + 'el ' +enemigo.nombre +' te ha atacado' 
    if (enemigo.salud <= 0) {
        finalizar_battel()
        mensaje.innerHTML += '<br>' + 'has derrotado a ' + enemigo.nombre + ' felicidades'
    }
    if (avatar.salud <= 0) {
        battel_buttons.classList.add('no_vicible')
        casa_buttons.classList.remove('no_vicible')
        mensaje.innerHTML += '<br>' + 'has muerto'
        avatar.salud = salud_max
    }
    inventario()
}


function atacar (){
    enemigo.salud -= avatar.ataque
    mensaje.innerHTML += '<br>' + 'has atacado ahora a ' + enemigo.nombre
    battel()
}
function especial (){}
function escapar (){
    finalizar_battel()
    profundidad  -= 1
    if (profundidad < 0) {
        profundidad = 0
    }
    mensaje.innerHTML += '<br>' + ' has escapado del enfrentamiento, ahora estas en la profundidad: ' + profundidad
}
function finalizar_battel(){
    battel_buttons.classList.add('no_vicible')
    citio.classList.remove('no_vicible')
}


function encuentro (){
    let e = parseInt(Math.random()*2) 
    enemigo = enemis[e]
    console.log(enemigo)
    battel_buttons.classList.remove('no_vicible')
    camino_buttons.classList.add('no_vicible')
    casa_buttons.classList.add('no_vicible')
    cueva_buttons.classList.add('no_vicible')
    tienda_buttons.classList.add('no_vicible')
    mensaje.innerHTML += '<br>' + ' ha aprecido un ' + enemigo.nombre
    if (enemigo.velocidad > avatar.velocidad){
        battel()
    }
}