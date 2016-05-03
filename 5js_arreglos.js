//**********PREGUNTA #3
function total(){ 
suma=0;
for(i=0;i<10;i++){
	numero=parseInt("ingrese el numero"+(i+1));
	suma=suma+numero;
}
document.write("La suma total es " + suma);
}
