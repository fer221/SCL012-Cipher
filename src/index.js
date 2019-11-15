const btn= document.getElementById("cifradod");

    btn.addEventListener("click", () =>{
    
    const offset= document.getElementById("numero").value;
    console.log('off',offset);
    const textarea = document.getElementById("textc").value;
    console.log('text',textarea);
    const letrasTranformadas = textarea.toUpperCase();
    const namber= parseInt(offset);
    console.log('letras',letrasTranformadas);
    
    
    

    

window.cipher.encode(namber, letrasTranformadas);



//const txt = document.getElementById("textd").value;
//console.log(txt);
})

const btnTextDecode = document.getElementById("desifrar");
btnTextDecode.addEventListener("click", function() {

    const offset= document.getElementById("numero").value;
    console.log('off',offset);
    const textarea = document.getElementById("textc").value;
    console.log('text',textarea);
    const letrasTranformadas = textarea.toUpperCase();
    const namber= parseInt(offset);
    
    
    
    //console.log('letras',letrasTranformadas);
    //let textDecode = document.getElementById("textc").value;
    //textDecode = textDecode.toUpperCase();
    //const = parseInt(offset);
    //let number_offset = document.getElementById("numero").value;
    
    
    
    window.cipher.decode(namber, letrasTranformadas);

})

const btnvolver = document.getElementById("volver");
btnvolver.addEventListener("click", function(){
     
    const offset= document.getElementById("numero");
    console.log(offset);
    offset.value= " ";
    document.getElementById("numero").innerHTML= " ";
    
    const textarea = document.getElementById("textd");
    console.log(textarea);
    textarea.value= " ";
    document.getElementById("textd").innerHTML=" ";
    
    const texto =document.getElementById("textc");
    console.log(texto);
    texto.value= " ";
    document.getElementById("textc").innerHTML= " ";

})

//for (let i=0; i <= textc.length; i++){
//console.log(textarea [i])
//console.log [i]

