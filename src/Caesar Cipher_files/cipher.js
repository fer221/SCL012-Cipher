/*window.cipher = {
  encode: (offset, letra) => {

    let resultado = "";
    for (let i=0; i< letra.length; i++){
     let texto= letra.charCodeAt(i);
      console.log(texto);
       
      if (texto >= 65 && texto <= 90){
        let codAsciCifrado = (texto - 65 + offset) %26 +65;
        
        let ciFradoLetra += String.fromCharCode(codAsciCifrado);
        console.log(ciFradoLetra);
        
        resultado += ciFradoLetra;
        console.log(resultado);

       }

      

      document.getElementById("textd").innerHTML= resultado;
    }
    //for ()
  },
    /* Acá va tu código */
    

  
  //decode = () => {
    /* Acá va tu código */
  //}
//};
