//**********PREGUNTA #4
function mayor(){ 
	var mayor=0;
	var valores = [true, 5, false, "hola", "adios", 2,"anapaula"];
	var nueva=[];
	var mayor=[];

for(var i=0; i<valores.length;i++){
	if((typeof valores[i] )== 'string') {
		nueva.push(valores[i]);
		}
}
	console.log(nueva);
for(j=0;j<nueva.length-1;j++){
		if(nueva[j+1].length>nueva[j].length){
			mayor=nueva[j+1];
			document.write("EL valor mayor: "+nueva[j+1]);
		}else{
			mayor=nueva[j];
			document.write("<br>"+"El valor mayor es: "+nueva[j]);
		}
	}	


}
