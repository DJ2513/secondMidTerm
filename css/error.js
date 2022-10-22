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
    window.location.assign('http://localhost:8000/next');
})

btnAnterior.addEventListener('click', ()=>{
    window.location.assign('http://localhost:8000/previous');
})