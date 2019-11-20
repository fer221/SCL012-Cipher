const btn= document.getElementById("cifradod");

    btn.addEventListener("click", () =>{
    
    const offset= document.getElementById("numero").value;
    
    const textarea = document.getElementById('textc').value;
    
    let letrasTranformadas = textarea.toUpperCase();
    
    const namber= parseInt(offset);
    let cuadro=document.getElementById("textd");
    
    
    

    

 cuadro.innerHTML=window.cipher.encode(namber, letrasTranformadas);




//const txt = document.getElementById("textd").value;
//console.log(txt);
})

const btnTextDecode = document.getElementById("desifrar");
btnTextDecode.addEventListener("click", function() {

    const offset= document.getElementById("numero").value;
    
    const textarea = document.getElementById("textc").value;
    
    const letrasTranformadas = textarea.toUpperCase();
    const namber= parseInt(offset);
    let cuadro=document.getElementById("textd");
    
    
    
    //console.log('letras',letrasTranformadas);
    //let textDecode = document.getElementById("textc").value;
    //textDecode = textDecode.toUpperCase();
    //const = parseInt(offset);
    //let number_offset = document.getElementById("numero").value;
    
    
    
    cuadro.innerHTML=window.cipher.decode(namber, letrasTranformadas);

})

const btnvolver = document.getElementById("volver");
btnvolver.addEventListener("click", function(){
     
    const offset= document.getElementById("numero");
    
    offset.value= "";
    document.getElementById("numero").innerHTML= " ";
    
    const textarea = document.getElementById("textd");
   
    textarea.value= "";
    document.getElementById("textd").innerHTML=" ";
    
    const texto =document.getElementById("textc");
    
    texto.value= "";
    document.getElementById("textc").innerHTML= "";

})

//for (let i=0; i <= textc.length; i++){
//console.log(textarea [i])
//console.log [i]

