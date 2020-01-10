import { Injectable } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable()

export class ProductoService{

   /* productos: (IProducto|ITecnologia|IInmobiliaria| IMotor) [] = [
        {
            nombre : "Taburete",
            descripcion : "De madera",
            categoria: "Hogar",
            precio: 123
        },
        {
            nombre : "Ordenador",
            descripcion : "APPLE",
            categoria: "tecnologia",
            estado: "Perfecto estado",
            precio: 1450
        },
        {
            nombre : "Ferrari",
            descripcion : "LAFERRARI",
            categoria: "motor",
            vehiculo:"coche",
            km:0,
            precio: 2450000
        },
      
      ]

      */

      constructor(private _db: AngularFireDatabase){
       
      }

    /*getProductos(): IProducto[]{
        return this.productos;
    }
    */

    /*getProducto(nombre:string) : IProducto{

      return this.productos.find(x => x.nombre == nombre);
    }

    */

    setProductos(producto: (IProducto|ITecnologia|IInmobiliaria| IMotor)){
        let ref = this._db.database.ref("productos");
        let res = ref.push(producto)
        console.log("Se ha insertado: " +res.key);
    }
}