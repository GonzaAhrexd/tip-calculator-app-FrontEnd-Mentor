
const bill:any = document.getElementById('bill')
const tips:any = document.querySelectorAll('#tip')
const tipamount:any = document.getElementById('tipamountchange')
let valor:number = 1
let billpress:number
tips.forEach((tip:any) => {
    tip.addEventListener('click', cambiar)

function cambiar():void{
    
    billpress = tip.value
    tip.style.color = 'hsl(183, 100%, 15%)'
    tip.style.background = 'hsl(172, 67%, 45%)'

    tips.forEach((tip2:any) => {
        if(tip2.value!=billpress)
        tip2.style.background = 'hsl(183, 100%, 15%)';
        tip2.style.color = 'white'
    })
    

    valor = tip.value

    cambio()
}

})




function cambio():void{
    let a:number = bill.value
    console.log(valor)
    console.log(a)
    tipamount.innerHTML = (valor * a).toFixed(2)
}