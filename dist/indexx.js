"use strict";
const bill = document.getElementById('bill');
const tips = document.querySelectorAll('#tip');
const tipamount = document.getElementById('tipamountchange');
let valor = 1;
let billpress;
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
function cambio() {
    let a = bill.value;
    console.log(valor);
    console.log(a);
    tipamount.innerHTML = (valor * a).toFixed(2);
}
