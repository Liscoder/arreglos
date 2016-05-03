//**********PREGUNTA #1
function comprobar(){ 

var letra_obtenida=[];
var i=0;
var letras=['T','R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero_dni=parseInt(prompt("Ingrese su numero de DNI"));
if(numero_dni<0 && numero_dni>99999999){
	alert("INGRESE SU NUMERO DE DNI");
	var numero_dni=parseInt(prompt("Ingrese su numero de DNI"));
} 
var letra_persona=prompt("Ingrese su letra");
i=numero_dni%23;
if(letra_persona==letras[i]){ 
document.write("numero y la letra son correctas")
}else{
	alert("La letra ingresada es incorrecta");
}

}
