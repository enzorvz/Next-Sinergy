
let perfil= document.getElementById("perfil")
let troca =  document.getElementById("troca")
let clas = document.getElementsByClassName("cabesalho")[0]
let cadastro = document.getElementsByClassName("cadastros")[0]
let cimg = document.getElementById("estrela").getBoundingClientRect()
let input = document.getElementsByClassName("input")[0]
let lupa =document.getElementsByClassName("lupa")[0]





let position2=-300
let position=-100;
clas.style.zIndex=100

cadastro.style.zIndex=2
 

    clas=clas.offsetHeight    


perfil.style.marginLeft=cimg.left+(cimg.width/5)+"px"
   
     


function troca1(){
   
    animacao()
 perfil.style.display="flex";

troca.onclick=troca2
  let cadastrese=document.getElementById("cadastrese").getBoundingClientRect()
 document.getElementById("logi").style.width=cadastrese.width+"px"

 
}



function troca2(){
  
    animacao2()

 troca.onclick=troca1;
 
 
}
function animacao(){
   
    position+=10
    cadastro.style.top=position+"px"
    
   
    if(position>=(clas-8)){ cancelAnimationFrame
   }
    else{ requestAnimationFrame(animacao)}
       
   
}
function animacao2(){
     position-=10
    cadastro.style.top=position+"px"
    
   
    if(position<=-100){ cancelAnimationFrame
        perfil.style.display="none"
    position=-100}
    else{ requestAnimationFrame(animacao2)}
}


function pesquisar() {

   
   input.style.display="flex"
   
   lupa.onclick=retirar
}
function retirar(){       
       
     input.style.display="none"
     lupa.onclick=pesquisar
    }
    let comprars=document.getElementsByClassName("comprars")[0]
    let dcompra=document.getElementsByClassName("dcompra")[0]
     let compra=document.getElementsByClassName("compra")[0]
     compra.style.textAlign="center"
    comprars.style.display="none"
    comprars.style.top=(clas-8)+"px"
function carrinho() {
    animacao3()
 comprars.style.display="block";

compra.onclick=carrinho2
}

function carrinho2() {
    
animacao4()
compra.onclick=carrinho
}

function animacao3() {
     position2+=10
    comprars.style.right=position2+"px"
    
   
    if(position2>=0){ cancelAnimationFrame
   }
    else{ requestAnimationFrame(animacao3)}
}


function animacao4() {
         position2-=10
    comprars.style.right=position2+"px"
    
   
    if(position2<=-300){ cancelAnimationFrame
        comprars.style.display="none"
    position2=-300}
    else{ requestAnimationFrame(animacao4)}
}
function carinhoc(){
    carrinho2()
}
let number=0
let coo =document.getElementById("infocompra")
function bh(srci,textc,textc2) {
    let div=document.createElement("div")
    coo.appendChild(div)
    let imagem = document.createElement("img")
    div.appendChild(imagem)
     let p=document.createElement("p")
    div.appendChild(p)
    p.id="compradivp"
       let p1=document.createElement("p")
    div.appendChild(p1)
    let buon = document.createElement("button")
     div.appendChild(buon)
     div.className="divb"
     buon.textContent="x"
     buon.className="buton"
     buon.onclick=del
        
     
    p1.style.width=100+"px"
    imagem.src="img/"+srci
    p.textContent=textc
    p1.textContent="R$ "+textc2
    
    function del() {

     buon.parentElement.remove()
}
 
}
let srci = "baska.webp"
let textc="Bola de basquete NBA"
let textc2="198,40"
bh(srci,textc,textc2)
srci="Halteres.jpg"
textc="Kit de halteres 6 em 1 para musculação"
textc2="775,60"
bh(srci,textc,textc2)
srci="kimono.img.webp"
textc="Kimono Jiu-Jitsu"
textc2="415,00"
bh(srci,textc,textc2)
srci="png.png"
textc="Tenis Puma-180"
textc2="793,90"
bh(srci,textc,textc2)
srci="puma.png"
textc="Tenis Puma Slipstream"
textc2="497,90"
bh(srci,textc,textc2)
srci="adidas vermelho (3).png"
textc="Tenis adidas forum low - cor vermelho"
textc2="489,90"
bh(srci,textc,textc2)


