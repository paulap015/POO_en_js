class DispositiviEntrada{
    constructor(entrada,marca){
        this._tipoEntrada=entrada;
        this._marca=marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set tipoEntrada(entrada){
        this._tipoEntrada=entrada;
    }
    set marca(marca){
        this._marca=marca;
    }
}
class Raton extends DispositiviEntrada{
    static contadorRatones=0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton=++Raton.contadorRatones;
    }
    toString(){
        return `Mouse : ${this._idRaton} | tipo entrada : ${this._tipoEntrada} | marca : ${this._marca}`;
    }
}
class Teclado extends DispositiviEntrada{
    static contadorTeclados=0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado=++Teclado.contadorTeclados;
    }
    toString(){
        return `Teclado : ${this._idTeclado} | tipo entrada : ${this._tipoEntrada} | marca : ${this._marca}`;
    }
}

class Monitor{
    static contadorMonitor=0;

    constructor(tamanio,marca){
        this._tamanio=tamanio;
        this._marca=marca;
        this._idMonitor=++Monitor.contadorMonitor;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get tamanio(){
        return this._tamanio;
    }
    get marca(){
        return this._marca;
    }
    set tamanio(tamanio){
        this._tamanio=tamanio;
    }
    set marca(marca){
        this._marca=marca;
    }
    toString(){
        return `Monitor : ${this._idMonitor} | tamaño : ${this._tamanio} | marca : ${this._marca}`;
    }
}

class Computadora{
    static contadorComputadoras=0;
    constructor(nombre,monitor,teclado,raton,precio){
        this._idComputadora=++Computadora.contadorComputadoras;
        this._nombre=nombre;
        this._monitor=monitor;
        this._teclado=teclado;
        this._raton=raton;
        this._precio=precio;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    get monitor(){
        return this._monitor.toString();
    }
    get raton(){
        return this._raton.toString();
    }
    get teclado(){
        return this._teclado.toString();
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    toString(){
        return `\n computador id : ${this._idComputadora} | precio ${this._precio}  | nombre ${this._nombre}
        Monitor : ${monitor} 
        Raton   : ${raton}
        Teclado : ${teclado}`
    }
}
class Orden{
    static contadorOrdenes=0;
    
    constructor(){
        this._idOrden=++ Orden.contadorOrdenes;
        this._computadoras=[];
        
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(compu){
        this._computadoras.push(compu);//agregando al array
    }

    calcularTotal(){
        let Total = 0;
        for(let producto of this._computadoras){
            Total +=producto.precio;
        }
        return Total;
    }
    mostrarProductos(){
        let orden=' ';
        for(let producto of this._computadoras){
            orden += producto.toString()+' \n ';
        }
        return orden;
    }
    imprimirRecibo(){
        console.log(`Factura ${this._idOrden} \n
        Total de venta : ${this.calcularTotal()}\n
        Productos : ${this.mostrarProductos()}
        `);
    }
}

let raton = new Raton('vga','hp');
let teclado = new Teclado('vga','hp');
let monitor=new Monitor('23px','hp');
let compu = new Computadora('20018Best',monitor,teclado,raton,20);
//-----------------------------------------------------
let r2 = new Raton('hdmi','hp');
let t2 = new Teclado('hdmi','hp');
let m2=new Monitor('30px','hp');
let compu2 = new Computadora('20018Best2',m2,t2,r2,40);
//-----------------------------------------------------
let r3 = new Raton('hdmi','hp');
let t3 = new Teclado('hdmi','hp');
let m3=new Monitor('30px','hp');
let compu3 = new Computadora('20018Best2',m2,t2,r2,40);
//-----------------------------------------------------
let o1 = new Orden();
let o2 = new Orden();
o1.agregarProducto(compu);
o1.agregarProducto(compu2);
o2.agregarProducto(compu3);
console.log(o1.imprimirRecibo());
console.log(o2.imprimirRecibo());

