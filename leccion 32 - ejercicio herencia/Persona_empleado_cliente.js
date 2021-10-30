class Persona {
    static contadorPersonas = 0;

    constructor(nombre,apellido,edad){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._idPersona=Persona.contadorPersonas;
        Persona.contadorPersonas++;
    }

    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad=edad;
    }
    toString(){
        return "Datos de la persona \n" +
        "Nombre :" + this._nombre + " \n"+
        "Apellido :"+ this._apellido+ " \n"+
        "id  :"+ this._idPersona ;
    }

}

class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado=Empleado.contadorEmpleados;
        this._sueldo=sueldo;
        Empleado.contadorEmpleados++;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    toString(){
        return "Datos de la empleado \n" +
        "Nombre :" + this._nombre + " \n"+
        "Apellido :"+ this._apellido+ " \n"+
        "id  persona :"+ this._idPersona +" \n"+
        "id  empleado :"+ this._idEmpleado ;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre,apellido,edad,date){
        super(nombre,apellido,edad);
        this._idCliente=Cliente.contadorClientes;
        this._fechaRegistro=date;
        Cliente.contadorClientes++;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(date){
        this._fechaRegistro=date;
    }
    toString(){
        return "Datos del cliente \n" +
        "Nombre :" + this._nombre + " \n"+
        "Apellido :"+ this._apellido+ " \n"+
        "id  persona :"+ this._idPersona +" \n"+
        "id  cliente :"+ this._idCliente+ " \n"+
        "fecha registro:"+ this._fechaRegistro  ;
    }
}


let p1 = new Persona("Paula","Peña",21);
console.log(p1.toString());
let p2 = new Persona("Pau","P",22);
console.log(p2.toString());

let e1 = new Empleado("Andres","Niño",33,1000);
console.log(e1.toString());
let fecha = new Date();
let c1 = new Cliente("Aida","Constain",33,fecha);
console.log(c1.toString());

let e2 = new Empleado("Richard","Aguirre",33,1000);
console.log(e2.toString());

let c2 = new Cliente("Pepito","Curry",33,fecha);
console.log(c2.toString());