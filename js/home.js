let t1 = document.getElementById("t1")
let t1a = document.getElementById("t1a")
let t2 = document.getElementById("t2")
let a =0
let f=0
let t2a = document.getElementById("t2a")
let pum= document.getElementById("pum")
let pdois= document.getElementById("pdois")
 let produto1 =  document.getElementsByClassName("produto1")
  let produto2 =  document.getElementsByClassName("produto2")


  pum.addEventListener("mouseleave",function(){
    pdois.focus({ preventScroll: true })
  })

 
 pdois.addEventListener("mouseleave",function(){
    pum.focus({ preventScroll: true })})


     pum.addEventListener("keydown",function(event){
  if (event.key==="ArrowLeft" || event.key==="A" || event.key==="a") {
    trocar1()
   
  }
  if(event.key==="ArrowRight"|| event.key==="d" || event.key==="D") {
    trocar2()
  
  }
 });

 
   pdois.addEventListener("keydown",function(event){
  if (event.key==="ArrowLeft"|| event.key==="A" || event.key==="a"){
    trocar3()
   
  }
  if(event.key==="ArrowRight"|| event.key==="d" || event.key==="D") {
    trocar4()
  
  }
 });

 
 if (a==0){
  produto1[0].style.display="grid"
produto1[1].style.display="grid"
produto1[2].style.display="grid"}
trocar1()
trocar3()


function trocar1(){
  a--
  if(a<0){
    for(let i = 0 ;i<6;i++){
     
      a++
    }
    
  }
    if(a==5){
    arri(2,5,0,1)
 }
  if(a==4){
    arri(1,4,5,0)
 }
  if(a==3){
    arri(0,3,4,5)
 }
  if(a==2){
    arri(5,2,3,4)
 } 
 if(a==1){
    arri(4,1,2,3)
 }
  if(a==0){
    arri(3,0,1,2)
 }




}
  




function trocar2(){

     a++
 if(a==1){
    
     arri(0,1,2,3)
 }
  if(a==2){
   
     arri(1,2,3,4)
 }
  if(a==3){
    arri(2,3,4,5)
 }
 if(a==4){
    arri(3,4,5,0)
 }
  if(a==5){
    arri(4,5,0,1)
 }
  if(a==6){
    for(let i = 0;i<=6;i++){
    arri(5,0,1,2)
     a=0


    }
 
 }
}


  function trocar3(){
      f--
  if(f<0){
    for(let i = 0 ;i<6;i++){
      
      f++
    }
    
  }
    if(f==5){
    arri2(2,5,0,1)
 }
  if(f==4){
    arri2(1,4,5,0)
 }
  if(f==3){
    arri2(0,3,4,5)
 }
  if(f==2){
    arri2(5,2,3,4)
 } 
 if(f==1){
    arri2(4,1,2,3)
 }
  if(f==0){
    arri2(3,0,1,2)
 }




  }


  function trocar4(){
    
     f++
 if(f==1){
    
     arri2(0,1,2,3)
 }
  if(f==2){
   
     arri2(1,2,3,4)
 }
  if(f==3){
    arri2(2,3,4,5)
 }
 if(f==4){
    arri2(3,4,5,0)
 }
  if(f==5){
    arri2(4,5,0,1)
 }
  if(f==6){
    for(let i = 0;i<=6;i++){
    arri2(5,0,1,2)
     f=0


    }
 
 }
  }



  function arri(b,c,d,e){
  produto1[b].style.display="none"
       produto1[c].style.display="grid"
      produto1[d].style.display="grid"
      produto1[e].style.display="grid"
      produto1[c].style.order="1" 
     produto1[d].style.order="2" 
    produto1[e].style.order="3" 
t1a.style.order="4"

}

 function arri2(b,c,d,e){
  produto2[b].style.display="none"
       produto2[c].style.display="grid"
      produto2[d].style.display="grid"
      produto2[e].style.display="grid"
      produto2[c].style.order="1" 
     produto2[d].style.order="2" 
    produto2[e].style.order="3" 
t2a.style.order="4"

}
