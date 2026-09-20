
function opcao(img1,img2,img3,n){
    let ig=document.getElementById("img-grande")
    ig.src=img1
    let im1=document.getElementById("img-media1")
    im1.src=img2
    let im2=document.getElementById("img-media2")
    im2.src=img3
   
    document.getElementById("nome").textContent=n;
    
}
function opcaop(p){
     document.getElementById("preco").textContent="R$ "+p;
}

opcao1()



function opcao1(){
    img1="img/adidas branco (1).png"
    img2="img/adidas branco (2).png"
    img3="img/adidas branco (3).png"
    p="489,90"
    n="verde"
    opcao(img1,img2,img3,n)
   
}
function opcao2(){
    img1="img/adidas off white (1).png"
     img2="img/adidas off white (2).png"
    img3="img/adidas off white (3).png"
    p="489,90"
    n="cinza"
    opcao(img1,img2,img3,n)
    
}
function opcao3(){
   
    img1="img/adidas preto (1).png"
    img2="img/adidas preto (2).png"
     img3="img/adidas preto (3).png"
    p="489,90"
    n="preto"
    opcao(img1,img2,img3,n)
   
}
function opcao4(){
    img1="img/adidas verde  (1).png"

     img2="img/adidas verde  (2).png"

    img3="img/adidas verde  (3).png"
    p="489,90"
    n="verde"
    opcao(img1,img2,img3,n)
   
    
}
/* //function opcao5(){
    
//     img1="img/adidas vermelho (1).png"
  
    img2="img/adidas vermelho (2).png"
 
    img3="img/adidas vermelho (3).png"
    p="489,90"
    n="vermelho"
    opcao(img1,img2,img3,p,n)
    489,90+
    489,90
    979,80
    489,90
    1469,70
}*/



let cla = document.getElementsByClassName("cabesalho")[0]

   cla= cla.offsetHeight    
      let dfavoritos=document.getElementsByClassName("dfavoritos")[0]
      let favorito=document.getElementsByClassName("favorito")[0]
    let favoritoss=document.getElementsByClassName("favoritoss")[0]
     favorito.style.textAlign="center"
        let position3=-300
     favoritoss.style.display="none"
     favoritoss.style.top=(cla-8)+"px"
    function favoritos() {
    animacao5()
    favoritoss.style.display="block";

    favorito.onclick=favoritos2
    }
    function favoritos2() {
    
    animacao6()
    favorito.onclick=favoritos
}

function animacao5() {
     position3+=10
    favoritoss.style.right=position3+"px"
    
   
    if(position3>=0){ cancelAnimationFrame
   }
    else{ requestAnimationFrame(animacao5)}
}
function animacao6() {
         position3-=10
    favoritoss.style.right=position3+"px"
    
   
    if(position3<=-300){ cancelAnimationFrame
        favoritoss.style.display="none"
    position3=-300}
    else{ requestAnimationFrame(animacao6)}
}
function favoritoc(){
    favoritos2()
}
let foo =document.getElementById("infofavorito")

function fv(srci,textc,textc2,) {
    let div=document.createElement("div")
    foo.appendChild(div)
    let imagem = document.createElement("img")
    div.appendChild(imagem)
     let p=document.createElement("p")
    div.appendChild(p)
    p.id="favoritodivp"
       let p1=document.createElement("p")
    div.appendChild(p1)
   //  let p2=document.createElement("p")
    //div.appendChild(p2)
    let buon = document.createElement("button")
     div.appendChild(buon)
     div.className="divf"
     buon.textContent="x"
     buon.className="buton"
     buon.onclick=del
        
     
    
    p1.style.width=100+"px"
    imagem.src=srci
    p.textContent=textc
    p1.textContent=textc2
    //p2.textContent=textc3
    
    function del() {

     buon.parentElement.remove()
}


}
let tamanho =document.getElementsByClassName("tamanho")
let lele=0

let su=0

let tamanhos=null

function detect(tamanho) {
 tamanhos= parseInt(tamanho)
     ;
    
}
function mensagem(params) {
    let r =document.getElementById("respostas").textContent=params
}
  function addf(){
      // su+=1
      //  if (7>su) {
      
      
        if(tamanhos==null){
        mensagem("Selecione um tamanho para continuar.")
         setTimeout(()=>{  mensagem("")},3000)
      }
            else{
                let srci=document.getElementById("img-grande").src 
                let textc= "Tenis adidas forum low  "+ document.getElementById("nome").textContent+" "+tamanhos
                        
                
                let textc2=document.getElementById("preco").textContent
                
                fv(srci,textc,textc2)
                tamanhos=null
            mensagem(
                        "Produto adicionado aos favoritos"
                    )
                setTimeout(()=>{  mensagem("")},3000)
            

        }

//} //  else{
            //alert(
             //   "limite atingido"
           // )
       // }

}