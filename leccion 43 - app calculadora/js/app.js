console.log('te amo');
function sumar(){
    const forma = document.getElementById('forma');
    
    let a = forma['a'];
    let b =forma['b'];
    let result = parseInt(a.value)+parseInt(b.value);
    if(isNaN(result)){
        result='La operacion no incluye numeros';
    }
    document.getElementById('resultado').innerHTML=`Resultado : ${result}`;
   
}