
let btn = document.getElementById('btn')
let p = document.querySelector('p')



btn.addEventListener('click', ()=>{
    let bir = document.getElementById('bir').value
let ikki = document.getElementById('ikki').value

if(bir == 1 && ikki == 2){
window.location.href = 'index2.html'
}else if(bir == 2 && ikki == 1){
    
window.location.href = 'index3.html'
}else if(bir == 3 && ikki == 3){
    window.location.href = 'index4.html'
}
else if(bir == 4 && ikki == 4 ){
    window.location.href = 'index5.html'

}

else{
    p.textContent = 'munday akkaunt mavud emas'
}

}

)

ikki.addEventListener('input', ()=>{
    if(ikki !== ""){
        btn.style.background = '#F0400F'
    }else{
        btn.style.background = '#F69E86'
        }

})