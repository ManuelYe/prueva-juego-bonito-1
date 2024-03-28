/*bases*/
const ubicacion = document.getElementById('ubicacion')
let ubicacion_valor = 'casa'
let ubicacion_button = document.getElementById('casa_buttons')
const mensaje = document.getElementById('mensaje')
const casa_buttons = document.getElementById('casa_buttons')
const camino_buttons = document.getElementById('camino_buttons')
const cueva_buttons = document.getElementById('cueva_buttons')
const tienda_buttons = document.getElementById('tienda_buttons')

const funciones_x = [ 
function curar (cuanto,quien = avatar) {quien.salud += cuanto},
function mensaje (text){mensaje.innerHTML += '<br>' + text}
]

/*moverse*/
function moverse (lugar){
switch (lugar) {
    case 'casa':
    ubicacion_button.classList.add('no_vicible')
    ubicacion_button = document.getElementById('casa_buttons')
    ubicacion_button.classList.remove('no_vicible')
    ubicacion_valor= 'casa'
    ubicacion.innerText = 'Ubicacion: '+ ubicacion_valor 
        break;
    case 'cueva':
        ubicacion_button.classList.add('no_vicible')
        ubicacion_button = document.getElementById('cueva_buttons')
        ubicacion_button.classList.remove('no_vicible')
        ubicacion_valor= 'cueva'
        ubicacion.innerText = 'Ubicacion: '+ ubicacion_valor 
        break;
    case 'tienda':
        ubicacion_button.classList.add('no_vicible')
        ubicacion_button = document.getElementById('tienda_buttons')
        ubicacion_button.classList.remove('no_vicible')
        ubicacion_valor= 'tienda'
        ubicacion.innerText = 'Ubicacion: '+ ubicacion_valor 
        break;
    case 'camino':
        ubicacion_button.classList.add('no_vicible')
        ubicacion_button = document.getElementById('camino_buttons')
        ubicacion_button.classList.remove('no_vicible')
        ubicacion_valor= 'camino'
        ubicacion.innerText = 'Ubicacion: '+ ubicacion_valor 
        break;
    default:
        break;
}
}

/*casa*/
function dormir  (){
    avatar.salud = salud_max
    inventario()
    mensaje.innerHTML += '<br>' + 'has dormido, ahora tu salud esta completa'
    if (avatar.salud <= 0){
        avatar.salud = 0
    }
}
function fabricar (){
    console.log('ok')
}

/*cueva*/
let profundidad = 0
function avanzar (){
    profundidad  += 1
    mensaje.innerHTML += '<br>' + 'ahora estas en la profundidad: ' + profundidad
    encuentro()
}
function retroceder (){
    profundidad  -= 2
    if (profundidad < 0) {
        profundidad = 0
    }
    mensaje.innerHTML += '<br>' + 'ahora estas en la profundidad: ' + profundidad
}
function reposo (){}

/*tienda*/
function compar (){}
function vender (){}

/*aliados*/

inventario()