let img=document.querySelector('img')
// let input=document.querySelector('input')

// let kgFlag='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzAsmDHuZqz4EKfmjqcTTganBwMAORx_Uzw&usqp=CAU'

// let patternKg=/\+996/
// input.oninput=()=>{
//     if(patternKg.test(input.value)){
//         img.src=kgFlag
//     }
// }

const phoneKg="+996"
const patterKg=/\+996/
const phoneUsa="+1"
const patterUsa=/\+1/
const phoneGer="+707"
const patterGer=/\+707/
const phoneArg="+200"
const patterArg=/\+200/

const phoneCode=prompt('Enter a code')
if(patterKg.test(phoneCode)){
    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzAsmDHuZqz4EKfmjqcTTganBwMAORx_Uzw&usqp=CAU'
} else if(patterUsa.test(phoneUsa)){
    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKT24AbOhMeKvZVvFpaLaXdY-g6wE4VgLvNA&usqp=CAU'
} else if(patterGer.test(phoneGer)){
    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq9e63mFKUu7to4xh09lwbFaagYpeuInNo6A&usqp=CAU' 
}else if(patterArg.test(phoneArg)){
    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3RTT81HWykX18agEooyy7JeQvftDsHuBQg&usqp=CAU'
}

