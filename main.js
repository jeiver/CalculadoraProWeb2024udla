console.log("holas");
let a=document.getElementById("a");
let b=document.getElementById("b");
let boton=document.getElementById("boton");
let c=document.getElementById("c");

boton.addEventListener("click",()=>{
    c.value=Number(a.value)+Number(b.value);
});