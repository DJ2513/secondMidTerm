let table = document.getElementById('table')
let overlay = document.getElementById('card__overlay')
let card = document.getElementById('card')
let srbar = document.getElementById('search')
let lupa = document.getElementById('lupa')
let srinput = document.getElementById('searchinput')
// let sroverlay = document.getElementById('src__overlay')

overlay.addEventListener("mouseover", function() {
    card.style.overflowY = "Auto"
});

overlay.addEventListener("mouseleave", function() {
    card.style.overflowY = "Hidden"
});

table.addEventListener("mouseover", function() {
    card.style.overflowY = "Auto"
});

table.addEventListener("mouseleave", function() {
    card.style.overflowY = "Hidden"
});

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

function regresar() {
    window.alert("atras")

}

function siguiente(e) {
    window.alert("siguiente")
}