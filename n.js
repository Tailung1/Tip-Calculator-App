// const billInput=document.querySelector('#bill')
// const tipBottons =Array.from(document.getElementsByClassName('tip'))
// const peopleInput=document.querySelector("#people")
// const tipResult=document.querySelector('.tip-result')
// const totalResult=document.querySelector('.total-result')
// const reset=document.getElementById('reset')

// let billValue=0;
// let percetValue=0;
// let peopleValue=0;


// billInput.addEventListener("input", (event)=> {
//     billValue=event.target.value
//     calculator()
// })

// tipBottons.forEach(button => {
//     button.addEventListener('click',(event)=> {
//         percetValue=parseInt(event.target.textContent);
//         calculator()
//     })
// })

// peopleInput.addEventListener("input", (event)=> {
//     if(event.target.value === "") {
//         peopleValue= "" ;
//     } else {
//         peopleValue=parseInt(event.target.value)
//     }
//     calculator()
// })

// let helper= document.createElement('p')
// helper.textContent='Please enter amount of People'
// helper.style.cssText='color:red; margin-top:5px'

// let helper3=document.createElement('p')
// helper3.textContent='Enter Bill amount'
// helper3.style.cssText='color:orange;margin-bottom:0px'
// // let helper2=document.createElement('p')
// // helper2.textContent='Please enter Number greater than 0'
// // helper2.style.cssText='color:green';


// function calculator() {
//     const tipResultValue=billValue * (percetValue / 100) / peopleValue
//     const totalResultValue=tipResultValue + billValue / peopleValue

//     if(peopleValue !=0) {
//         tipResult.textContent=`$${tipResultValue.toFixed(2)}`
//         totalResult.textContent=`$${totalResultValue.toFixed(2)}`
//     }

//     if(peopleValue==="") {
//         peopleInput.insertAdjacentElement('afterend',helper)
//         tipResult.textContent='$0.00'
//         totalResult.textContent='$0.00'
//     } else {
//         helper.remove()
//     }

//     if(billValue==="") {
//         billInput.insertAdjacentElement('beforebegin',helper3)
//         tipResult.textContent='$0.00'
//         totalResult.textContent='$0.00'
//     } else {
//         helper3.remove()
//     }

//     // if(peopleValue < 1) {
//     //     peopleInput.insertAdjacentElement('afterend',helper2)
//     // } else {
//     //     helper2.remove()
//     // }
// }

// reset.addEventListener('click',()=> {
//     billInput.value="", peopleInput.value="", billValue=0;
//     percetValue=0;
//     peopleValue=0;
//     tipResult.textContent='$0.00'
//     totalResult.textContent='$0.00'
//     helper.remove()
//     helper3.remove()
//     // helper2.remove()

// })