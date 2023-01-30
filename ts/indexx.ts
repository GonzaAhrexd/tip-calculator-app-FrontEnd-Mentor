
const bill:any = document.getElementById('bill')
const tips:any = document.querySelectorAll('#tip')
const tipamount:any = document.getElementById('tipamountchange')
const people:any = document.getElementById('people')
const total:any = document.getElementById('numberAmount')
const custom:any = document.getElementById('customnumber')
const resetbtn:any = document.getElementById('resetbtn')
let valor:number = 0
let billpress:number
let person:number = 1
let valorbill:number = 0
let customN:number = 0;
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

function customCambio(){
    valor = custom.value
    cambio()
}


function resetear():void{

    console.log('test')
    bill.value = 0
    valor = 0
    people.value = 1
    
    cambio()
}

function cambio():void{
   
    valorbill= parseInt(bill.value)
    console.log(valorbill)
    person = people.value
    if(valor!=0)
    tipamount.innerHTML = (((valor / 100 ) * valorbill)/person).toFixed(2)
    else 
    tipamount.innerHTML = ((valorbill)/person).toFixed(2)
   

    total.innerHTML = (((valor / 100 ) * valorbill + valorbill)/person).toFixed(2)
}

resetbtn.addEventListener('click', resetear)
