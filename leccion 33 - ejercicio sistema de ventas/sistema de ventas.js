class Producto {
    static contadorProductos=0;
    constructor(nombre,precio){
        this._idProducto=++Producto.contadorProductos;
        this._nombre=nombre;
        this._precio=precio;

    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio=precio;
    }
    toString(){
        return "\n"+"Producto : " +this._nombre + " -->"+
        "idProducto: " +this._idProducto + " -> "+
        "Precio : " +this._precio ;
         
    }
}


class Orden{
    static contadorOrdenes=0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden=++ Orden.contadorOrdenes;
        this._productos=[];
        this._contadorProductosAgregados=0;
        
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);//agregando al array
        }else{
            console.log("no se pueden agregar mas productos");
        }
    }

    calcularTotal(){
        let Total = 0;
        for(let producto of this._productos){
            Total +=producto.precio;
        }
        return Total;
    }
    mostrarProductos(){
        let orden=' ';
        for(let producto of this._productos){
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

let p1=new Producto("camisa",1);
let p2=new Producto("pantalon",2);
let p3=new Producto("short",3);
let p4=new Producto("pant",4);
let p5=new Producto("talon",5);
let p6=new Producto("shirt",1);

let o1 = new Orden();
let o2 = new Orden();

o1.agregarProducto(p1);

o1.agregarProducto(p2);
o1.agregarProducto(p3);
o1.imprimirRecibo();
o2.agregarProducto(p4);
o2.agregarProducto(p5);

o2.agregarProducto(p6);
o2.imprimirRecibo();