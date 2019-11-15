window.cipher = {
  encode: (namber, letra) => {

    let resultado = "";
    for (let i=0; i< letra.length; i++) {
     let texto= letra.charCodeAt(i);
      console.log(texto);
       
      if (texto >= 65 && texto <= 90) {
        let codAsciCifrado = (texto - 65 + namber) % 26 + 65;
     
         
        let ciFradoLetra = String.fromCharCode(codAsciCifrado);
        console.log('cifrado',ciFradoLetra);
        
        
        resultado += ciFradoLetra;
        
       }

    }
    //for ()
    console.log(resultado);
    document.getElementById("textd").innerHTML= resultado;
    return resultado;

    

  },
    /* Acá va tu código */
    
    

  decode : (namber, letra) => {
    let resultado= "";
      for (let i=0; i< letra.length; i++) {
    //for (let i=0 i< letra.length; i++) {
      let texto= letra.charCodeAt(i);
      console.log(texto);
      if (texto >= 65 && texto <= 90) {
        let coDaEncryptado = (texto + 65 - namber) % 26 + 65;
        let deSifrado = String.fromCharCode(coDaEncryptado);
        console.log(deSifrado);
        resultado += deSifrado;
      }
    }
   
    console.log(resultado);
    document.getElementById("textd").innerHTML= resultado;
    return resultado;


    
    /* Acá va tu código */
  }

}
