//**********PREGUNTA #3
function mayor(){ 
var mayor=[];
var valores = [true, 5, false, "hola", "adios", 2];
for(i=0; i<valores.length;i++){
if(valores[i]<valores[i+1]){
	mayor=valores[i+1];
}

}
document.write("El valor mayor es: "+mayor);



}
