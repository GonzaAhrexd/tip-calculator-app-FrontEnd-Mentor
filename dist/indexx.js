"use strict";
const bill = document.getElementById('bill');
const tips = document.querySelectorAll('#tip');
const tipamount = document.getElementById('tipamountchange');
const people = document.getElementById('people');
const total = document.getElementById('numberAmount');
const custom = document.getElementById('customnumber');
let valor = 0;
let billpress;
let person = 1;
let valorbill = 0;
let customN = 0;
tips.forEach((tip) => {
    tip.addEventListener('click', cambiar);
    function cambiar() {
        billpress = tip.value;
        tip.style.color = 'hsl(183, 100%, 15%)';
        tip.style.background = 'hsl(172, 67%, 45%)';
        tips.forEach((tip2) => {
            if (tip2.value != billpress)
                tip2.style.background = 'hsl(183, 100%, 15%)';
            tip2.style.color = 'white';
        });
        valor = tip.value;
        cambio();
    }
});
function customCambio() {
    valor = custom.value;
    cambio();
}
function cambio() {
    valorbill = parseInt(bill.value);
    person = people.value;
    if (valor != 0)
        tipamount.innerHTML = (((valor / 100) * valorbill) / person).toFixed(2);
    else
        tipamount.innerHTML = ((valorbill) / person).toFixed(2);
    total.innerHTML = (((valor / 100) * valorbill + valorbill) / person).toFixed(2);
}
