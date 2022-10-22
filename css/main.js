let superheroe = 1;
let table = document.getElementById('table')
let overlay = document.getElementById('card__overlay')
let card = document.getElementById('card')
let srbar = document.getElementById('search')
let lupa = document.getElementById('lupa')
let srinput = document.getElementById('searchinput')
const btnSiguiente = document.getElementById('right')
const btnAnterior = document.getElementById('left')
// let sroverlay = document.getElementById('src__overlay')
const auto = function(){
    card.style.overflowY = "Auto";
}
const hidden = function(){
    card.style.overflowY = "Hidden"
}
overlay.addEventListener("mouseover", auto);

overlay.addEventListener("mouseleave", hidden);

table.addEventListener("mouseover", auto);

table.addEventListener("mouseleave", hidden);

srbar.addEventListener("mouseover", function() {
    lupa.style.display = 'none'
    srinput.style.display = 'block'
});

srinput.addEventListener("moseleave", function() {
    srinput.style.display = 'none'
    lupa.style.display = 'block'
});

srbar.addEventListener("mouseleave", function() {
    srinput.style.display = 'none'
    lupa.style.display = 'block'
});
  // TO-DO Diegordito
btnSiguiente.addEventListener('click', ()=>{
    window.location.reload();
})

// function regresar() {
//     window.alert("atras")
// }

function siguiente(e) {
    
}