//**********PREGUNTA #4
function mayor(){ 
	var mayor=0;
	var valores = [true, 5, false, "hola", "adios", 2];
	var nueva=[];

for(var i=0; i<valores.length-1;i++){
	if((typeof valores[i] )== 'string') {
		nueva.push(valores[i]);
		}
	for(j=0;j<nueva.length-1;j++){
		if(nueva[j+1].length>nueva[j].length){
			document.write("EL valor mayor: "+nueva[j+1]);
		}else{
			document.write("El valor mayor es: "+nueva[j]);
		}
	}

}	
}