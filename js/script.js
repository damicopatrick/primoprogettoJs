// FUNZIONI DA RICHIAMARE QUANDO SI VERIFIANO DETERMINATI EVENTI

function saluta() {

    let numero;
    let nome;
    nome="pippo";
    // INPUT
    numero = prompt("inserisci un numero");


    //OUTPUT
    if(numero != null && numero != ""){
        
        if(numero % 2 == 0){
        alert("pari");
        console.log("pari");
    }else{
        alert("dispari");
        console.log("dispari");
    }
    }
    
    

}