function confirmar(){
    let senhas = document.getElementById("senha")
     let csenhas = document.getElementById("csenha")
     let confirmada = document.getElementById("con")
     let senha = senhas.value
     let csenha = csenhas.value

    if (senhas.value === ""  &&  csenhas.value === ""){
            confirmada.textContent="coloque sua senha"
        }
     else if(senha===csenha){
        
       
    confirmada.textContent="Senha confirmada"
    senhas.value=""
       csenhas.value=""
      }

       
       
       
     
      
     else{

       confirmada.textContent="As senhas não esta condizendo"

     }
      
    }