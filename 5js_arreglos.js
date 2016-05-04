//**********PREGUNTA #3
function total(){ 
suma=0;
for(i=1;i<=10;i++){
	numero=parseInt(prompt("ingrese el numero"+i));
	suma=suma+numero;
}
document.write("La suma total es " + suma);
}
