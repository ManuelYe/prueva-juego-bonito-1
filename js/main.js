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

// notas y consejos
const nota_consejos = ['Gracias hermano por las medias','CUIDADO! el fuego quema ','Toma un vaso de agua al levantarte de la cama','Las puertas abiertas no estan cerradas','Dispararle a un enemigo le hace mas daño que no hacerlo','Los enemigos no son tus amigos','No es pecado pelear por la justicia al contrario eso es una buena obra recuerda que existen oponentes que jamás entenderán con las palabras. Solamente tienes soltar la furia que se encuentra en tú espíritu entiendo como te sientes pero ya no tienes por que seguir soportadolo... protege a los seres vivos y a las plantas de este mundo que tanto amo','Llama a la abuela','No dejes de respirar... porque te moriras','Recuerden amigos, en la primera cita invitenla a comer helado para ver como la chupa','Si no sabes cocinar echale sal todo mejora con sal','Los cautos rara vez se equivocan','Nunca des una espada a alguien que no es capaz de sonreír y bailar']
var nota_visible = 0 
const nota_pantalla = document.getElementById('consejos')

function repetir (){
    nota_pantalla.innerHTML = '<samp class='+"'animar_aparecer'"+'>'+ nota_consejos[parseInt(Math.random() * 10)] +'</samp>'
    
    setTimeout(()=>{
    repetir()
},10000)

}


repetir()
inventario()