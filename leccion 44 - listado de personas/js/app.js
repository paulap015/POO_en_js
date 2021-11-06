const personas=[
    new Persona('Juan','Perez'),
    new Persona('PP','Guillo'),
    new Persona('Pau','Peña')
];

function mostrarPersonas(){
    console.log('Mostrar personas ---  ');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
    }
    document.getElementById('personas').innerHTML=texto;
}

function agregarPersona(){
    const forma = document.getElementById('forma');
    const nombre = forma['nombre'];
    const apellido=forma['apellido'];
    if(nombre.vlaue != '' && apellido.value != ''){
        const persona = new Persona(nombre.value,apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }else{
        console.log('no hay informacion que agregar');
    }
    
}