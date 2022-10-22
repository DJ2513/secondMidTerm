let table = document.getElementById('table')
let overlay = document.getElementById('card__overlay')
let card = document.getElementById('card')

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


function regresar() {
    window.alert("atras")

}

function siguiente(e) {
    window.alert("siguiente")
}