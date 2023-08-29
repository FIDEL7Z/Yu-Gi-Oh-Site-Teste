const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let idx = 0 

function carrossel(){
    idx++
    if(idx > img .length - 1){
        idx = 0 
    }

    imgs.style.transform =  `translatex(${-idx *700}px)`

}

setInterval(carrossel, 1800)

fetch('https://ygo.augustomedeiros.com.br/getCarta/10').then(r =>{
    return r.json()
    
}).then(corpo =>{

    document.getElementById('nome').innerHTML = corpo.nome
    document.getElementById('nivel').innerHTML = corpo.nivel
    document.getElementById('imgCard').innerHTML = `<img src=${corpo.urlImagem} alt = "carta">`
    document.getElementById('desc').innerHTML = corpo.descricao
    document.getElementById('atk').innerHTML = corpo.pontosAtk
    document.getElementById('def').innerHTML = corpo.pontosDfs

})
