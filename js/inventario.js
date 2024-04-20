let bolsa = [balde,vola_de_astado,balde,vola_de_astado,balde,vola_de_astado,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio]
let bolsa_tienda = [vola_de_astado,vola_de_astado,vola_de_astado,vola_de_astado,balde,vola_de_astado,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio,espacio_basio]
var interfas_visible = document.getElementById('estadisticas')
var contenido_visible = document.getElementById('estad')
let menu_botones_interfas = document.getElementById('menu')
let interfas_inventario = document.getElementById('inventario')
const celdas_objetos = document.querySelectorAll('.celda_objeto')
const celdas_tienda = document.querySelectorAll('.celda_tienda')
let objeto_seleccionado = ''
let celda_seleccionado = ''
let c1, c2, o1, o2 ,posicion_en_bolsa,posicion_en_bolsa1,posicion_en_bolsa2= ''
let per = false
let p = true
const descripcion_pantalla = document.getElementById('descripcion')
function aparacer_text(id) {
    descripcion_pantalla.innerHTML = '<samp class='+"'nota_texto'"+'>'+ 'Descripcion:'+ "" +bolsa[id-1].descripcion +'</samp>' +''+ '<samp class='+"'nota_texto'"+'>'+ bolsa[id-1].descripcion +'</samp>'
}
function selector (id,clase){
    if (celda_seleccionado != '') {
        celda_seleccionado.classList.remove('select')
    }
    switch (clase) {
        case 1:
            celda_seleccionado = celdas_objetos[id-1]
            objeto_seleccionado = bolsa[id-1]
            break;
        case 2:
            celda_seleccionado = celdas_tienda[id-1]
            objeto_seleccionado = bolsa_tienda[id-1]
        break;
        default:
            break;
    }
    console.log(celda_seleccionado)
    posicion_en_bolsa = id-1
    celda_seleccionado.classList.add('select')
    aparacer_text(id)
    inventario(null)
    mover_objeto(2)

}
function mover_objeto (key){
    switch (key) {
        case 1:
            c1=celda_seleccionado
            o1=objeto_seleccionado
            per = true
            posicion_en_bolsa1 =posicion_en_bolsa
            break;
        case 2:
            c2=celda_seleccionado
            o2=objeto_seleccionado
            posicion_en_bolsa2 = posicion_en_bolsa
            break;
        default:
            break;
    }
    if (c1 != c2 && per)  {
        bolsa[posicion_en_bolsa1] = bolsa[posicion_en_bolsa2]
        bolsa[posicion_en_bolsa2] = o1
        per = false
    }
    inventario()
}
function agregar_objeto(obj){
for (let index = 0; index < 30; index++) {
    if (bolsa[index] == espacio_basio) {
        bolsa[index] = obj
        obj = espacio_basio
    }
    inventario()
}
//barro de botones del menu


}
function inventario (a){    
    /*menu */
    switch (a) {
        case 'estad':
            //boton
            contenido_visible.classList.add('inactivo')
            contenido_visible = document.getElementById('estad')
            contenido_visible.classList.remove('inactivo')
            //contenido
            interfas_visible.classList.add('no_vicible')
            interfas_visible.classList.remove('vicible')
            interfas_visible = document.getElementById('estadisticas')
            interfas_visible.classList.remove('no_vicible')
            interfas_visible.classList.add('vicible')
            console.log(interfas_visible)
            break;
        case 'inven':
            //boton
            contenido_visible.classList.add('inactivo')
            contenido_visible = document.getElementById('inven')
            contenido_visible.classList.remove('inactivo')
            //contenido
            console.log(interfas_visible)
            interfas_visible.classList.add('no_vicible')
            interfas_visible.classList.remove('vicible')
            interfas_visible = document.getElementById('inventario')
            interfas_visible.classList.remove('no_vicible')
            interfas_visible.classList.add('vicible')
            console.log(interfas_visible)
            break;
        case 'misio':
            //boton
            contenido_visible.classList.add('inactivo')
            contenido_visible = document.getElementById('misio')
            contenido_visible.classList.remove('inactivo')
            //contenido
            interfas_visible.classList.add('no_vicible')
            interfas_visible.classList.remove('vicible')
            interfas_visible = document.getElementById('misiones')
            interfas_visible.classList.remove('no_vicible')
            interfas_visible.classList.add('vicible')
            console.log(interfas_visible)
            break;
        case 'tiend':
            //boton
            contenido_visible.classList.add('inactivo')
            contenido_visible = document.getElementById('tiend')
            contenido_visible.classList.remove('inactivo')
            //contenido
            interfas_visible.classList.add('no_vicible')
            interfas_visible.classList.remove('vicible')
            interfas_visible = document.getElementById('tienda')
            interfas_visible.classList.remove('no_vicible')
            interfas_visible.classList.add('vicible')
            break;
        default:
            break;
    }
/*escribir inventario*/
for (let index = 0; index < 30; index++) {
    celdas_objetos[index].innerHTML = bolsa[index].nombre
}
//escribir tienda
for (let index = 0; index < 30; index++) {
    celdas_tienda[index].innerHTML = bolsa_tienda[index].nombre
}
}
function cambiar_botones_menu (e){
    switch (e) {
        case 'normal':
            menu_botones_interfas.innerHTML = `\n        <ul>\n            <li>\n                <samp class="inactivo" id="estad" onclick="inventario('estad')">estadisticas</samp>\n            </li>\n            <li>\n                <samp class="inactivo" id="inven" onclick="inventario('inven')">inventario</samp>\n            </li>\n            <li>\n                <samp class="inactivo" id="misio" onclick="inventario('misio')">mision</samp>\n            </li>\n\n        </ul>\n   `
            interfas_visible = document.getElementById('tienda')
            interfas_visible.classList.add('no_vicible')
            interfas_visible.classList.remove('vicible')
            
            break;
        case 'tienda':
            menu_botones_interfas.innerHTML = `\n        <ul>\n            <li>\n                <samp class="inactivo" id="estad" onclick="inventario('estad')">estadisticas</samp>\n            </li>\n            <li>\n                <samp class="inactivo" id="inven" onclick="inventario('inven')">inventario</samp>\n            </li>\n            <li>\n                <samp class="inactivo" id="misio" onclick="inventario('misio')">mision</samp>\n            </li>\n            <li>\n                \n                <samp class="inactivo" id="tiend" onclick="inventario('tiend')">tienda</samp>\n                \n            </li>\n        </ul>\n  `
            interfas_visible = document.getElementById('tienda')
            interfas_visible.classList.add('no_vicible')
            interfas_visible.classList.remove('vicible')
            break;
    
        default:
            break;
    }


if (avanzar.salud <= 0){
        avanzar.salud = 0
    }
}