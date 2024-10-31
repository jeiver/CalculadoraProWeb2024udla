//console.log("holas");
let tablero = document.getElementById("tablero");
let ac = document.getElementById("ac");
let dividir = document.getElementById("dividir");
let multiplicar = document.getElementById("por");
let restar = document.getElementById("menos");
let sumar = document.getElementById("mas");
let igual = document.getElementById("igual");
let punto = document.getElementById("punto");
let negativo = document.getElementById("negativo");

let cadenaOperacion1 = "";
let cadenaOperacion12 = "";
let signoTemp = "";
let seCambioNum = false;
let esperandoNumero =false;

let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(document.getElementById("num-" + i));

    console.log(numeros[i].value);

    numeros[i].addEventListener("click", () => {
        if (tablero.value == "0" || esperandoNumero) {
            tablero.value = numeros[i].value;
            seCambioNum = true;
             esperandoNumero =false; 
        } else {
            tablero.value += numeros[i].value;
            seCambioNum = true;
             esperandoNumero =false;
        }
        estado = false;

    });
}

ac.addEventListener("click", () => {
    tablero.value = "0";
});

function operacion(signo) {

    console.log(signo);
    let tempCadena1 = cadenaOperacion1;
    let tempSignoTemp = signo;
    
    if (!esperandoNumero) {
        if (cadenaOperacion1 == "" ) {
            cadenaOperacion1 = tablero.value; 
            console.log(cadenaOperacion1);
        }else{
            if ( seCambioNum) {
                tablero.value = eval(tempCadena1 + "" + signoTemp + "" + tablero.value);
            }
        }
    }

    cadenaOperacion1=tablero.value;
    esperandoNumero=true;
    signoTemp = tempSignoTemp;

    seCambioNum=false;
}
negativo.addEventListener("click", () => {
    let inicial = (tablero.value + "").substring(0, 1);
    if (inicial != "-") {
        tablero.value = "-" + tablero.value;
    } else {
        let tablerotex = tablero.value;
        let tamañoTab = Number(tablerotex.length)
        console.log("tablerotex: " + tablerotex.substring(1, tamañoTab));
        tablero.value = tablerotex.substring(1, tamañoTab);
    }
});
punto.addEventListener("click", () => {
    let temp = tablero.value;
    console.log(temp.includes("."));
    if (temp.includes(".") == false) {
        if (tablero.value.length == 0) {
            tablero.value = 0;
        }
        tablero.value += ".";
    }
});
sumar.addEventListener("click", function () {
    operacion(sumar.value)
});
igual.addEventListener("click", () => {
    if (cadenaOperacion1 != "") {
        if (!seCambioNum) {
            console.log("("+tablero.value + ")"+signoTemp +"("+ cadenaOperacion1 +")");
            
            tablero.value = eval("("+tablero.value + ")"+signoTemp +"("+ cadenaOperacion1 +")" );
            
            
        }else{
            let tempValue=tablero.value;
            console.log("log 2: "+"("+cadenaOperacion1 +")"+ signoTemp +"("+ tablero.value+")");
            tablero.value = eval("("+cadenaOperacion1 +")"+ signoTemp +"("+ tablero.value+")");
            cadenaOperacion12=tablero.value;
            cadenaOperacion1=tempValue;
            //signoTemp ="";
            seCambioNum=false;
            esperandoNumero=true;
        }

    }
});
sumar.addEventListener("click", function () {
    operacion(sumar.value)
});
restar.addEventListener("click", function () {
    operacion(restar.value)
});
multiplicar.addEventListener("click", function () {
    operacion(multiplicar.value)
});
dividir.addEventListener("click", function () {
    operacion(dividir.value)
});